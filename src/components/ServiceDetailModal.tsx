import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Clock, 
  ShoppingCart, 
  Send, 
  PhoneCall, 
  Coins, 
  CheckCircle2, 
  Sparkles, 
  Share2, 
  HelpCircle,
  Plus,
  Minus,
  ExternalLink,
  Lock
} from 'lucide-react';
import { ServiceItem, ServiceTier } from '../types';
import { BrandIcon } from './BrandIcons';
import { CONTACT_INFO } from '../data/servicesData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onAddToCart: (service: ServiceItem, tier: ServiceTier, quantity: number, notes?: string) => void;
  onDirectCryptoCheckout: (service: ServiceItem, tier: ServiceTier, quantity: number, notes?: string) => void;
  onOpenTestModal: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onAddToCart,
  onDirectCryptoCheckout,
  onOpenTestModal
}) => {
  if (!service) return null;

  const [selectedTierId, setSelectedTierId] = useState<string>(
    service.tiers.find(t => t.popular)?.id || service.tiers[0].id
  );
  const [quantity, setQuantity] = useState(1);
  const [customNotes, setCustomNotes] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

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
      `Quantity: ${quantity}\n` +
      `Total: $${totalPrice} USD\n` +
      (customNotes ? `Requirements/Link: ${customNotes}\n` : '') +
      `\nPlease provide payment details / invoice.`
    );
    return `https://t.me/${CONTACT_INFO.telegramUser}?text=${text}`;
  };

  const getWhatsappOrderUrl = () => {
    const text = encodeURIComponent(
      `Hello, I want to order from blackaccworld.com:\n\n` +
      `Product: ${service.title}\n` +
      `Option: ${selectedTier.name}\n` +
      `Quantity: ${quantity}\n` +
      `Total: $${totalPrice} USD\n` +
      (customNotes ? `Requirements/Link: ${customNotes}\n` : '') +
      `\nPlease provide payment details / invoice.`
    );
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        id={`service-modal-${service.id}`}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-700 flex items-center justify-center p-1.5 shadow-inner">
              <BrandIcon name={service.iconKey} className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                  {service.platform}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs text-zinc-400">SEO Verified Product Page</span>
              </div>
              <h2 className="text-lg font-bold text-white leading-tight">
                {service.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              title="Share service link"
              className="p-2 text-zinc-400 hover:text-white bg-zinc-800/80 rounded-xl border border-zinc-700 text-xs flex items-center gap-1"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white bg-zinc-800/80 rounded-xl border border-zinc-700 hover:bg-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Details, Features, Warranty */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Service Description
                </h3>
                <p className="text-sm text-zinc-200 leading-relaxed bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
                  {service.fullDesc}
                </p>
              </div>

              {/* Key Features List */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5">
                  Package Specifications &amp; Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/70 text-xs text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warranty Guarantee Box */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-xs text-amber-300">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>One-Time Replacement Warranty Guarantee</span>
                </div>
                <p className="text-xs text-amber-200/90 leading-relaxed">
                  {service.warrantyPolicy || CONTACT_INFO.replacementPolicyNotice}
                </p>
              </div>

              {/* SEO Keywords Tags */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Service Keywords &amp; Search Index
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {service.seoKeywords.map((kw, i) => (
                    <span key={i} className="text-[11px] px-2.5 py-1 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded-lg">
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQs if present */}
              {service.faq && service.faq.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Frequently Asked Questions
                  </h3>
                  {service.faq.map((faq, i) => (
                    <div key={i} className="bg-zinc-900/40 p-3 rounded-xl border border-zinc-800 text-xs space-y-1">
                      <div className="font-semibold text-zinc-200">{faq.q}</div>
                      <div className="text-zinc-400">{faq.a}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Pricing Tier Selection, Quantity, Direct Order */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-zinc-900/90 rounded-2xl border border-zinc-800 p-5 space-y-4 shadow-xl">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                    1. Choose Tier / Package Option:
                  </label>
                  <div className="space-y-2">
                    {service.tiers.map((tier) => (
                      <div
                        key={tier.id}
                        onClick={() => setSelectedTierId(tier.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          selectedTierId === tier.id
                            ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-lg'
                            : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              checked={selectedTierId === tier.id}
                              onChange={() => setSelectedTierId(tier.id)}
                              className="text-emerald-500 focus:ring-emerald-500 h-4 w-4 bg-zinc-900 border-zinc-700"
                            />
                            <span className="font-semibold text-xs text-zinc-100">{tier.name}</span>
                          </div>
                          <span className="text-sm font-black font-mono text-emerald-400">
                            ${tier.price}
                          </span>
                        </div>
                        {tier.description && (
                          <p className="text-[11px] text-zinc-400 mt-1 pl-6">
                            {tier.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantity Stepper */}
                <div className="pt-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                    2. Quantity:
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
                      <span className="w-12 text-center font-bold font-mono text-white text-sm">
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
                    <span className="text-xs text-zinc-400">
                      {selectedTier.unit || service.priceUnit}
                    </span>
                  </div>
                </div>

                {/* Custom Notes / URL Field */}
                <div className="pt-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-1">
                    3. Target URL, Instructions or Account Email (Optional):
                  </label>
                  <textarea
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    placeholder="Enter Google Maps link, Yelp URL, specific city/country requirement, or custom review text..."
                    rows={2}
                    className="w-full bg-zinc-950 text-zinc-200 text-xs p-3 rounded-xl border border-zinc-800 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Total Summary */}
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase text-zinc-400 font-semibold">Calculated Total</div>
                    <div className="text-2xl font-black text-white font-mono">
                      ${totalPrice} <span className="text-xs font-normal text-zinc-400">USD</span>
                    </div>
                  </div>
                  <div className="text-right text-[11px] text-zinc-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{service.deliveryTime.split('(')[0]}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-2">
                  <button
                    id="modal-crypto-checkout-btn"
                    onClick={() => {
                      onDirectCryptoCheckout(service, selectedTier, quantity, customNotes);
                    }}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-950 flex items-center justify-center gap-2 transition-all"
                  >
                    <Coins className="w-4 h-4 text-emerald-200" />
                    <span>Pay with Crypto (12 Coins)</span>
                  </button>

                  <button
                    id="modal-add-to-cart-btn"
                    onClick={() => {
                      onAddToCart(service, selectedTier, quantity, customNotes);
                      onClose();
                    }}
                    className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs rounded-xl border border-zinc-700 flex items-center justify-center gap-2 transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add To Shopping Cart</span>
                  </button>

                  {/* Direct Contact Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <a
                      href={getTelegramOrderUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2 px-3 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 rounded-xl text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-all text-center"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Order on Telegram</span>
                    </a>

                    <a
                      href={getWhatsappOrderUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2 px-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-xl text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-all text-center"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      onOpenTestModal(service);
                    }}
                    className="w-full py-2 text-amber-300 hover:text-amber-200 text-xs font-medium flex items-center justify-center gap-1.5 hover:underline pt-1"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Request Free/Small Test for this service</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
