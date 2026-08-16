import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  PhoneCall, 
  CheckCircle2, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { ALL_SERVICES, CONTACT_INFO } from '../data/servicesData';
import { ServiceItem } from '../types';

interface TestServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}

export const TestServiceModal: React.FC<TestServiceModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  if (!isOpen) return null;

  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialService?.id || ALL_SERVICES[0].id
  );
  const [customGoal, setCustomGoal] = useState('');

  const activeService = ALL_SERVICES.find(s => s.id === selectedServiceId) || ALL_SERVICES[0];

  const getTelegramTestUrl = () => {
    const text = encodeURIComponent(
      `Hello @EgSupport24, I would like to TEST a service from blackaccworld.com:\n\n` +
      `Target Service: ${activeService.title} (${activeService.platform})\n` +
      (customGoal ? `My Requirements: ${customGoal}\n` : '') +
      `\nPlease provide instructions for a test/trial run.`
    );
    return `https://t.me/${CONTACT_INFO.telegramUser}?text=${text}`;
  };

  const getWhatsappTestUrl = () => {
    const text = encodeURIComponent(
      `Hello, I would like to TEST a service from blackaccworld.com:\n\n` +
      `Target Service: ${activeService.title} (${activeService.platform})\n` +
      (customGoal ? `My Requirements: ${customGoal}\n` : '') +
      `\nPlease provide instructions for a test/trial run.`
    );
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in text-left">
      <div 
        className="relative w-full max-w-xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
        id="test-service-modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-500/20 text-amber-300 rounded-xl">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Test Any Service Before Buying</h2>
              <p className="text-xs text-zinc-400">
                Official BlackAccWorld Trial &amp; Sample Program
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
        <div className="p-6 space-y-5">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-xs text-amber-200 space-y-1.5">
            <div className="font-bold flex items-center gap-1.5 text-amber-300">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Official Trial Notice</span>
            </div>
            <p className="leading-relaxed">
              &ldquo;{CONTACT_INFO.testServiceNotice}&rdquo; Contact our live technical operators on Telegram or WhatsApp to request a free or reduced sample test for reviews, sample mailboxes, or account verifications.
            </p>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
              Select Service You Want to Test:
            </label>
            <select
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500"
            >
              {ALL_SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title} ({s.platform}) — from ${s.startingPrice}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1.5">
              Specific Requirements or Target Link (Optional):
            </label>
            <textarea
              value={customGoal}
              onChange={(e) => setCustomGoal(e.target.value)}
              placeholder="e.g. Test 1 Google review for my bakery in London, or test 1 USA Gmail login..."
              rows={3}
              className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs p-3 rounded-xl focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Action Channels */}
          <div className="space-y-2 pt-2">
            <div className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">
              Launch Test Request Instantly:
            </div>

            <a
              href={getTelegramTestUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-sky-950 flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Contact via Telegram (@{CONTACT_INFO.telegramUser})</span>
            </a>

            <a
              href={getWhatsappTestUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-950 flex items-center justify-center gap-2 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact via WhatsApp ({CONTACT_INFO.whatsappNumber})</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
