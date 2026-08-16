import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  ShoppingCart, 
  ArrowRight, 
  Flame, 
  Sparkles,
  Send,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { ServiceItem, ServiceTier } from '../types';
import { BrandIcon } from './BrandIcons';
import { CONTACT_INFO } from '../data/servicesData';

interface ServiceCardProps {
  service: ServiceItem;
  onAddToCart: (service: ServiceItem, tier: ServiceTier, quantity: number) => void;
  onViewDetails: (service: ServiceItem) => void;
  onOpenTestModal: (service?: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onAddToCart,
  onViewDetails,
  onOpenTestModal
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>(
    service.tiers.find(t => t.popular)?.id || service.tiers[0].id
  );
  const [addedAnimation, setAddedAnimation] = useState(false);

  const currentTier = service.tiers.find(t => t.id === selectedTierId) || service.tiers[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(service, currentTier, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'reviews':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      case 'bank_accounts':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      default:
        return 'bg-sky-500/10 text-sky-300 border-sky-500/30';
    }
  };

  return (
    <div 
      onClick={() => onViewDetails(service)}
      className="group relative bg-zinc-900/90 hover:bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-5 shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-emerald-950/20"
      id={`service-card-${service.id}`}
    >
      {/* Top Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-700/80 flex items-center justify-center p-2 group-hover:scale-105 transition-transform shrink-0 shadow-md">
              <BrandIcon name={service.iconKey} className="w-7 h-7" />
            </div>
            <div>
              <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full border ${getCategoryBadgeColor(service.category)}`}>
                {service.platform}
              </span>
              <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors mt-0.5 leading-snug line-clamp-1">
                {service.title}
              </h3>
            </div>
          </div>

          {service.isHot && (
            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 shrink-0">
              <Flame className="w-3 h-3 text-rose-400" />
              HOT
            </span>
          )}
        </div>

        {/* Short Description */}
        <p className="text-xs text-zinc-400 mb-4 line-clamp-2 leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Tier / Package Selector */}
        {service.tiers.length > 1 && (
          <div className="mb-4 space-y-1.5" onClick={(e) => e.stopPropagation()}>
            <label className="text-[11px] font-semibold text-zinc-300 flex items-center justify-between">
              <span>Select Option / Warranty:</span>
              <span className="text-zinc-500">{service.tiers.length} variants</span>
            </label>
            <div className="grid grid-cols-1 gap-1.5">
              {service.tiers.map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setSelectedTierId(tier.id)}
                  className={`text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between border transition-all ${
                    selectedTierId === tier.id
                      ? 'bg-emerald-500/15 border-emerald-500/60 text-white font-medium shadow-sm'
                      : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <span className={`w-2 h-2 rounded-full ${selectedTierId === tier.id ? 'bg-emerald-400' : 'bg-zinc-700'}`} />
                    <span className="truncate">{tier.name}</span>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 font-mono font-bold text-emerald-400">
                    <span>${tier.price}</span>
                    {tier.unit && <span className="text-[10px] text-zinc-400 font-normal">/{tier.unit.replace('per ', '').replace('for ', '')}</span>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Single Tier Display */}
        {service.tiers.length === 1 && (
          <div className="mb-4 bg-zinc-950/60 border border-zinc-800/80 p-2.5 rounded-xl flex items-center justify-between text-xs">
            <span className="text-zinc-300 font-medium">{currentTier.name}</span>
            <span className="text-emerald-400 font-mono font-bold text-sm">${currentTier.price}</span>
          </div>
        )}

        {/* Features highlights */}
        <ul className="space-y-1.5 mb-4 text-[11px] text-zinc-400">
          {service.features.slice(0, 2).map((feat, idx) => (
            <li key={idx} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="line-clamp-1">{feat}</span>
            </li>
          ))}
          {service.warrantyPolicy && (
            <li className="flex items-center gap-1.5 text-amber-300/90 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="line-clamp-1">1-Time Replacement Guaranteed</span>
            </li>
          )}
        </ul>
      </div>

      {/* Bottom Pricing & Actions */}
      <div className="pt-3 border-t border-zinc-800/80">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Total Price</div>
            <div className="text-xl font-black text-white font-mono flex items-baseline gap-1">
              <span className="text-emerald-400">${currentTier.price}</span>
              <span className="text-xs text-zinc-400 font-normal">
                {currentTier.unit || service.priceUnit}
              </span>
            </div>
          </div>

          <div className="text-right flex items-center gap-1 text-[11px] text-zinc-400">
            <Clock className="w-3 h-3 text-zinc-400" />
            <span className="truncate max-w-[120px]">{service.deliveryTime.split('(')[0]}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            id={`add-to-cart-btn-${service.id}`}
            type="button"
            onClick={handleAddToCart}
            className={`py-2 px-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
              addedAnimation 
                ? 'bg-emerald-500 text-zinc-950' 
                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700'
            }`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>{addedAnimation ? 'Added!' : 'Add to Cart'}</span>
          </button>

          <button
            id={`view-details-btn-${service.id}`}
            type="button"
            onClick={() => onViewDetails(service)}
            className="py-2 px-2.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1 shadow-md shadow-emerald-950 transition-all active:scale-95"
          >
            <span>Order Now</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quick Test Prompt */}
        <div className="mt-2 text-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenTestModal(service);
            }}
            className="text-[11px] text-zinc-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Test this service first</span>
          </button>
        </div>
      </div>
    </div>
  );
};
