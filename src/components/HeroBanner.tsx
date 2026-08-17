import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Send, 
  PhoneCall, 
  Coins, 
  CheckCircle2, 
  Lock, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Star
} from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';
import { ServiceCategory } from '../types';

interface HeroBannerProps {
  onSelectCategory: (cat: ServiceCategory) => void;
  onOpenTestModal: () => void;
  onOpenCryptoWallets: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onSelectCategory,
  onOpenTestModal,
  onOpenCryptoWallets
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border-b border-zinc-800 py-12 sm:py-16">
      {/* Ambient Cyber Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>OFFICIAL DOMAIN: BLACKACCWORLD.COM</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Verified Digital Accounts &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Guaranteed Reviews
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-200 max-w-2xl leading-relaxed font-normal">
              Scale your reputation, ads, and digital operations with aged, non-drop online reviews (Google, Yelp, Trustpilot), verified bank accounts (PayPal, Cash App, Chase, Kraken), and high-volume PVA accounts.
            </p>

            {/* Core Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-100 bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>1-Time Replacement Warranty</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-100 bg-zinc-900/90 p-3 rounded-xl border border-zinc-800">
                <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Instant &amp; Drip-Fed Delivery</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-100 bg-zinc-900/90 p-3 rounded-xl border border-zinc-800 col-span-2 sm:col-span-1">
                <Coins className="w-5 h-5 text-sky-400 shrink-0" />
                <span>12 Crypto Payments Accepted</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                id="hero-explore-services-btn"
                onClick={() => onSelectCategory('reviews')}
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-500/25 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95"
              >
                <span>Browse All Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-test-service-btn"
                onClick={onOpenTestModal}
                className="px-5 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-amber-500/40 font-bold text-sm sm:text-base rounded-xl flex items-center gap-2 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Test Any Service</span>
              </button>

              <button
                id="hero-crypto-btn"
                onClick={onOpenCryptoWallets}
                className="px-5 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-semibold text-sm sm:text-base rounded-xl flex items-center gap-2 transition-colors"
              >
                <Coins className="w-4 h-4 text-emerald-400" />
                <span>View Crypto Wallets</span>
              </button>
            </div>
          </div>

          {/* Right Side Quick Contact & Stats Card */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
              
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">
                    24/7 Fast Helpdesk
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-zinc-400 font-mono font-semibold">blackaccworld.com</span>
              </div>

              {/* Direct Support Hub */}
              <div className="my-4 space-y-3">
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  Contact our senior desk directly for custom requests, high-volume discounts, or immediate test orders:
                </p>

                <a
                  href={CONTACT_INFO.telegramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <Send className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Telegram Support</div>
                      <div className="text-xs sm:text-sm text-sky-300 font-mono">@{CONTACT_INFO.telegramUser}</div>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold px-2.5 py-1 bg-sky-500/20 rounded-lg text-sky-200">
                    Chat Now
                  </span>
                </a>

                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <PhoneCall className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">WhatsApp VIP Support</div>
                      <div className="text-xs sm:text-sm text-emerald-300 font-mono">{CONTACT_INFO.whatsappNumber}</div>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold px-2.5 py-1 bg-emerald-500/20 rounded-lg text-emerald-200">
                    Message
                  </span>
                </a>
              </div>

              {/* Trust Metric Counters */}
              <div className="grid grid-cols-3 gap-2.5 pt-3.5 border-t border-zinc-800 text-center">
                <div className="bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800">
                  <div className="text-lg font-black text-emerald-400 font-mono">10,000+</div>
                  <div className="text-xs text-zinc-300 font-medium mt-0.5">Orders Delivered</div>
                </div>
                <div className="bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800">
                  <div className="text-lg font-black text-white font-mono">99.8%</div>
                  <div className="text-xs text-zinc-300 font-medium mt-0.5">Retention Rate</div>
                </div>
                <div className="bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800">
                  <div className="text-lg font-black text-amber-400 font-mono">12 Coins</div>
                  <div className="text-xs text-zinc-300 font-medium mt-0.5">Instant Crypto</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
