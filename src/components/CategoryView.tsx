import React, { useState, useMemo } from 'react';
import { 
  ServiceCategory, 
  ServiceItem, 
  ServiceTier 
} from '../types';
import { ALL_SERVICES, CATEGORIES_META, TESTIMONIALS, GENERAL_FAQS, CONTACT_INFO } from '../data/servicesData';
import { ServiceCard } from './ServiceCard';
import { 
  Star, 
  ShieldCheck, 
  Sparkles, 
  Send, 
  PhoneCall, 
  ChevronDown, 
  ChevronUp, 
  Filter, 
  Coins, 
  CheckCircle2 
} from 'lucide-react';

interface CategoryViewProps {
  category: ServiceCategory;
  searchQuery: string;
  onAddToCart: (service: ServiceItem, tier: ServiceTier, quantity: number) => void;
  onViewDetails: (service: ServiceItem) => void;
  onOpenTestModal: (service?: ServiceItem) => void;
  onOpenWarrantyModal: () => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  category,
  searchQuery,
  onAddToCart,
  onViewDetails,
  onOpenTestModal,
  onOpenWarrantyModal
}) => {
  const [activeSubFilter, setActiveSubFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'popular'>('default');
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(0);

  // Sub-filter tabs depending on active category
  const subFilters = useMemo(() => {
    if (category === 'reviews') {
      return [
        { id: 'all', label: 'All Reviews (26)' },
        { id: 'google', label: 'Google & Local Guides' },
        { id: 'trustpilot', label: 'Trustpilot & Verified' },
        { id: 'yelp', label: 'Yelp & Elite' },
        { id: 'removal', label: 'Negative Removal' },
        { id: 'niche', label: 'Zillow, Houzz, Glassdoor & More' }
      ];
    } else if (category === 'bank_accounts') {
      return [
        { id: 'all', label: 'All Bank Accounts (8)' },
        { id: 'paypal', label: 'PayPal & Restored' },
        { id: 'cashapp', label: 'Cash App (BTC/Normal)' },
        { id: 'banks', label: 'Chase & Relay Bank' },
        { id: 'crypto-cards', label: 'Kraken & RedotPay' }
      ];
    } else if (category === 'accounts') {
      return [
        { id: 'all', label: 'All Accounts (19)' },
        { id: 'gmail', label: 'Gmail (USA, PVA, Aged)' },
        { id: 'microsoft', label: 'Outlook & Hotmail' },
        { id: 'numbers', label: 'Google Voice, TextNow, Talkatone' },
        { id: 'dev', label: 'GitHub & Edu Mail' },
        { id: 'social', label: 'LinkedIn, FB, IG, X, WhatsApp, TG' }
      ];
    }
    return [
      { id: 'all', label: `All Catalog (${ALL_SERVICES.length})` },
      { id: 'reviews', label: 'Reviews Services' },
      { id: 'bank_accounts', label: 'Bank Accounts' },
      { id: 'accounts', label: 'Accounts Services' }
    ];
  }, [category]);

  const currentCategoryMeta = CATEGORIES_META.find(c => c.id === category) || CATEGORIES_META[0];

  const filteredServices = useMemo(() => {
    let result = ALL_SERVICES;

    // Filter by main category
    if (category !== 'all') {
      result = result.filter(s => s.category === category);
    }

    // Filter by sub-category
    if (activeSubFilter !== 'all') {
      if (category === 'reviews') {
        if (activeSubFilter === 'google') result = result.filter(s => s.id.includes('google') && !s.id.includes('removal'));
        else if (activeSubFilter === 'trustpilot') result = result.filter(s => s.id.includes('trustpilot'));
        else if (activeSubFilter === 'yelp') result = result.filter(s => s.id.includes('yelp'));
        else if (activeSubFilter === 'removal') result = result.filter(s => s.id.includes('removal'));
        else if (activeSubFilter === 'niche') result = result.filter(s => !s.id.includes('google') && !s.id.includes('trustpilot') && !s.id.includes('yelp'));
      } else if (category === 'bank_accounts') {
        if (activeSubFilter === 'paypal') result = result.filter(s => s.id.includes('paypal'));
        else if (activeSubFilter === 'cashapp') result = result.filter(s => s.id.includes('cash-app'));
        else if (activeSubFilter === 'banks') result = result.filter(s => s.id.includes('chase') || s.id.includes('relay'));
        else if (activeSubFilter === 'crypto-cards') result = result.filter(s => s.id.includes('kraken') || s.id.includes('redotpay'));
      } else if (category === 'accounts') {
        if (activeSubFilter === 'gmail') result = result.filter(s => s.id.includes('gmail'));
        else if (activeSubFilter === 'microsoft') result = result.filter(s => s.id.includes('outlook') || s.id.includes('hotmail'));
        else if (activeSubFilter === 'numbers') result = result.filter(s => s.id.includes('voice') || s.id.includes('textnow') || s.id.includes('talkatone') || s.id.includes('textplus'));
        else if (activeSubFilter === 'dev') result = result.filter(s => s.id.includes('github') || s.id.includes('edu'));
        else if (activeSubFilter === 'social') result = result.filter(s => s.id.includes('facebook') || s.id.includes('instagram') || s.id.includes('twitter') || s.id.includes('linkedin') || s.id.includes('whatsapp') || s.id.includes('telegram') || s.id.includes('yelp') || s.id.includes('trustpilot'));
      } else {
        result = result.filter(s => s.category === activeSubFilter);
      }
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(s =>
        s.title.toLowerCase().includes(q) ||
        s.shortDesc.toLowerCase().includes(q) ||
        s.platform.toLowerCase().includes(q) ||
        s.seoKeywords.some(k => k.toLowerCase().includes(q))
      );
    }

    // Sorting
    const sorted = [...result];
    if (sortBy === 'price-asc') {
      sorted.sort((a, b) => a.startingPrice - b.startingPrice);
    } else if (sortBy === 'price-desc') {
      sorted.sort((a, b) => b.startingPrice - a.startingPrice);
    } else if (sortBy === 'popular') {
      sorted.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    }

    return sorted;
  }, [category, activeSubFilter, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 text-left">
      
      {/* Category Header Banner */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <span>blackaccworld.com</span>
            <span className="text-zinc-600">•</span>
            <span>Category Hub</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {currentCategoryMeta.name}
          </h2>

          <p className="text-sm text-zinc-300 leading-relaxed">
            {currentCategoryMeta.desc}
          </p>

          {/* Guarantee Highlights */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenWarrantyModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold hover:bg-amber-500/20 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>1-Time Replacement Warranty Included</span>
            </button>

            <button
              onClick={() => onOpenTestModal()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold hover:bg-sky-500/20 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Test Before Buying Notice</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Sorting Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        {/* Sub Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {subFilters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubFilter(tab.id)}
              className={`px-3 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
                activeSubFilter === tab.id
                  ? 'bg-zinc-100 text-zinc-950 shadow-md'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-zinc-500 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Sort:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs p-2 rounded-xl focus:outline-none focus:border-emerald-500"
          >
            <option value="default">Featured / Default</option>
            <option value="popular">Most Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Services Grid */}
      {filteredServices.length === 0 ? (
        <div className="text-center py-16 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 space-y-3">
          <div className="text-zinc-400 font-semibold text-base">No services found</div>
          <p className="text-xs text-zinc-500 max-w-sm mx-auto">
            No matching services found for &ldquo;{searchQuery}&rdquo;. Try clearing your search or contact support directly on Telegram or WhatsApp for custom orders.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <a href={CONTACT_INFO.telegramUrl} target="_blank" rel="noreferrer" className="px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-bold">
              Ask on Telegram
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
              onOpenTestModal={onOpenTestModal}
            />
          ))}
        </div>
      )}

      {/* Customer Reviews & Trust Showcase */}
      <div className="pt-10 border-t border-zinc-800/80 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Verified Client Feedback
            </span>
            <h3 className="text-xl font-bold text-white mt-0.5">
              Recent Buyer Reviews on blackaccworld.com
            </h3>
          </div>
          <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-xl text-emerald-400 text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>4.9 / 5.0 (1,480+ Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-5 space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">{t.date}</span>
              </div>

              <p className="text-xs text-zinc-300 italic leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="pt-2 border-t border-zinc-800/60">
                <div className="text-xs font-bold text-white">{t.name}</div>
                <div className="text-[10px] text-zinc-500">{t.role}</div>
                <div className="text-[10px] text-emerald-400 font-medium mt-0.5">
                  Ordered: {t.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="pt-8 border-t border-zinc-800/80 space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Buyer Helpdesk
          </span>
          <h3 className="text-xl font-bold text-white mt-0.5">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-2.5">
          {GENERAL_FAQS.map((faq, idx) => {
            const isExpanded = expandedFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedFaqIndex(isExpanded ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between text-xs font-bold text-zinc-200 hover:text-white"
                >
                  <span>{faq.q}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-emerald-400" /> : <ChevronDown className="w-4 h-4 text-zinc-500" />}
                </button>
                {isExpanded && (
                  <div className="px-4 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-2 bg-zinc-950/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
