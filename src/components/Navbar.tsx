import React, { useState, useRef, useEffect } from 'react';
import { 
  ShoppingCart, 
  Send, 
  PhoneCall, 
  Menu, 
  X, 
  ChevronDown,
  Star,
  Building2,
  Users,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { CONTACT_INFO, ALL_SERVICES } from '../data/servicesData';
import { ServiceCategory, ServiceItem } from '../types';
import { BrandIcon } from './BrandIcons';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  selectedCategory: ServiceCategory;
  onSelectCategory: (cat: ServiceCategory) => void;
  onSelectService: (service: ServiceItem) => void;
  isBlogActive?: boolean;
  onOpenBlog?: () => void;
  onOpenWarrantyModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  selectedCategory,
  onSelectCategory,
  onSelectService,
  isBlogActive = false,
  onOpenBlog
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<ServiceCategory | null>('reviews');
  
  // Track which dropdown is currently active on desktop
  const [activeDropdown, setActiveDropdown] = useState<ServiceCategory | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (cat: ServiceCategory) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(cat);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const reviewsServices = ALL_SERVICES.filter(s => s.category === 'reviews');
  const bankServices = ALL_SERVICES.filter(s => s.category === 'bank_accounts');
  const accountsServices = ALL_SERVICES.filter(s => s.category === 'accounts');

  return (
    <header className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800 shadow-2xl shadow-black/80">
      
      {/* 1. Top Trust Announcement */}
      <div className="bg-zinc-900/90 border-b border-zinc-800/80 px-4 py-2 text-xs sm:text-sm text-zinc-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              100% NON-DROP GUARANTEED
            </span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="hidden sm:inline text-xs sm:text-sm text-zinc-300 font-medium">
              1-Time Free Replacement Warranty on All Orders
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold">
            <a 
              href={CONTACT_INFO.telegramUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram: @{CONTACT_INFO.telegramUser}</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">|</span>
            <a 
              href={CONTACT_INFO.whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>WhatsApp: {CONTACT_INFO.whatsappNumber}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Clean Single-Line Menu Bar with Category Sub-menus & Blog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3" ref={navContainerRef}>
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div 
            onClick={() => {
              onSelectCategory('all');
              setActiveDropdown(null);
            }} 
            className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
            id="brand-logo-btn"
          >
            <div className="relative w-10 h-10 rounded-xl bg-zinc-900 border border-emerald-500/40 p-2 flex items-center justify-center shadow-lg group-hover:border-emerald-400 transition-all">
              <span className="font-black text-lg text-emerald-400 font-mono tracking-tighter">B</span>
              <span className="font-black text-lg text-zinc-100 font-mono tracking-tighter">W</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-zinc-950 animate-ping" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-lg sm:text-xl font-black text-white tracking-wider font-mono">BLACKACC</span>
                <span className="text-lg sm:text-xl font-black text-emerald-400 tracking-wider font-mono">WORLD</span>
              </div>
              <p className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase hidden sm:block font-medium">
                Verified Accounts &amp; Reviews
              </p>
            </div>
          </div>

          {/* Desktop Main Menu with Category Dropdown Sub-Menus & Blog Link */}
          <nav className="hidden lg:flex items-center gap-2">
            
            {/* 1. Reviews Services Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('reviews')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => {
                  onSelectCategory('reviews');
                  setActiveDropdown(activeDropdown === 'reviews' ? null : 'reviews');
                }}
                className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 ${
                  (activeDropdown === 'reviews' || (selectedCategory === 'reviews' && !activeDropdown && !isBlogActive))
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : 'text-zinc-200 hover:text-white hover:bg-zinc-900 border border-transparent'
                }`}
              >
                <Star className="w-4 h-4 text-amber-400" />
                <span>Reviews ({reviewsServices.length})</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'reviews' ? 'rotate-180 text-emerald-400' : 'text-zinc-400'}`} />
              </button>

              {/* Reviews Sub-Menu Grid (26 Services) */}
              {activeDropdown === 'reviews' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-[640px] bg-zinc-950/98 border border-zinc-800 rounded-2xl shadow-2xl backdrop-blur-2xl p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter('reviews')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3">
                    <div>
                      <span className="text-sm font-bold text-white flex items-center gap-2">
                        <Star className="w-4 h-4 text-amber-400" />
                        All 26+ Verified Reviews Services
                      </span>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        100% Non-Drop Guaranteed &bull; Aged Residential IP Profiles &bull; 1-Time Replacement Warranty
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        onSelectCategory('reviews');
                        setActiveDropdown(null);
                      }}
                      className="text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 shrink-0"
                    >
                      <span>View All</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* 2-Column Grid of 26 Reviews */}
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 max-h-[380px] overflow-y-auto pr-1">
                    {reviewsServices.map(svc => (
                      <button
                        key={svc.id}
                        onClick={() => {
                          onSelectService(svc);
                          setActiveDropdown(null);
                        }}
                        className="text-left p-2.5 rounded-xl hover:bg-zinc-900 flex items-center justify-between group transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center p-1 shrink-0 group-hover:border-emerald-500/50">
                            <BrandIcon name={svc.iconKey} className="w-4 h-4" />
                          </div>
                          <span className="text-zinc-200 group-hover:text-white text-xs sm:text-sm font-medium truncate">
                            {svc.title}
                          </span>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400">
                            ${svc.startingPrice}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Bank Accounts Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('bank_accounts')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => {
                  onSelectCategory('bank_accounts');
                  setActiveDropdown(activeDropdown === 'bank_accounts' ? null : 'bank_accounts');
                }}
                className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 ${
                  (activeDropdown === 'bank_accounts' || (selectedCategory === 'bank_accounts' && !activeDropdown && !isBlogActive))
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : 'text-zinc-200 hover:text-white hover:bg-zinc-900 border border-transparent'
                }`}
              >
                <Building2 className="w-4 h-4 text-sky-400" />
                <span>Bank Accounts ({bankServices.length})</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'bank_accounts' ? 'rotate-180 text-emerald-400' : 'text-zinc-400'}`} />
              </button>

              {/* Bank Accounts Sub-Menu Grid (8 Services) */}
              {activeDropdown === 'bank_accounts' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-[500px] bg-zinc-950/98 border border-zinc-800 rounded-2xl shadow-2xl backdrop-blur-2xl p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter('bank_accounts')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3">
                    <div>
                      <span className="text-sm font-bold text-white flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-sky-400" />
                        Verified US &amp; Global Bank Accounts
                      </span>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Online Credentials &bull; Full KYC Docs &bull; Routing &amp; Account # &bull; 2FA Access
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        onSelectCategory('bank_accounts');
                        setActiveDropdown(null);
                      }}
                      className="text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 shrink-0"
                    >
                      <span>View All</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    {bankServices.map(svc => (
                      <button
                        key={svc.id}
                        onClick={() => {
                          onSelectService(svc);
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-zinc-900 flex items-center justify-between group transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0 pr-2">
                          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center p-1.5 shrink-0 group-hover:border-sky-500/50">
                            <BrandIcon name={svc.iconKey} className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-zinc-100 group-hover:text-white text-xs sm:text-sm font-bold block">
                              {svc.title}
                            </span>
                            <span className="text-xs text-zinc-400 block truncate">
                              {svc.shortDesc.split('.')[0]}
                            </span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400 block">
                            ${svc.startingPrice}
                          </span>
                          <span className="text-[10px] text-zinc-400">Instant</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Accounts Services Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('accounts')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => {
                  onSelectCategory('accounts');
                  setActiveDropdown(activeDropdown === 'accounts' ? null : 'accounts');
                }}
                className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 ${
                  (activeDropdown === 'accounts' || (selectedCategory === 'accounts' && !activeDropdown && !isBlogActive))
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : 'text-zinc-200 hover:text-white hover:bg-zinc-900 border border-transparent'
                }`}
              >
                <Users className="w-4 h-4 text-purple-400" />
                <span>Accounts ({accountsServices.length})</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'accounts' ? 'rotate-180 text-emerald-400' : 'text-zinc-400'}`} />
              </button>

              {/* Accounts Sub-Menu Grid (19 Services) */}
              {activeDropdown === 'accounts' && (
                <div 
                  className="absolute top-full right-0 lg:left-0 mt-2 w-[600px] bg-zinc-950/98 border border-zinc-800 rounded-2xl shadow-2xl backdrop-blur-2xl p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={() => handleMouseEnter('accounts')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3">
                    <div>
                      <span className="text-sm font-bold text-white flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-400" />
                        Aged &amp; Verified Digital Accounts (19)
                      </span>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Email Access &bull; 2FA Backup Keys &bull; Session Cookies JSON &bull; Replacement Protected
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        onSelectCategory('accounts');
                        setActiveDropdown(null);
                      }}
                      className="text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 shrink-0"
                    >
                      <span>View All</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* 2-Column Grid of 19 Accounts */}
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 max-h-[380px] overflow-y-auto pr-1">
                    {accountsServices.map(svc => (
                      <button
                        key={svc.id}
                        onClick={() => {
                          onSelectService(svc);
                          setActiveDropdown(null);
                        }}
                        className="text-left p-2.5 rounded-xl hover:bg-zinc-900 flex items-center justify-between group transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center p-1 shrink-0 group-hover:border-purple-500/50">
                            <BrandIcon name={svc.iconKey} className="w-4 h-4" />
                          </div>
                          <span className="text-zinc-200 group-hover:text-white text-xs sm:text-sm font-medium truncate">
                            {svc.title}
                          </span>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400">
                            ${svc.startingPrice}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. Professional Blog Section in Main Nav */}
            <button
              onClick={() => {
                setActiveDropdown(null);
                if (onOpenBlog) onOpenBlog();
              }}
              className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-1.5 ${
                isBlogActive
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'text-zinc-200 hover:text-white hover:bg-zinc-900 border border-transparent'
              }`}
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Blog &amp; Guides</span>
            </button>

            {/* 5. Direct Support Link */}
            <a
              href={CONTACT_INFO.telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-xl text-sm font-bold text-sky-400 hover:text-sky-300 hover:bg-sky-500/10 transition-colors flex items-center gap-1.5"
            >
              <Send className="w-4 h-4" />
              <span>Support Desk</span>
            </a>

          </nav>

          {/* Right Action: Cart & Mobile Menu */}
          <div className="flex items-center gap-2.5">
            <button
              id="cart-drawer-toggle-btn"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold rounded-xl shadow-lg shadow-emerald-950/50 transition-transform active:scale-95"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="flex items-center justify-center min-w-[20px] h-[20px] px-1 text-xs font-black bg-zinc-950 text-emerald-400 rounded-full border border-emerald-400">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-zinc-300 hover:text-white bg-zinc-900 rounded-xl border border-zinc-800"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Mobile Responsive Navigation Drawer with Accordion Sub-Menus */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-t border-zinc-800 max-h-[80vh] overflow-y-auto p-4 space-y-3">
          
          {/* Mobile Blog Quick Access */}
          <button
            onClick={() => {
              if (onOpenBlog) onOpenBlog();
              setIsMobileMenuOpen(false);
            }}
            className={`w-full p-3 rounded-xl flex items-center justify-between text-xs font-bold ${
              isBlogActive 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                : 'bg-zinc-900 text-zinc-200 border border-zinc-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Blog &amp; Knowledge Base (5 Guides)</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Category Accordion 1: Reviews */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
            <button
              onClick={() => setMobileExpandedCat(mobileExpandedCat === 'reviews' ? null : 'reviews')}
              className="w-full p-3 flex items-center justify-between text-xs font-bold text-white bg-zinc-900/80"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                <span>Reviews Services ({reviewsServices.length})</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${mobileExpandedCat === 'reviews' ? 'rotate-180' : ''}`} />
            </button>

            {mobileExpandedCat === 'reviews' && (
              <div className="p-2 space-y-1 border-t border-zinc-800 bg-zinc-950/60 max-h-60 overflow-y-auto">
                {reviewsServices.map(svc => (
                  <button
                    key={svc.id}
                    onClick={() => {
                      onSelectService(svc);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full p-2 rounded-lg text-left text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      <BrandIcon name={svc.iconKey} className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{svc.title}</span>
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-emerald-400">${svc.startingPrice}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Accordion 2: Bank Accounts */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
            <button
              onClick={() => setMobileExpandedCat(mobileExpandedCat === 'bank_accounts' ? null : 'bank_accounts')}
              className="w-full p-3 flex items-center justify-between text-xs font-bold text-white bg-zinc-900/80"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-sky-400" />
                <span>Bank Accounts ({bankServices.length})</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${mobileExpandedCat === 'bank_accounts' ? 'rotate-180' : ''}`} />
            </button>

            {mobileExpandedCat === 'bank_accounts' && (
              <div className="p-2 space-y-1 border-t border-zinc-800 bg-zinc-950/60 max-h-60 overflow-y-auto">
                {bankServices.map(svc => (
                  <button
                    key={svc.id}
                    onClick={() => {
                      onSelectService(svc);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full p-2 rounded-lg text-left text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      <BrandIcon name={svc.iconKey} className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{svc.title}</span>
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-emerald-400">${svc.startingPrice}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Category Accordion 3: Accounts Services */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
            <button
              onClick={() => setMobileExpandedCat(mobileExpandedCat === 'accounts' ? null : 'accounts')}
              className="w-full p-3 flex items-center justify-between text-xs font-bold text-white bg-zinc-900/80"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span>Accounts Services ({accountsServices.length})</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${mobileExpandedCat === 'accounts' ? 'rotate-180' : ''}`} />
            </button>

            {mobileExpandedCat === 'accounts' && (
              <div className="p-2 space-y-1 border-t border-zinc-800 bg-zinc-950/60 max-h-60 overflow-y-auto">
                {accountsServices.map(svc => (
                  <button
                    key={svc.id}
                    onClick={() => {
                      onSelectService(svc);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full p-2 rounded-lg text-left text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      <BrandIcon name={svc.iconKey} className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{svc.title}</span>
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-emerald-400">${svc.startingPrice}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Footer Links */}
          <div className="pt-2 border-t border-zinc-800 space-y-2">
            <a 
              href={CONTACT_INFO.telegramUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 bg-sky-500/10 rounded-xl text-xs text-sky-300 font-medium"
            >
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Telegram Support Desk
              </span>
              <span className="font-mono font-bold">@{CONTACT_INFO.telegramUser}</span>
            </a>
          </div>

        </div>
      )}

    </header>
  );
};
