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
    <footer className="bg-zinc-950 border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400 text-xs text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Brand & Direct Contact */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-emerald-500/40 p-2 flex items-center justify-center shadow-lg shadow-emerald-950/40">
                <span className="font-black text-lg text-emerald-400 font-mono">B</span>
                <span className="font-black text-lg text-zinc-200 font-mono">W</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-lg font-black text-white font-mono">BLACKACC</span>
                  <span className="text-lg font-black text-emerald-400 font-mono">WORLD</span>
                </div>
                <div className="text-[11px] text-zinc-500 font-mono">blackaccworld.com</div>
              </div>
            </div>

            <p className="text-zinc-400 leading-relaxed max-w-sm">
              The premier marketplace for high-retention 5-star online reviews, verified bank accounts, and bulk PVA email accounts. Fast crypto settlement with 24/7 technical operators.
            </p>

            {/* Direct Channels */}
            <div className="space-y-2 pt-2">
              <a
                href={CONTACT_INFO.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 font-medium transition-colors w-fit"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Telegram: @{CONTACT_INFO.telegramUser}</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-medium transition-colors w-fit"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {CONTACT_INFO.whatsappNumber}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Reviews Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              1. Reviews Services
            </h4>
            <ul className="space-y-1.5 text-zinc-400">
              <li>
                <button onClick={() => onSelectCategory('reviews')} className="hover:text-emerald-400 transition-colors">
                  Buy Google Reviews ($7 - $15)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('reviews')} className="hover:text-emerald-400 transition-colors">
                  Google Local Guide Reviews ($20)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('reviews')} className="hover:text-emerald-400 transition-colors">
                  Buy Trustpilot Reviews ($10)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('reviews')} className="hover:text-emerald-400 transition-colors">
                  Trustpilot Verified Reviews ($12)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('reviews')} className="hover:text-emerald-400 transition-colors">
                  Buy Yelp Reviews ($75)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('reviews')} className="hover:text-emerald-400 transition-colors">
                  Google Bad Reviews Removal ($50)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Bank Accounts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              2. Bank Accounts
            </h4>
            <ul className="space-y-1.5 text-zinc-400">
              <li>
                <button onClick={() => onSelectCategory('bank_accounts')} className="hover:text-emerald-400 transition-colors">
                  Verified PayPal Accounts ($80 - $130)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('bank_accounts')} className="hover:text-emerald-400 transition-colors">
                  Restore PayPal Accounts ($120 - $180)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('bank_accounts')} className="hover:text-emerald-400 transition-colors">
                  Verified Cash App Accounts ($130 - $250)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('bank_accounts')} className="hover:text-emerald-400 transition-colors">
                  Verified Chase Bank Accounts ($400)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('bank_accounts')} className="hover:text-emerald-400 transition-colors">
                  Verified Relay Bank Accounts ($420)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('bank_accounts')} className="hover:text-emerald-400 transition-colors">
                  Verified Kraken Exchange ($180)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Accounts & Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              3. Accounts &amp; Resources
            </h4>
            <ul className="space-y-1.5 text-zinc-400">
              <li>
                <button onClick={() => onSelectCategory('accounts')} className="hover:text-emerald-400 transition-colors">
                  USA &amp; PVA Gmail Accounts
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('accounts')} className="hover:text-emerald-400 transition-colors">
                  Aged GitHub Accounts (5-7+ Yrs)
                </button>
              </li>
              <li>
                {onOpenBlog && (
                  <button onClick={onOpenBlog} className="hover:text-emerald-400 transition-colors text-emerald-400 font-semibold flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Blog &amp; Knowledge Base (5 Guides)</span>
                  </button>
                )}
              </li>
              <li>
                <button onClick={onOpenWarrantyModal} className="hover:text-emerald-400 transition-colors text-amber-300 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>1-Time Replacement Policy</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenTestModal} className="hover:text-emerald-400 transition-colors text-amber-300 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Test Any Service Notice</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenCryptoWallets} className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <Coins className="w-3.5 h-3.5" />
                  <span>12 Crypto Payment Addresses</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* SEO Keywords Cloud */}
        <div className="pt-6 border-t border-zinc-800/80 space-y-2">
          <h5 className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
            SEO Index &amp; Service Keywords:
          </h5>
          <p className="text-[11px] text-zinc-500 leading-relaxed">
            Buy Google Reviews • Buy Google Local Guide Reviews • Buy TrustPilot Reviews • Buy Google GPS Reviews • Buy Glassdoor Reviews • Buy Facebook Reviews • Buy Zillow Reviews • Buy Thumbtack Reviews • Buy Google LSA Reviews • Buy Trustpilot Verified Reviews • Buy Houzz Reviews • Buy BBB Reviews • Buy Google Play Store Reviews • Buy HomeAdvisor Reviews • Buy Booking Reviews • Buy Website Product Reviews • Buy Home Star Reviews • Buy Chrome Extension Reviews • Buy WeddingWire Reviews • Buy Reviews.io Reviews • Buy Hotels Reviews • Buy QuickBooks Review • Buy Yelp Reviews • Buy Elite Yelp Reviews • Buy IMDb Reviews • Buy RealEstateAgents Reviews • Google Negative Reviews Removal • Buy Verified PayPal Account • Buy Restore PayPal Accounts • Buy Verified Cash App Accounts • Buy Verified Chase Bank Accounts • Buy Verified Relay Bank Accounts • Buy Verified Kraken Accounts • Buy Verified RedotPay Accounts • Buy USA Gmail Accounts • Buy PVA Gmail Accounts • Buy Aged Mix Country Gmail Accounts • Buy Outlook Accounts • Buy Hotmail Accounts • Buy Google Voice Accounts • Buy Textnow Accounts • Buy Edu Mail Accounts • Buy Talkatone Accounts • Buy Textplus Accounts • Buy GitHub Accounts • Buy Facebook Accounts • Buy Instagram Accounts • Buy Twitter Accounts • Buy LinkedIn Accounts • Buy WhatsApp Account Numbers • Buy Telegram Accounts
          </p>
        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500">
          <div className="flex items-center gap-2">
            <span>&copy; 2026 blackaccworld.com. All rights reserved.</span>
            <span>•</span>
            <span className="text-emerald-500 font-semibold">1-Time Free Replacement Guarantee</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
