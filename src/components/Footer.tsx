import React from 'react';
import { 
  ShieldCheck, 
  Send, 
  PhoneCall, 
  Coins, 
  Lock, 
  ExternalLink, 
  Sparkles, 
  ArrowUp,
  BookOpen
} from 'lucide-react';
import { CONTACT_INFO, ALL_SERVICES } from '../data/servicesData';
import { ServiceCategory } from '../types';

interface FooterProps {
  onSelectCategory: (cat: ServiceCategory) => void;
  onOpenWarrantyModal: () => void;
  onOpenCryptoWallets: () => void;
  onOpenTestModal: () => void;
  onOpenBlog?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenWarrantyModal,
  onOpenCryptoWallets,
  onOpenTestModal,
  onOpenBlog
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 pt-16 pb-12 text-zinc-300 text-sm text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Brand & Direct Contact */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-emerald-500/40 p-2.5 flex items-center justify-center shadow-lg shadow-emerald-950/40">
                <span className="font-black text-xl text-emerald-400 font-mono">B</span>
                <span className="font-black text-xl text-zinc-200 font-mono">W</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xl font-black text-white font-mono">BLACKACC</span>
                  <span className="text-xl font-black text-emerald-400 font-mono">WORLD</span>
                </div>
                <div className="text-xs text-zinc-400 font-mono font-semibold">blackaccworld.com</div>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed max-w-sm text-sm sm:text-base font-normal">
              The premier marketplace for high-retention 5-star online reviews, verified bank accounts, and bulk PVA email accounts. Fast crypto settlement with 24/7 technical operators.
            </p>

            {/* Direct Channels */}
            <div className="space-y-2.5 pt-2">
              <a
                href={CONTACT_INFO.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 font-bold transition-colors w-fit text-sm"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Telegram: @{CONTACT_INFO.telegramUser}</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold transition-colors w-fit text-sm"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {CONTACT_INFO.whatsappNumber}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Reviews Services */}
          <div className="space-y-3.5">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
              1. Reviews Services
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>
                <button onClick={() => onSelectCategory('reviews')} className="hover:text-emerald-400 transition-colors text-left">
                  Buy Google Reviews ($7 - $15)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('reviews')} className="hover:text-emerald-400 transition-colors text-left">
                  Google Local Guide Reviews ($20)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('reviews')} className="hover:text-emerald-400 transition-colors text-left">
                  Buy Trustpilot Reviews ($10)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('reviews')} className="hover:text-emerald-400 transition-colors text-left">
                  Trustpilot Verified Reviews ($12)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('reviews')} className="hover:text-emerald-400 transition-colors text-left">
                  Buy Yelp Reviews ($75)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('reviews')} className="hover:text-emerald-400 transition-colors text-left">
                  Google Bad Reviews Removal ($50)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Bank Accounts */}
          <div className="space-y-3.5">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
              2. Bank Accounts
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>
                <button onClick={() => onSelectCategory('bank_accounts')} className="hover:text-emerald-400 transition-colors text-left">
                  Verified PayPal Accounts ($80 - $130)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('bank_accounts')} className="hover:text-emerald-400 transition-colors text-left">
                  Restore PayPal Accounts ($120 - $180)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('bank_accounts')} className="hover:text-emerald-400 transition-colors text-left">
                  Verified Cash App Accounts ($130 - $250)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('bank_accounts')} className="hover:text-emerald-400 transition-colors text-left">
                  Verified Chase Bank Accounts ($400)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('bank_accounts')} className="hover:text-emerald-400 transition-colors text-left">
                  Verified Relay Bank Accounts ($420)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('bank_accounts')} className="hover:text-emerald-400 transition-colors text-left">
                  Verified Kraken Exchange ($180)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Accounts & Quick Links */}
          <div className="space-y-3.5">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
              3. Accounts &amp; Resources
            </h4>
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li>
                <button onClick={() => onSelectCategory('accounts')} className="hover:text-emerald-400 transition-colors text-left">
                  USA &amp; PVA Gmail Accounts
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('accounts')} className="hover:text-emerald-400 transition-colors text-left">
                  Aged GitHub Accounts (5-7+ Yrs)
                </button>
              </li>
              <li>
                {onOpenBlog && (
                  <button onClick={onOpenBlog} className="hover:text-emerald-400 transition-colors text-emerald-400 font-bold flex items-center gap-1.5 text-left">
                    <BookOpen className="w-4 h-4" />
                    <span>Blog &amp; Guides (5 Articles)</span>
                  </button>
                )}
              </li>
              <li>
                <button onClick={onOpenWarrantyModal} className="hover:text-emerald-400 transition-colors text-amber-300 font-semibold flex items-center gap-1.5 text-left">
                  <ShieldCheck className="w-4 h-4" />
                  <span>1-Time Replacement Policy</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenTestModal} className="hover:text-emerald-400 transition-colors text-amber-300 font-semibold flex items-center gap-1.5 text-left">
                  <Sparkles className="w-4 h-4" />
                  <span>Test Any Service Notice</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenCryptoWallets} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-left font-medium">
                  <Coins className="w-4 h-4 text-emerald-400" />
                  <span>12 Crypto Payment Addresses</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-400">
          <div className="flex items-center gap-2 flex-wrap">
            <span>&copy; 2026 blackaccworld.com. All rights reserved.</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">1-Time Free Replacement Guarantee</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-300 hover:text-white px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 transition-colors font-semibold text-xs sm:text-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
