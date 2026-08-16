import React from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingCart, 
  Coins, 
  Send, 
  PhoneCall, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { CartItem } from '../types';
import { BrandIcon } from './BrandIcons';
import { CONTACT_INFO } from '../data/servicesData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartId: string, quantity: number) => void;
  onRemoveItem: (cartId: string) => void;
  onClearCart: () => void;
  onCheckoutCrypto: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckoutCrypto
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getTelegramCartOrderUrl = () => {
    let summary = `Hello @EgSupport24, I would like to place an order on blackaccworld.com:\n\n`;
    items.forEach((it, idx) => {
      summary += `${idx + 1}. ${it.serviceTitle} (${it.tierName})\n   Qty: ${it.quantity} x $${it.price} = $${it.price * it.quantity} USD\n`;
      if (it.customNotes) summary += `   Notes: ${it.customNotes}\n`;
    });
    summary += `\nTotal Cart Amount: $${subtotal} USD\nPayment Method: Crypto (Please send payment link/address)`;
    return `https://t.me/${CONTACT_INFO.telegramUser}?text=${encodeURIComponent(summary)}`;
  };

  const getWhatsappCartOrderUrl = () => {
    let summary = `Hello, I would like to place an order on blackaccworld.com:\n\n`;
    items.forEach((it, idx) => {
      summary += `${idx + 1}. ${it.serviceTitle} (${it.tierName})\n   Qty: ${it.quantity} x $${it.price} = $${it.price * it.quantity} USD\n`;
      if (it.customNotes) summary += `   Notes: ${it.customNotes}\n`;
    });
    summary += `\nTotal Cart Amount: $${subtotal} USD\nPayment Method: Crypto`;
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(summary)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-zinc-800 flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-zinc-800 bg-zinc-900/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Your Shopping Cart</h2>
                <p className="text-xs text-zinc-400">
                  {items.length} {items.length === 1 ? 'item' : 'items'} in cart
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-xl bg-zinc-800/80 hover:bg-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-zinc-500 space-y-3">
                <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                  <ShoppingCart className="w-8 h-8 text-zinc-600" />
                </div>
                <h3 className="text-sm font-semibold text-zinc-300">Your cart is empty</h3>
                <p className="text-xs max-w-xs">
                  Browse our Google reviews, verified bank accounts, or PVA mailboxes to start adding items.
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.cartId}
                  className="bg-zinc-900/80 border border-zinc-800/90 rounded-xl p-3.5 space-y-3 shadow-md"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-700 flex items-center justify-center p-1">
                        <BrandIcon name={item.iconKey} className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white line-clamp-1">
                          {item.serviceTitle}
                        </h4>
                        <span className="text-[11px] text-emerald-400 font-medium">
                          {item.tierName}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.cartId)}
                      className="text-zinc-500 hover:text-rose-400 p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {item.customNotes && (
                    <div className="text-[10px] text-zinc-400 bg-zinc-950/60 p-1.5 rounded-lg border border-zinc-800 line-clamp-1">
                      Notes: {item.customNotes}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-1 border-t border-zinc-800/60">
                    <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-lg p-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)}
                        className="p-1 text-zinc-400 hover:text-white rounded"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs font-mono font-bold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
                        className="p-1 text-zinc-400 hover:text-white rounded"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="font-mono font-black text-sm text-emerald-400">
                      ${item.price * item.quantity} USD
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-zinc-800 bg-zinc-900/95 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span className="font-mono text-zinc-200">${subtotal} USD</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Replacement Warranty</span>
                  <span className="text-emerald-400 font-medium">Included (1-Time)</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-zinc-800">
                  <span>Total Amount</span>
                  <span className="font-mono text-emerald-400 text-lg">${subtotal} USD</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  id="cart-crypto-checkout-btn"
                  onClick={onCheckoutCrypto}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-950 flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  <Coins className="w-4 h-4 text-emerald-200" />
                  <span>Instant Crypto Checkout</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={getTelegramCartOrderUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-2 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 text-center"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Telegram Cart</span>
                  </a>

                  <a
                    href={getWhatsappCartOrderUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 text-center"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>WhatsApp Cart</span>
                  </a>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={onClearCart}
                    className="text-[11px] text-zinc-500 hover:text-rose-400 transition-colors"
                  >
                    Clear All Items
                  </button>
                  <div className="flex items-center gap-1 text-[10px] text-zinc-400">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>1-Time Replacement Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
