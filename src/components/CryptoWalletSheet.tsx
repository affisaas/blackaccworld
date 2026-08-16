import React, { useState } from 'react';
import { 
  X, 
  Wallet, 
  Copy, 
  Check, 
  ShieldCheck, 
  Coins, 
  Send, 
  PhoneCall,
  QrCode
} from 'lucide-react';
import { CRYPTO_WALLETS, CONTACT_INFO } from '../data/servicesData';
import { CryptoAddress } from '../types';
import { generateQrMatrix } from '../utils/cryptoHelper';

interface CryptoWalletSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CryptoWalletSheet: React.FC<CryptoWalletSheetProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedWalletForQr, setSelectedWalletForQr] = useState<CryptoAddress>(CRYPTO_WALLETS[0]);

  const handleCopy = (wallet: CryptoAddress) => {
    navigator.clipboard.writeText(wallet.address);
    setCopiedId(wallet.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const qrMatrix = generateQrMatrix(selectedWalletForQr.address);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in text-left">
      <div 
        className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        id="crypto-wallet-sheet"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Official Crypto Payment Addresses (12 Wallets)</h2>
              <p className="text-xs text-zinc-400">
                Direct on-chain deposit addresses for blackaccworld.com
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
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-xs text-emerald-200 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                All crypto transactions are monitored 24/7. After sending funds, you can notify support on Telegram (<strong>@{CONTACT_INFO.telegramUser}</strong>) or WhatsApp (<strong>{CONTACT_INFO.whatsappNumber}</strong>) for priority order execution.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Wallet List */}
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Available Networks &amp; Addresses:
              </h3>

              <div className="space-y-2.5">
                {CRYPTO_WALLETS.map((w) => {
                  const isCopied = copiedId === w.id;
                  const isSelected = selectedWalletForQr.id === w.id;

                  return (
                    <div
                      key={w.id}
                      onClick={() => setSelectedWalletForQr(w)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-zinc-900 border-emerald-500 shadow-md'
                          : 'bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-2.5 h-2.5 rounded-full" 
                            style={{ backgroundColor: w.color }} 
                          />
                          <span className="font-bold text-xs text-white">{w.symbol}</span>
                          <span className="text-[11px] text-zinc-400 font-mono">({w.network})</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopy(w);
                            }}
                            className="px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs rounded-lg flex items-center gap-1 border border-zinc-700 transition-colors"
                          >
                            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{isCopied ? 'Copied' : 'Copy'}</span>
                          </button>
                        </div>
                      </div>

                      <div className="text-[11px] font-mono text-zinc-300 break-all select-all bg-zinc-950/80 p-2 rounded-lg border border-zinc-800">
                        {w.address}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* QR Code Preview Box */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Scan QR Code:
              </h3>

              <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 text-center space-y-4 shadow-xl">
                <div className="bg-white p-4 rounded-2xl inline-block shadow-xl">
                  <svg viewBox="0 0 25 25" className="w-40 h-40 mx-auto" shapeRendering="crispEdges">
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
                </div>

                <div>
                  <div className="text-sm font-bold text-white">{selectedWalletForQr.coin}</div>
                  <div className="text-xs text-emerald-400 font-mono">{selectedWalletForQr.network}</div>
                </div>

                <button
                  onClick={() => handleCopy(selectedWalletForQr)}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all"
                >
                  {copiedId === selectedWalletForQr.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedId === selectedWalletForQr.id ? 'Address Copied!' : `Copy ${selectedWalletForQr.symbol} Address`}</span>
                </button>
              </div>

              {/* Direct Support Reminder */}
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 space-y-2 text-center">
                <div>Need an invoice or custom currency?</div>
                <div className="flex justify-center gap-3 font-semibold">
                  <a href={CONTACT_INFO.telegramUrl} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                    Telegram: @{CONTACT_INFO.telegramUser}
                  </a>
                  <span>•</span>
                  <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">
                    WhatsApp Desk
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
