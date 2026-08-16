import React, { useState } from 'react';
import { 
  Send, 
  PhoneCall, 
  MessageSquare, 
  X, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';

interface FloatingSupportProps {
  onOpenTestModal: () => void;
}

export const FloatingSupport: React.FC<FloatingSupportProps> = ({ onOpenTestModal }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Expanded Quick Panel */}
      {isOpen && (
        <div className="bg-zinc-950/95 border border-zinc-800 rounded-2xl p-4 shadow-2xl backdrop-blur-md w-72 space-y-3 animate-fade-in text-left border-emerald-500/30">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                24/7 Live Desk
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-zinc-400 leading-snug">
            Need custom pricing, bulk discount, or want to test a service first?
          </p>

          <div className="space-y-1.5">
            <a
              href={CONTACT_INFO.telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/40 text-sky-300 text-xs font-medium transition-all"
            >
              <span className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5" />
                Telegram (@{CONTACT_INFO.telegramUser})
              </span>
              <span className="text-[10px] bg-sky-400/20 px-1.5 py-0.5 rounded font-bold">Fast</span>
            </a>

            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-xs font-medium transition-all"
            >
              <span className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5" />
                WhatsApp ({CONTACT_INFO.whatsappNumber})
              </span>
              <span className="text-[10px] bg-emerald-400/20 px-1.5 py-0.5 rounded font-bold">24/7</span>
            </a>

            <button
              onClick={onOpenTestModal}
              className="w-full flex items-center justify-center gap-1.5 p-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded-xl text-xs font-medium transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Request Test Service</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Trigger Toggle Pill */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-950 font-bold text-xs transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/40"
        >
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <MessageSquare className="w-4 h-4" />
          <span>Live Support (Telegram &amp; WhatsApp)</span>
        </button>
      )}
    </div>
  );
};
