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
  Award
} from 'lucide-react';
import { ServiceItem, ServiceTier, ServiceCategory } from '../types';
import { BrandIcon } from './BrandIcons';
import { CONTACT_INFO, ALL_SERVICES } from '../data/servicesData';
import { ServiceCard } from './ServiceCard';
import { SeoRichContent } from './SeoRichContent';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onBack: () => void;
  onSelectCategory: (cat: ServiceCategory) => void;
  onSelectService: (service: ServiceItem) => void;
  onAddToCart: (service: ServiceItem, tier: ServiceTier, quantity: number, notes?: string) => void;
  onDirectCryptoCheckout: (service: ServiceItem, tier: ServiceTier, quantity: number, notes?: string) => void;
  onOpenTestModal: (service: ServiceItem) => void;
  onOpenWarrantyModal: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onSelectCategory,
  onSelectService,
  onAddToCart,
  onDirectCryptoCheckout,
  onOpenTestModal,
  onOpenWarrantyModal
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>(
    service.tiers.find(t => t.popular)?.id || service.tiers[0].id
  );
  const [quantity, setQuantity] = useState(1);
  const [customNotes, setCustomNotes] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
      if (!merged.some(m => m.q.toLowerCase() === cf.q.toLowerCase())) {
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

    injectScript('dynamic-product-service-jsonld', productAndServiceSchema);
    injectScript('dynamic-breadcrumb-jsonld', breadcrumbSchema);
    injectScript('dynamic-faq-jsonld', faqSchema);

    return () => {
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
        <div className="flex items-center flex-wrap gap-2 text-xs text-zinc-400">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white font-medium bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-3 py-1.5 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Services</span>
          </button>
          
          <span className="text-zinc-600">/</span>
          
          <button
            onClick={() => onSelectCategory(service.category)}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            {getCategoryName(service.category)}
          </button>

          <span className="text-zinc-600">/</span>

          <span className="text-zinc-200 font-medium truncate max-w-xs sm:max-w-md">
            {service.title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="px-3 py-1.5 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Share page"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Copied!' : 'Share'}</span>
          </button>

          <button
            onClick={() => onOpenTestModal(service)}
            className="px-3 py-1.5 text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/15 rounded-lg border border-amber-500/20 text-xs font-medium flex items-center gap-1.5 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Test Service</span>
          </button>
        </div>
      </div>

      {/* 2. Main Product Grid: 7 cols Info + 5 cols Order Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* Left Column (7 cols): Clean, readable, organized narrative */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Header Card */}
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-7 space-y-5">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center p-3 shrink-0 shadow-sm">
                <BrandIcon name={service.iconKey} className="w-9 h-9 sm:w-10 sm:h-10" />
              </div>

              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {service.platform}
                  </span>
                  
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-zinc-800/80 text-zinc-300">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>5.0 Non-Drop Guarantee</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    In Stock
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight pt-1">
                  {service.title}
                </h1>

                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {service.shortDesc}
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-zinc-800/80 text-left">
              <div className="bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60">
                <span className="text-[10px] text-zinc-400 uppercase font-medium tracking-wider block">Starting Rate</span>
                <span className="text-sm font-bold font-mono text-emerald-400 mt-0.5 block">${service.startingPrice} <span className="text-[10px] text-zinc-400 font-sans font-normal">USD</span></span>
              </div>
              <div className="bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60">
                <span className="text-[10px] text-zinc-400 uppercase font-medium tracking-wider block">Delivery Speed</span>
                <span className="text-xs font-semibold text-zinc-200 truncate mt-0.5 block">{service.deliveryTime.split('(')[0]}</span>
              </div>
              <div className="bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60">
                <span className="text-[10px] text-zinc-400 uppercase font-medium tracking-wider block">Warranty</span>
                <span className="text-xs font-semibold text-amber-300 truncate mt-0.5 block">1-Time Replacement</span>
              </div>
              <div className="bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60">
                <span className="text-[10px] text-zinc-400 uppercase font-medium tracking-wider block">Payment</span>
                <span className="text-xs font-semibold text-sky-400 truncate mt-0.5 block">12 Cryptos</span>
              </div>
            </div>
          </div>

          {/* Service Overview & Full Details */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Package className="w-4 h-4 text-emerald-400" />
              <span>Service Description</span>
            </h2>
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-5 sm:p-6 text-sm text-zinc-300 leading-relaxed space-y-3">
              <p>{service.fullDesc}</p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Key Features &amp; Specifications</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feat, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/70 text-xs text-zinc-200"
                >
                  <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-snug pt-0.5">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What You Receive (Deliverables) */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>What You Receive Upon Delivery</span>
            </h2>
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-5 space-y-3">
              {deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <div>
                    <span className="font-semibold text-zinc-100">{item.title}:</span>{' '}
                    <span className="text-zinc-400">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Fulfillment Workflow */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>How Order Fulfillment Works</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {workflowSteps.map((wf, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/70 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      STEP {wf.step}
                    </span>
                    <Clock className="w-3 h-3 text-zinc-500" />
                  </div>
                  <div className="font-semibold text-white text-xs pt-1">{wf.title}</div>
                  <div className="text-xs text-zinc-400 leading-normal">{wf.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Warranty Card */}
          <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-amber-200 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-amber-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>One-Time Free Replacement Warranty</span>
              </div>
              <button
                onClick={onOpenWarrantyModal}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline"
              >
                View Policy
              </button>
            </div>
            <p className="text-xs text-amber-200/80 leading-relaxed">
              {service.warrantyPolicy || CONTACT_INFO.replacementPolicyNotice}
            </p>
          </div>

          {/* FAQs Accordion */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-400" />
              <span>Frequently Asked Questions</span>
            </h2>
            <div className="space-y-2">
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
                      className="w-full p-4 flex items-center justify-between gap-3 text-left font-semibold text-zinc-200 text-xs sm:text-sm hover:text-white transition-colors"
                    >
                      <span>{f.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/40 pt-2.5">
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

          {/* SEO Tags */}
          <div className="space-y-2 pt-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              Tags &amp; Keywords
            </span>
            <div className="flex flex-wrap gap-1.5">
              {service.seoKeywords.map((kw, i) => (
                <span key={i} className="text-xs px-2.5 py-1 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded-lg">
                  #{kw}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (5 cols): Sticky Order & Instant Checkout Card */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 space-y-4">
            
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 space-y-5 shadow-xl backdrop-blur-sm">
              
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Order Options
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  <span>Instant Queue</span>
                </span>
              </div>

              {/* 1. Package / Warranty Tier Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-300 block">
                  Select Package Tier:
                </label>
                <div className="space-y-2">
                  {service.tiers.map((tier) => (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        selectedTierId === tier.id
                          ? 'bg-emerald-500/10 border-emerald-500 text-white'
                          : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <input
                            type="radio"
                            checked={selectedTierId === tier.id}
                            onChange={() => setSelectedTierId(tier.id)}
                            className="text-emerald-500 focus:ring-emerald-500 h-4 w-4 bg-zinc-900 border-zinc-700"
                          />
                          <div>
                            <span className="font-bold text-xs text-zinc-100 block">{tier.name}</span>
                            {tier.warranty && (
                              <span className="text-[10px] text-amber-300 font-medium">
                                {tier.warranty}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold font-mono text-emerald-400">
                            ${tier.price}
                          </span>
                          <span className="text-[10px] text-zinc-400 block">USD</span>
                        </div>
                      </div>
                      {tier.description && (
                        <p className="text-[11px] text-zinc-400 mt-1.5 pl-6 leading-relaxed">
                          {tier.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Quantity Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-300 block">
                  Quantity:
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-xl p-1">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-12 text-center font-bold font-mono text-white text-sm">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-1">
                    {[1, 5, 10, 25].map(q => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => setQuantity(q)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
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
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 block">
                  Target Link or Requirements (Optional):
                </label>
                <textarea
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Paste target profile/listing URL, or custom keywords/instructions..."
                  rows={2}
                  className="w-full bg-zinc-950 text-zinc-200 text-xs p-3 rounded-xl border border-zinc-800 focus:outline-none focus:border-emerald-500 placeholder-zinc-600"
                />
              </div>

              {/* Total Calculation */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase text-zinc-400 font-semibold">Total Price:</div>
                  <div className="text-2xl font-bold text-white font-mono">
                    ${totalPrice} <span className="text-xs font-normal text-zinc-400 font-sans">USD</span>
                  </div>
                </div>
                <div className="text-right text-xs text-zinc-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{service.deliveryTime.split('(')[0]}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-1">
                <button
                  id="page-crypto-checkout-btn"
                  onClick={() => {
                    onDirectCryptoCheckout(service, selectedTier, quantity, customNotes);
                  }}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Coins className="w-4 h-4 text-emerald-200" />
                  <span>Instant Crypto Checkout (12 Coins)</span>
                </button>

                <button
                  id="page-add-to-cart-btn"
                  onClick={() => {
                    onAddToCart(service, selectedTier, quantity, customNotes);
                  }}
                  className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-xs rounded-xl border border-zinc-700 flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Add To Cart</span>
                </button>

                {/* Direct Telegram & WhatsApp Desk */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={getTelegramOrderUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 bg-sky-500/10 hover:bg-sky-500/15 border border-sky-500/20 text-sky-300 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all text-center"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Telegram Desk</span>
                  </a>

                  <a
                    href={getWhatsappOrderUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 text-emerald-300 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all text-center"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>WhatsApp Desk</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Reassurance Footer */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-xs text-zinc-400 space-y-1">
              <div className="font-semibold text-zinc-200 flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
                <span>Buyer Protection Guarantee</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-normal">
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
