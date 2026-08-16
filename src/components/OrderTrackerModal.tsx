import React, { useState, useEffect } from 'react';
import { 
  X, 
  Search, 
  RefreshCw, 
  CheckCircle2, 
  Clock, 
  Send, 
  PhoneCall, 
  ExternalLink,
  Package,
  ShieldCheck
} from 'lucide-react';
import { OrderRecord } from '../types';
import { CONTACT_INFO } from '../data/servicesData';

interface OrderTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderTrackerModal: React.FC<OrderTrackerModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const [searchKey, setSearchKey] = useState('');
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [searchedOrder, setSearchedOrder] = useState<OrderRecord | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('baw_order_history') || '[]');
      setOrders(saved);
      if (saved.length > 0) {
        setSearchedOrder(saved[0]);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchKey.trim()) return;

    const term = searchKey.trim().toLowerCase();
    const found = orders.find(
      o => o.orderId.toLowerCase() === term || 
           (o.txid && o.txid.toLowerCase().includes(term)) ||
           o.contactHandle.toLowerCase().includes(term)
    );

    if (found) {
      setSearchedOrder(found);
      setNotFound(false);
    } else {
      setNotFound(true);
      // Simulate live blockchain lookup state for realistic feel
      setSearchedOrder({
        orderId: searchKey.toUpperCase(),
        date: new Date().toISOString(),
        items: [],
        totalUsd: 0,
        cryptoSymbol: 'USDT',
        cryptoAmount: '0.00',
        cryptoAddress: 'On-Chain Ledger Query',
        contactMethod: 'telegram',
        contactHandle: 'Manual Check Requested',
        status: 'Processing'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in text-left">
      <div 
        className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
        id="order-tracker-modal"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-sky-500/20 text-sky-400 rounded-xl">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Live Order &amp; TXID Status Tracker</h2>
              <p className="text-xs text-zinc-400">
                Check verification, queue status, and fulfillment updates
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

        {/* Content */}
        <div className="p-6 space-y-5 overflow-y-auto max-h-[80vh]">
          {/* Search Box */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                placeholder="Enter Order ID (e.g. BAW-123456) or TXID..."
                className="w-full bg-zinc-900 border border-zinc-800 text-zinc-100 text-xs pl-10 pr-4 py-3 rounded-xl focus:outline-none focus:border-sky-500 font-mono"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-colors"
            >
              Lookup
            </button>
          </form>

          {/* Active Order Card */}
          {searchedOrder && (
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-semibold">Order Reference</span>
                  <div className="text-base font-black text-white font-mono">{searchedOrder.orderId}</div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
                  <Clock className="w-3.5 h-3.5 animate-spin" />
                  <span>{searchedOrder.status}</span>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="grid grid-cols-3 gap-2 py-2">
                <div className="text-center p-2 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-white">1. Received</div>
                  <div className="text-[9px] text-zinc-500">Order logged</div>
                </div>
                <div className="text-center p-2 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mx-auto mb-1 animate-pulse" />
                  <div className="text-[11px] font-bold text-white">2. Verification</div>
                  <div className="text-[9px] text-zinc-500">Blockchain / Queue</div>
                </div>
                <div className="text-center p-2 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="w-2 h-2 rounded-full bg-zinc-600 mx-auto mb-1" />
                  <div className="text-[11px] font-bold text-zinc-400">3. Delivery</div>
                  <div className="text-[9px] text-zinc-500">Via TG / WA</div>
                </div>
              </div>

              {searchedOrder.items && searchedOrder.items.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <div className="text-xs text-zinc-400 font-semibold">Items in this order:</div>
                  <div className="space-y-1">
                    {searchedOrder.items.map((it, idx) => (
                      <div key={idx} className="flex justify-between text-xs text-zinc-300 bg-zinc-950/60 p-2 rounded-lg border border-zinc-800/80">
                        <span>{it.quantity}x {it.serviceTitle} ({it.tierName})</span>
                        <span className="font-mono text-emerald-400 font-bold">${it.price * it.quantity} USD</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {searchedOrder.cryptoAddress && (
                <div className="text-xs space-y-1">
                  <span className="text-zinc-500">Payment Address:</span>
                  <div className="font-mono text-zinc-400 text-[11px] bg-zinc-950 p-2 rounded-lg break-all border border-zinc-800">
                    {searchedOrder.cryptoAddress}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Prompt Support Link */}
          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 space-y-2 text-center">
            <div>Need instant status update from a human technician?</div>
            <div className="flex justify-center gap-4">
              <a
                href={CONTACT_INFO.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-sky-400 hover:underline flex items-center gap-1"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram: @{CONTACT_INFO.telegramUser}</span>
              </a>
              <span className="text-zinc-600">|</span>
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-emerald-400 hover:underline flex items-center gap-1"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
