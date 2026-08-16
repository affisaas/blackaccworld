/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { CategoryView } from './components/CategoryView';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { BlogPage } from './components/BlogPage';
import { CartDrawer } from './components/CartDrawer';
import { CryptoCheckoutModal } from './components/CryptoCheckoutModal';
import { CryptoWalletSheet } from './components/CryptoWalletSheet';
import { TestServiceModal } from './components/TestServiceModal';
import { WarrantyModal } from './components/WarrantyModal';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { Footer } from './components/Footer';
import { FloatingSupport } from './components/FloatingSupport';
import { 
  CartItem, 
  ServiceCategory, 
  ServiceItem, 
  ServiceTier, 
  OrderRecord 
} from './types';
import { ALL_SERVICES } from './data/servicesData';
import { BLOG_POSTS } from './data/blogData';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('baw_cart') || '[]');
    } catch {
      return [];
    }
  });

  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Blog State
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [selectedPostSlug, setSelectedPostSlug] = useState<string | null>(null);

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCryptoCheckoutOpen, setIsCryptoCheckoutOpen] = useState(false);
  const [isCryptoWalletsOpen, setIsCryptoWalletsOpen] = useState(false);
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);
  const [testModalInitialService, setTestModalInitialService] = useState<ServiceItem | null>(null);
  const [isWarrantyModalOpen, setIsWarrantyModalOpen] = useState(false);
  const [isTrackerModalOpen, setIsTrackerModalOpen] = useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('baw_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Dynamically update document title and meta description based on selected service / blog for SEO
  useEffect(() => {
    if (selectedService) {
      document.title = `${selectedService.title} — Buy 100% Non-Drop & Verified | BlackAccWorld`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', `Buy verified ${selectedService.title}. Instant delivery, aged residential IP profiles, custom guidelines, and 1-time free replacement warranty.`);
      }
    } else if (isBlogOpen && selectedPostSlug) {
      const post = BLOG_POSTS.find(p => p.slug === selectedPostSlug);
      if (post) {
        document.title = `${post.title} | BlackAccWorld Masterclass`;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute('content', post.excerpt);
        }
      }
    } else {
      document.title = 'BlackAccWorld — Buy Verified Accounts, Google Reviews & Bank Accounts';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Buy verified Google & Trustpilot reviews, US business bank accounts (Mercury, Chase, Relay), and aged PVA accounts. Fast crypto checkout with replacement warranty.');
      }
    }
  }, [selectedService, isBlogOpen, selectedPostSlug]);
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        if (hash === 'blog') {
          setIsBlogOpen(true);
          setSelectedPostSlug(null);
          setSelectedService(null);
        } else if (hash.startsWith('blog/')) {
          const blogSlug = hash.replace('blog/', '');
          setIsBlogOpen(true);
          setSelectedPostSlug(blogSlug);
          setSelectedService(null);
        } else {
          const found = ALL_SERVICES.find(s => s.slug === hash || s.id === hash);
          if (found) {
            setSelectedService(found);
            setIsBlogOpen(false);
            setSelectedPostSlug(null);
          } else if (hash === 'reviews' || hash === 'bank_accounts' || hash === 'accounts' || hash === 'all') {
            setSelectedCategory(hash as ServiceCategory);
            setIsBlogOpen(false);
            setSelectedPostSlug(null);
            setSelectedService(null);
          }
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (
    service: ServiceItem,
    tier: ServiceTier,
    quantity: number = 1,
    customNotes?: string
  ) => {
    const cartId = `${service.id}-${tier.id}-${Date.now()}`;
    const newItem: CartItem = {
      cartId,
      serviceId: service.id,
      serviceTitle: service.title,
      tierId: tier.id,
      tierName: tier.name,
      price: tier.price,
      unit: tier.unit || service.priceUnit,
      quantity,
      iconKey: service.iconKey,
      category: service.category,
      customNotes
    };

    setCart(prev => {
      const existingIdx = prev.findIndex(i => i.serviceId === service.id && i.tierId === tier.id && i.customNotes === customNotes);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      }
      return [newItem, ...prev];
    });

    showToast(`Added ${quantity}x ${service.title} (${tier.name}) to cart!`);
  };

  const handleUpdateQuantity = (cartId: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(cartId);
      return;
    }
    setCart(prev => prev.map(item => item.cartId === cartId ? { ...item, quantity: qty } : item));
  };

  const handleRemoveItem = (cartId: string) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
    showToast('Item removed from cart');
  };

  const handleClearCart = () => {
    setCart([]);
    showToast('Cart cleared');
  };

  const handleDirectCryptoCheckout = (
    service: ServiceItem,
    tier: ServiceTier,
    quantity: number,
    customNotes?: string
  ) => {
    handleAddToCart(service, tier, quantity, customNotes);
    setSelectedService(null);
    setIsBlogOpen(false);
    setIsCryptoCheckoutOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setIsBlogOpen(false);
    setSelectedPostSlug(null);
    window.location.hash = service.slug;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCatalog = () => {
    setSelectedService(null);
    setIsBlogOpen(false);
    setSelectedPostSlug(null);
    if (window.location.hash) {
      history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBlog = (slug?: string | null) => {
    setIsBlogOpen(true);
    setSelectedService(null);
    setSelectedPostSlug(slug || null);
    window.location.hash = slug ? `blog/${slug}` : 'blog';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTestModal = (service?: ServiceItem) => {
    setTestModalInitialService(service || null);
    setIsTestModalOpen(true);
  };

  const cartTotalUsd = cart.reduce((sum, it) => sum + it.price * it.quantity, 0);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500 selection:text-zinc-950">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-5 z-50 bg-emerald-600 text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce border border-emerald-400">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation Bar with Single-Line Header, Category Sub-Menus & Blog */}
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedService(null);
          setIsBlogOpen(false);
          setSelectedPostSlug(null);
          setSelectedCategory(cat);
          setSearchQuery('');
          window.location.hash = cat === 'all' ? '' : cat;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectService={handleSelectService}
        isBlogActive={isBlogOpen}
        onOpenBlog={() => handleOpenBlog(null)}
        onOpenWarrantyModal={() => setIsWarrantyModalOpen(true)}
      />

      {/* Hero Section (only when on homepage catalog view) */}
      {!isBlogOpen && !selectedService && !searchQuery && selectedCategory === 'all' && (
        <HeroBanner
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            window.scrollTo({ top: 400, behavior: 'smooth' });
          }}
          onOpenTestModal={() => handleOpenTestModal()}
          onOpenCryptoWallets={() => setIsCryptoWalletsOpen(true)}
        />
      )}

      {/* Main Content Area */}
      <main className="min-h-[70vh]">
        {isBlogOpen ? (
          <BlogPage
            onSelectService={handleSelectService}
            onNavigateHome={handleBackToCatalog}
            selectedPostSlug={selectedPostSlug}
            onSelectPostSlug={(slug) => handleOpenBlog(slug)}
          />
        ) : selectedService ? (
          <ServiceDetailPage
            service={selectedService}
            onBack={handleBackToCatalog}
            onSelectCategory={(cat) => {
              setSelectedService(null);
              setSelectedCategory(cat);
              setSearchQuery('');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectService={handleSelectService}
            onAddToCart={handleAddToCart}
            onDirectCryptoCheckout={handleDirectCryptoCheckout}
            onOpenTestModal={handleOpenTestModal}
            onOpenWarrantyModal={() => setIsWarrantyModalOpen(true)}
          />
        ) : (
          <CategoryView
            category={selectedCategory}
            searchQuery={searchQuery}
            onAddToCart={handleAddToCart}
            onViewDetails={handleSelectService}
            onOpenTestModal={handleOpenTestModal}
            onOpenWarrantyModal={() => setIsWarrantyModalOpen(true)}
          />
        )}
      </main>

      {/* Footer with Blog Link */}
      <Footer
        onSelectCategory={(cat) => {
          setSelectedService(null);
          setIsBlogOpen(false);
          setSelectedCategory(cat);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenWarrantyModal={() => setIsWarrantyModalOpen(true)}
        onOpenCryptoWallets={() => setIsCryptoWalletsOpen(true)}
        onOpenTestModal={() => handleOpenTestModal()}
        onOpenBlog={() => handleOpenBlog(null)}
      />

      {/* Floating Support Beacon */}
      <FloatingSupport onOpenTestModal={() => handleOpenTestModal()} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onCheckoutCrypto={() => {
          setIsCartOpen(false);
          setIsCryptoCheckoutOpen(true);
        }}
      />

      {/* Crypto Checkout Gateway Modal */}
      <CryptoCheckoutModal
        isOpen={isCryptoCheckoutOpen}
        onClose={() => setIsCryptoCheckoutOpen(false)}
        items={cart}
        totalUsd={cartTotalUsd}
        onOrderSuccess={(order) => {
          setCart([]);
          showToast(`Order #${order.orderId} created successfully!`);
        }}
      />

      {/* 12 Crypto Wallets Sheet */}
      <CryptoWalletSheet
        isOpen={isCryptoWalletsOpen}
        onClose={() => setIsCryptoWalletsOpen(false)}
      />

      {/* Test Service Notice Modal */}
      <TestServiceModal
        isOpen={isTestModalOpen}
        onClose={() => setIsTestModalOpen(false)}
        initialService={testModalInitialService}
      />

      {/* 1-Time Replacement Warranty Modal */}
      <WarrantyModal
        isOpen={isWarrantyModalOpen}
        onClose={() => setIsWarrantyModalOpen(false)}
      />

      {/* Order Status & TXID Tracker Modal */}
      <OrderTrackerModal
        isOpen={isTrackerModalOpen}
        onClose={() => setIsTrackerModalOpen(false)}
      />

    </div>
  );
}
