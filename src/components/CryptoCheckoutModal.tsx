import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Coins, 
  ShieldCheck, 
  Send, 
  PhoneCall, 
  CheckCircle2, 
  QrCode, 
  AlertCircle, 
  ExternalLink,
  Sparkles,
  Receipt
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem, CryptoAddress, OrderRecord } from '../types';
import { CRYPTO_WALLETS, CONTACT_INFO } from '../data/servicesData';
import { generateQrMatrix } from '../utils/cryptoHelper';

interface CryptoCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  totalUsd: number;
  onOrderSuccess: (order: OrderRecord) => void;
}

export const CryptoCheckoutModal: React.FC<CryptoCheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  totalUsd,
  onOrderSuccess
}) => {
  if (!isOpen) return null;

  const [selectedWalletId, setSelectedWalletId] = useState<string>('usdt-trc20');
  const [contactType, setContactType] = useState<'telegram' | 'whatsapp' | 'crypto_direct'>('telegram');
  const [contactHandle, setContactHandle] = useState('');
  const [txid, setTxid] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderRecord | null>(null);

  const selectedWallet = CRYPTO_WALLETS.find(w => w.id === selectedWalletId) || CRYPTO_WALLETS[0];

  // Calculate estimated crypto amount
  const cryptoAmount = (totalUsd * (selectedWallet.ratePerUsd || 1)).toFixed(
    selectedWallet.symbol.includes('BTC') ? 6 : selectedWallet.symbol.includes('ETH') ? 5 : 2
  );

  const qrMatrix = generateQrMatrix(selectedWallet.address);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(selectedWallet.address);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const orderId = `BAW-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder: OrderRecord = {
      orderId,
      date: new Date().toISOString(),
      items: [...items],
      totalUsd,
      cryptoSymbol: selectedWallet.symbol,
      cryptoAmount,
      cryptoAddress: selectedWallet.address,
      txid: txid.trim() || undefined,
      contactMethod: contactType,
      contactHandle: contactHandle.trim() || 'Not Provided (Check TXID)',
      status: txid.trim() ? 'Processing' : 'Awaiting Payment'
    };

    // Save to local history
    const existingHistory = JSON.parse(localStorage.getItem('baw_order_history') || '[]');
    localStorage.setItem('baw_order_history', JSON.stringify([newOrder, ...existingHistory]));

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setCompletedOrder(newOrder);
    onOrderSuccess(newOrder);
  };

  const getTelegramProofUrl = () => {
    if (!completedOrder) return '#';
    const text = encodeURIComponent(
      `Hello @EgSupport24, I have placed order #${completedOrder.orderId} on blackaccworld.com!\n\n` +
      `Total: $${completedOrder.totalUsd} USD (${completedOrder.cryptoAmount} ${completedOrder.cryptoSymbol})\n` +
      `Wallet Paid: ${completedOrder.cryptoAddress}\n` +
      (completedOrder.txid ? `Transaction Hash / TXID: ${completedOrder.txid}\n` : '') +
      `Contact: ${completedOrder.contactHandle}\n` +
      `\nPlease verify and deliver my items.`
    );
    return `https://t.me/${CONTACT_INFO.telegramUser}?text=${text}`;
  };

  const getWhatsappProofUrl = () => {
    if (!completedOrder) return '#';
    const text = encodeURIComponent(
      `Hello, I have placed order #${completedOrder.orderId} on blackaccworld.com!\n\n` +
      `Total: $${completedOrder.totalUsd} USD (${completedOrder.cryptoAmount} ${completedOrder.cryptoSymbol})\n` +
      `Wallet: ${completedOrder.cryptoAddress}\n` +
      (completedOrder.txid ? `TXID: ${completedOrder.txid}\n` : '') +
      `Contact: ${completedOrder.contactHandle}\n` +
      `\nPlease verify and deliver.`
    );
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in text-left">
      <div 
        className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col"
        id="crypto-checkout-modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
              <Coins className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                {completedOrder ? 'Order Receipt & Verification' : 'Crypto Payment Gateway'}
              </h2>
              <p className="text-xs text-zinc-400">
                {completedOrder ? `Order #${completedOrder.orderId}` : 'Instant verification for 12 major cryptocurrencies'}
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

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {completedOrder ? (
            /* Order Success View */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-950">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Payment Submitted Successfully
                </span>
                <h3 className="text-2xl font-black text-white">
                  Order #{completedOrder.orderId}
                </h3>
                <p className="text-xs text-zinc-400 max-w-md mx-auto">
                  Your order has been recorded in the delivery queue. Send your receipt directly to Telegram or WhatsApp for instant priority delivery!
                </p>
              </div>

              {/* Order Summary Box */}
              <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 max-w-md mx-auto text-left space-y-3">
                <div className="flex justify-between text-xs text-zinc-400 pb-2 border-b border-zinc-800">
                  <span>Amount to Pay:</span>
                  <span className="text-emerald-400 font-bold font-mono text-sm">
                    {completedOrder.cryptoAmount} {completedOrder.cryptoSymbol} (${completedOrder.totalUsd} USD)
                  </span>
                </div>

                <div className="text-xs space-y-1">
                  <div className="text-zinc-500">Destination Wallet:</div>
                  <div className="font-mono text-zinc-200 text-[11px] bg-zinc-950 p-2 rounded-lg break-all border border-zinc-800">
                    {completedOrder.cryptoAddress}
                  </div>
                </div>

                {completedOrder.txid && (
                  <div className="text-xs space-y-1">
                    <div className="text-zinc-500">Provided TXID / Hash:</div>
                    <div className="font-mono text-zinc-200 text-[11px] bg-zinc-950 p-2 rounded-lg break-all border border-zinc-800">
                      {completedOrder.txid}
                    </div>
                  </div>
                )}

                <div className="text-xs text-zinc-400 pt-1">
                  <span className="text-zinc-500">Items Ordered: </span>
                  {completedOrder.items.map(i => `${i.quantity}x ${i.serviceTitle}`).join(', ')}
                </div>
              </div>

              {/* Instant Notification Buttons */}
              <div className="max-w-md mx-auto space-y-2">
                <a
                  href={getTelegramProofUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-sky-950 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Receipt to Telegram (@{CONTACT_INFO.telegramUser})</span>
                </a>

                <a
                  href={getWhatsappProofUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-950 flex items-center justify-center gap-2 transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Send Receipt to WhatsApp ({CONTACT_INFO.whatsappNumber})</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  Return to Store
                </button>
              </div>
            </div>
          ) : (
            /* Active Crypto Checkout Gateway */
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              
              {/* Step 1: Select Crypto */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block mb-2">
                  1. Select Your Cryptocurrency (12 Networks Supported):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {CRYPTO_WALLETS.map((wallet) => (
                    <button
                      key={wallet.id}
                      type="button"
                      onClick={() => setSelectedWalletId(wallet.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        selectedWalletId === wallet.id
                          ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-md'
                          : 'bg-zinc-900/70 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-zinc-100">{wallet.symbol}</span>
                        <div 
                          className="w-2 h-2 rounded-full" 
                          style={{ backgroundColor: wallet.color }} 
                        />
                      </div>
                      <div className="text-[10px] text-zinc-400 truncate mt-0.5">
                        {wallet.network}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Payment Details & QR Code */}
              <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 space-y-4">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  {/* SVG QR Code */}
                  <div className="bg-white p-3 rounded-2xl shadow-xl shrink-0 flex flex-col items-center">
                    <svg viewBox="0 0 25 25" className="w-32 h-32" shapeRendering="crispEdges">
                      {qrMatrix.map((row, r) =>
                        row.map((cell, c) => (
                          <rect
                            key={`${r}-${c}`}
                            x={c}
                            y={r}
                            width={1}
                            height={1}
                            fill={cell ? '#000000' : '#FFFFFF'}
                          />
                        ))
                      )}
                    </svg>
                    <span className="text-[9px] font-mono font-bold text-zinc-800 uppercase mt-1">
                      {selectedWallet.symbol}
                    </span>
                  </div>

                  {/* Transfer Info */}
                  <div className="space-y-3 flex-1 w-full text-left">
                    <div>
                      <div className="text-xs text-zinc-400">Total USD Value:</div>
                      <div className="text-2xl font-black text-white font-mono flex items-baseline gap-2">
                        <span>${totalUsd} USD</span>
                        <span className="text-sm font-semibold text-emerald-400">
                          ≈ {cryptoAmount} {selectedWallet.symbol}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-zinc-400 mb-1 flex items-center justify-between">
                        <span>Send Exact {selectedWallet.network} to Address:</span>
                        <span className="text-[10px] text-emerald-400 font-semibold">1-Click Copy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs font-mono text-emerald-400 break-all select-all">
                          {selectedWallet.address}
                        </div>
                        <button
                          type="button"
                          onClick={handleCopyAddress}
                          className="p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-md transition-colors shrink-0"
                          title="Copy address"
                        >
                          {isCopied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Contact & Proof Information */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                  2. Contact &amp; Delivery Destination:
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Contact Method:</label>
                    <select
                      value={contactType}
                      onChange={(e) => setContactType(e.target.value as any)}
                      className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs p-2.5 rounded-xl focus:outline-none focus:border-emerald-500"
                    >
                      <option value="telegram">Telegram (@username)</option>
                      <option value="whatsapp">WhatsApp (+Phone number)</option>
                      <option value="crypto_direct">Email / TXID Direct</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">
                      Your {contactType === 'telegram' ? 'Telegram handle' : contactType === 'whatsapp' ? 'WhatsApp phone' : 'Contact email'}:
                    </label>
                    <input
                      type="text"
                      required
                      value={contactHandle}
                      onChange={(e) => setContactHandle(e.target.value)}
                      placeholder={contactType === 'telegram' ? '@username' : contactType === 'whatsapp' ? '+1 234 567 8900' : 'youremail@domain.com'}
                      className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs p-2.5 rounded-xl focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-zinc-400 block mb-1">
                    Transaction Hash / TXID (Optional or submit after payment):
                  </label>
                  <input
                    type="text"
                    value={txid}
                    onChange={(e) => setTxid(e.target.value)}
                    placeholder="e.g. 0x8a92... or TRC20 transfer hash"
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs p-2.5 rounded-xl font-mono focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Submit & Guarantees */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-emerald-950 flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-200" />
                  <span>Confirm Crypto Transfer &amp; Place Order</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-zinc-400 text-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Protected by 1-Time Replacement Warranty Policy</span>
                </div>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
