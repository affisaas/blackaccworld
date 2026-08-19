import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft,
  ShieldCheck, 
  Clock, 
  ShoppingCart, 
  Send, 
  PhoneCall, 
  Coins, 
  CheckCircle2, 
  Sparkles, 
  Share2, 
  ChevronRight,
  Plus,
  Minus,
  Star,
  Zap,
  HelpCircle,
  Package,
  RotateCcw,
  Check,
  Globe,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Award,
  ExternalLink,
  Link2,
  BookOpen,
  ArrowUpRight,
  BookmarkCheck,
  Compass
} from 'lucide-react';
import { ServiceItem, ServiceTier, ServiceCategory } from '../types';
import { BrandIcon } from './BrandIcons';
import { CONTACT_INFO, ALL_SERVICES } from '../data/servicesData';
import { 
  getOfficialExternalLinks, 
  getRelatedInternalServices, 
  getRelatedBlogArticles 
} from '../data/serviceLinksData';
import { ServiceCard } from './ServiceCard';
import { SeoRichContent } from './SeoRichContent';
import { getServiceSeoRichContent } from '../utils/seoContentGenerator';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onBack: () => void;
  onSelectCategory: (cat: ServiceCategory) => void;
  onSelectService: (service: ServiceItem) => void;
  onAddToCart: (service: ServiceItem, tier: ServiceTier, quantity: number, notes?: string) => void;
  onDirectCryptoCheckout: (service: ServiceItem, tier: ServiceTier, quantity: number, notes?: string) => void;
  onOpenTestModal: (service: ServiceItem) => void;
  onOpenWarrantyModal: () => void;
  onOpenBlog?: (slug?: string | null) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onSelectCategory,
  onSelectService,
  onAddToCart,
  onDirectCryptoCheckout,
  onOpenTestModal,
  onOpenWarrantyModal,
  onOpenBlog
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>(
    service.tiers.find(t => t.popular)?.id || service.tiers[0].id
  );
  const [quantity, setQuantity] = useState(1);
  const [customNotes, setCustomNotes] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const officialExternalLinks = getOfficialExternalLinks(service);
  const relatedInternalServices = getRelatedInternalServices(service);
  const relatedBlogArticles = getRelatedBlogArticles(service);

  // Update selected tier if service changes
  useEffect(() => {
    setSelectedTierId(service.tiers.find(t => t.popular)?.id || service.tiers[0].id);
    setQuantity(1);
    setCustomNotes('');
    setOpenFaqIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [service.id]);

  const selectedTier = service.tiers.find(t => t.id === selectedTierId) || service.tiers[0];
  const totalPrice = selectedTier.price * quantity;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const getTelegramOrderUrl = () => {
    const text = encodeURIComponent(
      `Hello @EgSupport24, I want to order from blackaccworld.com:\n\n` +
      `Product: ${service.title}\n` +
      `Option: ${selectedTier.name}\n` +
      `Quantity: ${quantity} x $${selectedTier.price} = $${totalPrice} USD\n` +
      (customNotes ? `Target/Link/Notes: ${customNotes}\n` : '') +
      `\nPlease provide crypto payment address / invoice.`
    );
    return `https://t.me/${CONTACT_INFO.telegramUser}?text=${text}`;
  };

  const getWhatsappOrderUrl = () => {
    const text = encodeURIComponent(
      `Hello, I want to order from blackaccworld.com:\n\n` +
      `Product: ${service.title}\n` +
      `Option: ${selectedTier.name}\n` +
      `Quantity: ${quantity} x $${selectedTier.price} = $${totalPrice} USD\n` +
      (customNotes ? `Target/Link/Notes: ${customNotes}\n` : '') +
      `\nPlease provide payment details / invoice.`
    );
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${text}`;
  };

  // Related services in the same category
  const relatedServices = ALL_SERVICES
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  const getCategoryName = (cat: ServiceCategory) => {
    switch (cat) {
      case 'reviews': return 'Reviews Services';
      case 'bank_accounts': return 'Bank Accounts';
      case 'accounts': return 'Accounts Services';
      default: return 'All Services';
    }
  };

  // Structured FAQs
  const getFaqs = () => {
    const defaultFaqs = service.faq || [];
    const categoryFaqs = service.category === 'reviews' ? [
      {
        q: 'What is your One-Time Replacement Warranty Policy?',
        a: 'If any review drops or gets filtered within your warranty period, contact our support on Telegram (@EgSupport24) or WhatsApp (+1 307 393-9979). We verify the link and provide a 1-time full free replacement promptly.'
      },
      {
        q: 'Are reviews posted from real, aged accounts?',
        a: 'Yes. All reviews are posted from authentic profiles with established activity history, photos, and location-matched residential IP addresses to ensure non-drop retention.'
      },
      {
        q: 'Can I provide my own custom review text and keywords?',
        a: 'Yes! You can add your custom text, instructions, and target keywords in the notes field during checkout, or leave it blank for our team to write natural 5-star reviews.'
      },
      {
        q: 'What cryptocurrencies are accepted?',
        a: 'We accept 12 cryptocurrencies: Bitcoin (BTC), USDT (TRC20, BEP20, ERC20), Ethereum (ETH), Solana (SOL), BNB, Litecoin (LTC), USDC, TRON, and DOGE.'
      }
    ] : service.category === 'bank_accounts' ? [
      {
        q: 'What details are included with the Bank Account?',
        a: 'Every package includes online banking login, registered email access, virtual phone number for 2FA SMS, routing & account numbers, debit card details, KYC documentation scans, and browser session cookies.'
      },
      {
        q: 'Is this bank account fully verified?',
        a: 'Yes. Accounts are 100% KYC verified with genuine residential identities, ready for ACH transfers, direct deposits, and daily banking.'
      },
      {
        q: 'What warranty policy is included?',
        a: 'We provide a 1-time free replacement warranty in case of any initial credential defect or login issue upon delivery.'
      }
    ] : [
      {
        q: 'What is included with this account package?',
        a: 'You receive complete login credentials (email/username + password), recovery email access, 2FA secret keys, browser session cookies, and login instructions.'
      },
      {
        q: 'What is the replacement policy?',
        a: 'If you encounter any initial login failure or non-working credential within the warranty period, we provide an immediate 1-time replacement.'
      }
    ];

    const merged = [...defaultFaqs];
    categoryFaqs.forEach(cf => {
      if (cf?.q && !merged.some(m => (m?.q || '').toLowerCase() === cf.q.toLowerCase())) {
        merged.push(cf);
      }
    });
    return merged;
  };

  const allFaqs = getFaqs();

  // Dynamic Schema.org JSON-LD (Product, Service, BreadcrumbList, FAQPage) injection for Google Rich Snippets
  useEffect(() => {
    const tierPrices = service.tiers.map(t => t.price);
    const lowPrice = Math.min(...tierPrices).toFixed(2);
    const highPrice = Math.max(...tierPrices).toFixed(2);
    const serviceUrl = `https://blackaccworld.com/service/${service.id}`;

    // 1. Product & Service Combined Graph Schema
    const productAndServiceSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
          "@id": `${serviceUrl}#product`,
          "name": service.title,
          "description": service.fullDesc || service.shortDesc,
          "image": [
            "https://blackaccworld.com/favicon.svg"
          ],
          "brand": {
            "@type": "Brand",
            "name": "BlackAccWorld"
          },
          "sku": `BAW-${service.id.toUpperCase()}`,
          "mpn": `BAW-${service.id.toUpperCase()}-2026`,
          "category": getCategoryName(service.category),
          "offers": {
            "@type": "AggregateOffer",
            "url": serviceUrl,
            "priceCurrency": "USD",
            "lowPrice": lowPrice,
            "highPrice": highPrice,
            "offerCount": service.tiers.length.toString(),
            "priceValidUntil": "2027-12-31",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "BlackAccWorld",
              "url": "https://blackaccworld.com/"
            },
            "offers": service.tiers.map((tier) => ({
              "@type": "Offer",
              "name": `${service.title} (${tier.name})`,
              "description": tier.description || `${tier.name} tier for ${service.title}`,
              "price": tier.price.toFixed(2),
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2027-12-31",
              "url": serviceUrl,
              "itemCondition": "https://schema.org/NewCondition",
              "seller": {
                "@type": "Organization",
                "name": "BlackAccWorld",
                "url": "https://blackaccworld.com/"
              }
            }))
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": (130 + (service.id.length * 8)).toString(),
            "bestRating": "5",
            "worstRating": "1"
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "US",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 30,
            "returnMethod": "https://schema.org/ReturnByMail",
            "returnFees": "https://schema.org/FreeReturn"
          }
        },
        {
          "@type": "Service",
          "@id": `${serviceUrl}#service`,
          "name": service.title,
          "serviceType": getCategoryName(service.category),
          "provider": {
            "@type": "OnlineStore",
            "name": "BlackAccWorld",
            "url": "https://blackaccworld.com/",
            "telephone": "+13073939979",
            "priceRange": "$$",
            "image": "https://blackaccworld.com/favicon.svg"
          },
          "areaServed": "Global",
          "description": service.shortDesc,
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": lowPrice,
            "highPrice": highPrice,
            "offerCount": service.tiers.length.toString()
          }
        }
      ]
    };

    // 2. BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://blackaccworld.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": getCategoryName(service.category),
          "item": `https://blackaccworld.com/category/${service.category}`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.title,
          "item": serviceUrl
        }
      ]
    };

    // 3. FAQPage Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    const injectScript = (id: string, schemaData: object) => {
      let el = document.getElementById(id) as HTMLScriptElement | null;
      if (!el) {
        el = document.createElement('script');
        el.id = id;
        el.type = 'application/ld+json';
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(schemaData, null, 2);
    };

    // Dynamic Title, Meta Description & Canonical updates
    const seoData = getServiceSeoRichContent(service);
    const originalTitle = document.title;
    document.title = seoData.metaTitle || `${service.title} | BlackAccWorld`;

    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute('content', seoData.metaDescription || service.shortDesc);
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const originalCanonical = canonicalLink ? canonicalLink.getAttribute('href') : '';
    if (canonicalLink) {
      canonicalLink.setAttribute('href', serviceUrl);
    }

    injectScript('dynamic-product-service-jsonld', productAndServiceSchema);
    injectScript('dynamic-breadcrumb-jsonld', breadcrumbSchema);
    injectScript('dynamic-faq-jsonld', faqSchema);

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) metaDesc.setAttribute('content', originalDesc);
      if (canonicalLink && originalCanonical) canonicalLink.setAttribute('href', originalCanonical);
      ['dynamic-product-service-jsonld', 'dynamic-breadcrumb-jsonld', 'dynamic-faq-jsonld'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, [service.id, selectedTierId]);

  // Clean structured deliverables
  const getDeliverables = () => {
    if (service.category === 'reviews') {
      return [
        { title: 'Live Review Link', desc: 'Direct URL to your published review on the platform' },
        { title: 'Full Screenshot Proof', desc: 'High-res capture with review text, star rating, and timestamp' },
        { title: 'Geotargeted Aged Profiles', desc: 'Posted from authentic profiles matched to your city/country' },
        { title: '1-Time Replacement Guarantee', desc: 'Protected by our free replacement warranty if a drop occurs' }
      ];
    } else if (service.category === 'bank_accounts') {
      return [
        { title: 'Online Banking Credentials', desc: 'Full username, password, and secure portal access' },
        { title: 'Account & Routing Numbers', desc: 'Domestic wire, ACH, and direct deposit details' },
        { title: 'VCC / Debit Card Details', desc: 'Card number, CVV, and expiration date' },
        { title: 'Email & SMS 2FA Access', desc: 'Access to registered recovery mailbox & virtual phone' },
        { title: 'Verified KYC Documentation', desc: 'Identity verification scans for Tier-3 active status' }
      ];
    } else {
      return [
        { title: 'Primary Account Credentials', desc: 'Username/email and ultra-secure generated password' },
        { title: '2FA Backup Secret Keys', desc: 'Two-factor authenticator setup keys for instant logins' },
        { title: 'Recovery Mailbox Access', desc: 'Dedicated recovery email with full login credentials' },
        { title: 'Session Cookies (JSON)', desc: 'Clean browser session cookies for seamless instant import' }
      ];
    }
  };

  // Clean 4-step fulfillment workflow
  const getWorkflowSteps = () => {
    if (service.category === 'reviews') {
      return [
        { step: '01', title: 'Submit Requirements', desc: 'Provide your business link and optional review guidelines or keywords.' },
        { step: '02', title: 'Profile & IP Setup', desc: 'Aged profiles and local residential proxies are assigned to your target location.' },
        { step: '03', title: 'Organic Drip-Feed', desc: 'Reviews are posted at natural intervals to bypass platform spam filters safely.' },
        { step: '04', title: 'Proof & Warranty', desc: 'Receive live links, screenshot proof, and activated replacement guarantee.' }
      ];
    } else if (service.category === 'bank_accounts') {
      return [
        { step: '01', title: 'Select Institution', desc: 'Choose your desired bank package and checkout via crypto.' },
        { step: '02', title: 'Verification Audit', desc: 'Account undergoes balance check, KYC review, and session packaging.' },
        { step: '03', title: 'Secure Dispatch', desc: 'Credentials, routing info, and recovery access delivered securely.' },
        { step: '04', title: 'Support & Warranty', desc: '24/7 support guides initial login and activates replacement policy.' }
      ];
    } else {
      return [
        { step: '01', title: 'Select Account Tier', desc: 'Pick your desired account age, quantity, and region.' },
        { step: '02', title: 'Instant Processing', desc: 'System retrieves warmed, aged accounts with established histories.' },
        { step: '03', title: 'Handover & Cookies', desc: 'Receive credentials, recovery email, 2FA keys, and session cookies.' },
        { step: '04', title: 'Warranty Active', desc: 'Enjoy peace of mind with our one-time replacement guarantee.' }
      ];
    }
  };

  const deliverables = getDeliverables();
  const workflowSteps = getWorkflowSteps();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 text-left">
      
      {/* 1. Sleek Navigation & Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
        <div className="flex items-center flex-wrap gap-2.5 text-xs sm:text-sm text-zinc-400">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-zinc-200 hover:text-white font-semibold bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-3.5 py-2 rounded-xl transition-colors text-xs sm:text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </button>
          
          <span className="text-zinc-600">/</span>
          
          <button
            onClick={() => onSelectCategory(service.category)}
            className="text-zinc-300 hover:text-white transition-colors font-medium"
          >
            {getCategoryName(service.category)}
          </button>

          <span className="text-zinc-600">/</span>

          <span className="text-zinc-100 font-semibold truncate max-w-xs sm:max-w-md">
            {service.title}
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleCopyLink}
            className="px-3.5 py-2 text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-xl border border-zinc-800 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
            title="Share page"
          >
            <Share2 className="w-4 h-4" />
            <span>{copiedLink ? 'Copied!' : 'Share'}</span>
          </button>

          <button
            onClick={() => onOpenTestModal(service)}
            className="px-3.5 py-2 text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/15 rounded-xl border border-amber-500/20 text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Test Service</span>
          </button>
        </div>
      </div>

      {/* 2. Main Product Grid: 7 cols Info + 5 cols Order Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left Column (7 cols): Clean, readable, organized narrative */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Header Card */}
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center p-3.5 shrink-0 shadow-lg">
                <BrandIcon name={service.iconKey} className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              <div className="space-y-2 flex-1 min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {service.platform}
                  </span>
                  
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-zinc-800/90 text-zinc-200">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>5.0 Non-Drop Guarantee</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    In Stock
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight pt-1 leading-tight">
                  {service.title}
                </h1>

                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                  {service.shortDesc}
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-zinc-800/80 text-left">
              <div className="bg-zinc-950/70 p-3.5 rounded-xl border border-zinc-800/60">
                <span className="text-xs text-zinc-400 uppercase font-bold tracking-wider block">Starting Rate</span>
                <span className="text-base sm:text-lg font-black font-mono text-emerald-400 mt-1 block">${service.startingPrice} <span className="text-xs text-zinc-400 font-sans font-normal">USD</span></span>
              </div>
              <div className="bg-zinc-950/70 p-3.5 rounded-xl border border-zinc-800/60">
                <span className="text-xs text-zinc-400 uppercase font-bold tracking-wider block">Delivery Speed</span>
                <span className="text-xs sm:text-sm font-bold text-zinc-100 truncate mt-1 block">{service.deliveryTime.split('(')[0]}</span>
              </div>
              <div className="bg-zinc-950/70 p-3.5 rounded-xl border border-zinc-800/60">
                <span className="text-xs text-zinc-400 uppercase font-bold tracking-wider block">Warranty</span>
                <span className="text-xs sm:text-sm font-bold text-amber-300 truncate mt-1 block">1-Time Replacement</span>
              </div>
              <div className="bg-zinc-950/70 p-3.5 rounded-xl border border-zinc-800/60">
                <span className="text-xs text-zinc-400 uppercase font-bold tracking-wider block">Payment</span>
                <span className="text-xs sm:text-sm font-bold text-sky-400 truncate mt-1 block">12 Cryptos</span>
              </div>
            </div>
          </div>

          {/* Service Overview & Full Details */}
          <div className="space-y-3.5">
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
              <Package className="w-4 h-4 text-emerald-400" />
              <span>Service Description &amp; Overview</span>
            </h2>
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 text-base text-zinc-200 leading-relaxed space-y-4 font-normal">
              <p>{service.fullDesc}</p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="space-y-3.5">
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Key Features &amp; Specifications</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {service.features.map((feat, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/70 text-sm text-zinc-100 font-medium"
                >
                  <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile-Only Order Configurator (Placed immediately after description & features) */}
          <div className="block lg:hidden pt-2">
            <div className="bg-zinc-900/95 rounded-2xl border-2 border-emerald-500/40 p-5 sm:p-6 space-y-5 shadow-2xl shadow-emerald-950/20">
              
              <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800">
                <div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Configure Your Order</span>
                  </span>
                  <span className="text-[11px] text-zinc-400 block mt-0.5">Select package tier &amp; instant checkout</span>
                </div>
                <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Instant Queue</span>
                </span>
              </div>

              {/* 1. Package / Warranty Tier Selection */}
              <div className="space-y-2.5">
                <label className="text-xs sm:text-sm font-bold text-zinc-200 block">
                  Select Package Tier:
                </label>
                <div className="space-y-2.5">
                  {service.tiers.map((tier) => (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all ${
                        selectedTierId === tier.id
                          ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-sm'
                          : 'bg-zinc-950/70 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            checked={selectedTierId === tier.id}
                            onChange={() => setSelectedTierId(tier.id)}
                            className="text-emerald-500 focus:ring-emerald-500 h-4 w-4 bg-zinc-900 border-zinc-700"
                          />
                          <div>
                            <span className="font-bold text-sm text-zinc-100 block">{tier.name}</span>
                            {tier.warranty && (
                              <span className="text-xs text-amber-300 font-semibold">
                                {tier.warranty}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-base font-bold font-mono text-emerald-400">
                            ${tier.price}
                          </span>
                          <span className="text-xs text-zinc-400 block font-sans">USD</span>
                        </div>
                      </div>
                      {tier.description && (
                        <p className="text-xs text-zinc-300 mt-2 pl-7 leading-relaxed font-normal">
                          {tier.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Quantity Selector */}
              <div className="space-y-2.5">
                <label className="text-xs sm:text-sm font-bold text-zinc-200 block">
                  Quantity:
                </label>
                <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                  <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-xl p-1">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-bold font-mono text-white text-base">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {[1, 5, 10, 25].map(q => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => setQuantity(q)}
                        className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                          quantity === q 
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold' 
                            : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white'
                        }`}
                      >
                        {q}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Target Link or Custom Notes */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-zinc-200 block">
                  Target Link or Requirements (Optional):
                </label>
                <textarea
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Paste target profile/listing URL, or custom keywords/instructions..."
                  rows={2}
                  className="w-full bg-zinc-950 text-zinc-100 text-xs sm:text-sm p-3 rounded-xl border border-zinc-800 focus:outline-none focus:border-emerald-500 placeholder-zinc-500"
                />
              </div>

              {/* Total Calculation */}
              <div className="pt-3.5 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase text-zinc-400 font-bold">Total Price:</div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                    ${totalPrice} <span className="text-xs sm:text-sm font-normal text-zinc-400 font-sans">USD</span>
                  </div>
                </div>
                <div className="text-right text-xs sm:text-sm text-zinc-300 flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-zinc-400" />
                  <span>{service.deliveryTime.split('(')[0]}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                <button
                  id="mobile-crypto-checkout-btn"
                  onClick={() => {
                    onDirectCryptoCheckout(service, selectedTier, quantity, customNotes);
                  }}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Coins className="w-4 h-4 text-emerald-200" />
                  <span>Instant Crypto Checkout (12 Coins)</span>
                </button>

                <button
                  id="mobile-add-to-cart-btn"
                  onClick={() => {
                    onAddToCart(service, selectedTier, quantity, customNotes);
                  }}
                  className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-bold text-xs sm:text-sm rounded-xl border border-zinc-700 flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add To Cart</span>
                </button>

                {/* Direct Telegram & WhatsApp Desk */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href={getTelegramOrderUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 bg-sky-500/10 hover:bg-sky-500/15 border border-sky-500/20 text-sky-300 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all text-center"
                  >
                    <Send className="w-4 h-4" />
                    <span>Telegram Desk</span>
                  </a>

                  <a
                    href={getWhatsappOrderUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 text-emerald-300 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all text-center"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>WhatsApp Desk</span>
                  </a>
                </div>
              </div>

              {/* Reassurance Note */}
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-400 flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1-Time Free Replacement Warranty &amp; 24/7 Priority Support Included</span>
              </div>

            </div>
          </div>

          {/* What You Receive (Deliverables) */}
          <div className="space-y-3.5">
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>What You Receive Upon Delivery</span>
            </h2>
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 space-y-3.5">
              {deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 text-sm sm:text-base">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="font-bold text-white">{item.title}:</span>{' '}
                    <span className="text-zinc-300">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Fulfillment Workflow */}
          <div className="space-y-3.5">
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>How Order Fulfillment Works</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {workflowSteps.map((wf, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                      STEP {wf.step}
                    </span>
                    <Clock className="w-4 h-4 text-zinc-500" />
                  </div>
                  <div className="font-bold text-white text-sm sm:text-base pt-1">{wf.title}</div>
                  <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">{wf.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Warranty Card */}
          <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-amber-200 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 font-bold text-sm sm:text-base text-amber-300">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>One-Time Free Replacement Warranty</span>
              </div>
              <button
                onClick={onOpenWarrantyModal}
                className="text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 underline"
              >
                View Policy
              </button>
            </div>
            <p className="text-sm text-amber-200/90 leading-relaxed font-normal">
              {service.warrantyPolicy || CONTACT_INFO.replacementPolicyNotice}
            </p>
          </div>

          {/* FAQs Accordion */}
          <div className="space-y-3.5">
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-400" />
              <span>Frequently Asked Questions</span>
            </h2>
            <div className="space-y-2.5">
              {allFaqs.map((f, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left font-bold text-zinc-100 text-sm sm:text-base hover:text-white transition-colors"
                    >
                      <span>{f.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-emerald-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-zinc-800/40 pt-3">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SEO Rich Master Content Section */}
          <SeoRichContent 
            service={service} 
            onOpenWarrantyModal={onOpenWarrantyModal} 
          />

          {/* Official Platform Documentation & External Authority Portals */}
          {officialExternalLinks.length > 0 && (
            <section className="space-y-4 pt-4 border-t border-zinc-850">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Official External Authority Links
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                    Official Documentation, Support Policies &amp; Compliance Standards
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3.5">
                {officialExternalLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer external"
                    className="group block p-4 sm:p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-sky-500/40 transition-all space-y-2 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                            {link.badge}
                          </span>
                          <span className="text-xs text-zinc-500 font-mono">
                            {link.domain}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors flex items-center gap-1.5">
                          <span>{link.title}</span>
                          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-sky-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {link.description}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Contextual Related Services & Ecosystem Links (Internal Cross-Links) */}
          {relatedInternalServices.length > 0 && (
            <section className="space-y-4 pt-4 border-t border-zinc-850">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Link2 className="w-3.5 h-3.5" />
                    Internal Ecosystem Cross-Links
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                    Related Services &amp; Recommended Companion Packages
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {relatedInternalServices.map((rel, idx) => {
                  const fullService = ALL_SERVICES.find(s => s.slug === rel.slug);
                  return (
                    <a
                      key={idx}
                      href={`/service/${rel.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (fullService) {
                          onSelectService(fullService);
                        }
                      }}
                      className="group block p-4 sm:p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-emerald-500/40 transition-all space-y-3 cursor-pointer shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {rel.relation}
                        </span>
                        <span className="text-xs font-extrabold text-white font-mono">
                          From ${rel.startingPrice}
                        </span>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-zinc-800/90 border border-zinc-700/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <BrandIcon name={rel.iconKey} iconKey={rel.iconKey} className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                            {rel.title}
                          </h4>
                          <p className="text-xs text-zinc-400 line-clamp-2 mt-1 leading-relaxed">
                            {rel.reason}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-xs text-emerald-400 font-bold group-hover:text-emerald-300">
                        <span>View Service Details &amp; Pricing</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </section>
          )}

          {/* Related Strategy Guides & Knowledge Base (Internal Blog Links) */}
          {relatedBlogArticles.length > 0 && (
            <section className="space-y-4 pt-4 border-t border-zinc-850">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Internal Knowledge Base Links
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                    Related Strategy Articles &amp; Tactical Blueprints
                  </h3>
                </div>
                {onOpenBlog && (
                  <button
                    onClick={() => onOpenBlog(null)}
                    className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>View all articles</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {relatedBlogArticles.map((article, idx) => (
                  <a
                    key={idx}
                    href={`/blog/${article.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onOpenBlog) {
                        onOpenBlog(article.slug);
                      }
                    }}
                    className="group block p-4 sm:p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-purple-500/40 transition-all space-y-2.5 cursor-pointer shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {article.categoryLabel}
                      </span>
                      <span className="text-zinc-500 font-mono text-[11px]">
                        {article.readTime}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h4>

                    <div className="pt-2 flex items-center gap-1 text-xs text-purple-400 font-bold group-hover:text-purple-300">
                      <span>Read comprehensive guide</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Quick Hub Navigation & Policy Internal Links */}
          <section className="p-4 sm:p-5 rounded-2xl bg-zinc-950/70 border border-zinc-850 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-zinc-500" />
              Quick Navigation Hub &amp; Policies
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => onSelectCategory(service.category)}
                className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-all"
              >
                Browse All {getCategoryName(service.category)}
              </button>
              <button
                onClick={onOpenWarrantyModal}
                className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-emerald-400 border border-zinc-800 hover:border-emerald-500/30 transition-all flex items-center gap-1"
              >
                <ShieldCheck className="w-3 h-3" />
                1-Time Free Replacement Warranty Policy
              </button>
              {onOpenBlog && (
                <button
                  onClick={() => onOpenBlog(null)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-all flex items-center gap-1"
                >
                  <BookOpen className="w-3 h-3" />
                  Official BlackAcc World Blog
                </button>
              )}
            </div>
          </section>

          {/* SEO Tags */}
          <div className="space-y-2.5 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Tags &amp; Keywords
            </span>
            <div className="flex flex-wrap gap-2">
              {service.seoKeywords.map((kw, i) => (
                <span key={i} className="text-xs sm:text-sm px-3 py-1.5 bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-xl font-medium">
                  #{kw}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (5 cols): Sticky Order & Instant Checkout Card (Desktop Only: hidden on mobile, shown on lg+) */}
        <div className="hidden lg:block lg:col-span-5">
          <div className="sticky top-24 space-y-4">
            
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 sm:p-7 space-y-5 shadow-xl backdrop-blur-sm">
              
              <div className="flex items-center justify-between pb-3.5 border-b border-zinc-800">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  Order Options
                </span>
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Instant Queue</span>
                </span>
              </div>

              {/* 1. Package / Warranty Tier Selection */}
              <div className="space-y-2.5">
                <label className="text-xs sm:text-sm font-bold text-zinc-200 block">
                  Select Package Tier:
                </label>
                <div className="space-y-2.5">
                  {service.tiers.map((tier) => (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        selectedTierId === tier.id
                          ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-sm'
                          : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            checked={selectedTierId === tier.id}
                            onChange={() => setSelectedTierId(tier.id)}
                            className="text-emerald-500 focus:ring-emerald-500 h-4 w-4 bg-zinc-900 border-zinc-700"
                          />
                          <div>
                            <span className="font-bold text-sm text-zinc-100 block">{tier.name}</span>
                            {tier.warranty && (
                              <span className="text-xs text-amber-300 font-semibold">
                                {tier.warranty}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-base font-bold font-mono text-emerald-400">
                            ${tier.price}
                          </span>
                          <span className="text-xs text-zinc-400 block font-sans">USD</span>
                        </div>
                      </div>
                      {tier.description && (
                        <p className="text-xs sm:text-sm text-zinc-300 mt-2 pl-7 leading-relaxed font-normal">
                          {tier.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Quantity Selector */}
              <div className="space-y-2.5">
                <label className="text-xs sm:text-sm font-bold text-zinc-200 block">
                  Quantity:
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-xl p-1">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-bold font-mono text-white text-base">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {[1, 5, 10, 25].map(q => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => setQuantity(q)}
                        className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                          quantity === q 
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold' 
                            : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white'
                        }`}
                      >
                        {q}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Target Link or Custom Notes */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-bold text-zinc-200 block">
                  Target Link or Requirements (Optional):
                </label>
                <textarea
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Paste target profile/listing URL, or custom keywords/instructions..."
                  rows={2}
                  className="w-full bg-zinc-950 text-zinc-100 text-xs sm:text-sm p-3 rounded-xl border border-zinc-800 focus:outline-none focus:border-emerald-500 placeholder-zinc-500"
                />
              </div>

              {/* Total Calculation */}
              <div className="pt-3.5 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase text-zinc-400 font-bold">Total Price:</div>
                  <div className="text-3xl font-black text-white font-mono">
                    ${totalPrice} <span className="text-xs sm:text-sm font-normal text-zinc-400 font-sans">USD</span>
                  </div>
                </div>
                <div className="text-right text-xs sm:text-sm text-zinc-300 flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-zinc-400" />
                  <span>{service.deliveryTime.split('(')[0]}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-1">
                <button
                  id="page-crypto-checkout-btn"
                  onClick={() => {
                    onDirectCryptoCheckout(service, selectedTier, quantity, customNotes);
                  }}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Coins className="w-4 h-4 text-emerald-200" />
                  <span>Instant Crypto Checkout (12 Coins)</span>
                </button>

                <button
                  id="page-add-to-cart-btn"
                  onClick={() => {
                    onAddToCart(service, selectedTier, quantity, customNotes);
                  }}
                  className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-bold text-xs sm:text-sm rounded-xl border border-zinc-700 flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add To Cart</span>
                </button>

                {/* Direct Telegram & WhatsApp Desk */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href={getTelegramOrderUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 bg-sky-500/10 hover:bg-sky-500/15 border border-sky-500/20 text-sky-300 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all text-center"
                  >
                    <Send className="w-4 h-4" />
                    <span>Telegram Desk</span>
                  </a>

                  <a
                    href={getWhatsappOrderUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 text-emerald-300 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all text-center"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>WhatsApp Desk</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Reassurance Footer */}
            <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300 space-y-1.5">
              <div className="font-bold text-zinc-100 flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-emerald-400" />
                <span>Buyer Protection Guarantee</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                Includes 1-time free replacement warranty. 24/7 support via Telegram <strong>@{CONTACT_INFO.telegramUser}</strong>.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* 3. Related Services Carousel */}
      {relatedServices.length > 0 && (
        <div className="pt-10 border-t border-zinc-800 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Explore More
              </span>
              <h2 className="text-lg font-bold text-white mt-0.5">
                Related {getCategoryName(service.category)}
              </h2>
            </div>
            <button
              onClick={() => onSelectCategory(service.category)}
              className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>View all in category</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedServices.map((rel) => (
              <ServiceCard
                key={rel.id}
                service={rel}
                onAddToCart={onAddToCart}
                onViewDetails={onSelectService}
                onOpenTestModal={onOpenTestModal}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
