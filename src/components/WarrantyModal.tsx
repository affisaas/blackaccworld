import React from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  RotateCcw, 
  Send, 
  PhoneCall, 
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';

interface WarrantyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WarrantyModal: React.FC<WarrantyModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in text-left">
      <div 
        className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
        id="warranty-policy-modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">One-Time Replacement Warranty Policy</h2>
              <p className="text-xs text-zinc-400">
                Official Buyer Protection Guarantee for blackaccworld.com
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-800/80 rounded-xl border border-zinc-700 hover:bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 overflow-y-auto max-h-[80vh]">
          
          {/* Main Statement */}
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 space-y-2 text-emerald-200 text-xs leading-relaxed">
            <div className="text-sm font-black text-emerald-400 flex items-center gap-2">
              <RotateCcw className="w-4 h-4" />
              <span>Official Warranty Guarantee Clause</span>
            </div>
            <p className="font-medium text-white text-sm">
              &ldquo;{CONTACT_INFO.replacementPolicyNotice}&rdquo;
            </p>
          </div>

          {/* Breakdown of Warranty Tiers */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              1. Review Service Warranty Tiers
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wide text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Recommended
                </span>
                <div className="text-sm font-bold text-white">30 Days Warranty</div>
                <p className="text-[11px] text-zinc-400">
                  Full 30-day monitoring. If any review drops from public view, we provide 1-time free replacement.
                </p>
              </div>

              <div className="p-3.5 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wide text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/30">
                  Standard
                </span>
                <div className="text-sm font-bold text-white">15 Days Warranty</div>
                <p className="text-[11px] text-zinc-400">
                  15-day non-drop coverage with 1-time free replacement policy.
                </p>
              </div>

              <div className="p-3.5 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wide text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full">
                  Economy
                </span>
                <div className="text-sm font-bold text-white">7 Days Warranty</div>
                <p className="text-[11px] text-zinc-400">
                  Initial 7-day stick verification with 1-time replacement.
                </p>
              </div>
            </div>
          </div>

          {/* Bank Accounts & Accounts Guarantees */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              2. Digital Bank &amp; PVA Accounts Guarantee
            </h3>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li className="flex items-start gap-2 bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>First-Login Warranty:</strong> Every PayPal, Cash App, Chase, Kraken, and Gmail account is guaranteed to log in smoothly with the provided credentials, cookies, and 2FA keys.
                </span>
              </li>
              <li className="flex items-start gap-2 bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>48-Hour Replacement Window:</strong> In the rare event of a credential mismatch or pre-existing lock upon delivery, contact us for an instant replacement.
                </span>
              </li>
            </ul>
          </div>

          {/* How to Claim */}
          <div className="space-y-3 pt-2 border-t border-zinc-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              How to Claim a Replacement:
            </h3>
            <p className="text-xs text-zinc-300">
              Simply send your <strong>Order ID</strong> (or TXID) along with your profile link / screenshot to our 24/7 operators:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href={CONTACT_INFO.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Claim on Telegram (@{CONTACT_INFO.telegramUser})</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Claim on WhatsApp ({CONTACT_INFO.whatsappNumber})</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
