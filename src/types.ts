export type ServiceCategory = 'reviews' | 'bank_accounts' | 'accounts' | 'all';

export interface ServiceTier {
  id: string;
  name: string;
  price: number;
  unit?: string; // e.g. "per Review", "Per Account", "2 Accounts", etc.
  warranty?: string; // e.g. "30 Days Warranty", "15 Days Warranty", "7 Days Warranty"
  description?: string;
  popular?: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: 'reviews' | 'bank_accounts' | 'accounts';
  iconKey: string;
  shortDesc: string;
  fullDesc: string;
  startingPrice: number;
  priceUnit: string;
  tiers: ServiceTier[];
  features: string[];
  seoKeywords: string[];
  warrantyPolicy?: string;
  deliveryTime: string;
  isHot?: boolean;
  isPopular?: boolean;
  platform: string;
  faq?: { q: string; a: string }[];
}

export interface CartItem {
  cartId: string;
  serviceId: string;
  serviceTitle: string;
  tierId: string;
  tierName: string;
  price: number;
  unit: string;
  quantity: number;
  iconKey: string;
  category: string;
  customNotes?: string;
}

export interface CryptoAddress {
  id: string;
  coin: string;
  symbol: string;
  network: string;
  address: string;
  color: string;
  ratePerUsd?: number;
}

export interface OrderRecord {
  orderId: string;
  date: string;
  items: CartItem[];
  totalUsd: number;
  cryptoSymbol: string;
  cryptoAmount: string | number;
  cryptoAddress: string;
  txid?: string;
  customerEmail?: string;
  contactMethod?: 'telegram' | 'whatsapp' | 'email';
  contactHandle: string;
  status: 'Processing' | 'Awaiting Payment' | 'pending' | 'verifying' | 'processing' | 'completed';
  emailStatus?: 'sent' | 'failed' | 'sending' | 'idle';
}

export interface OfficialExternalLink {
  title: string;
  url: string;
  domain: string;
  description: string;
  badge: 'Official Portal' | 'Support Guidelines' | 'Developer & API' | 'Security & Compliance' | 'Regulatory Standard' | 'Industry Resource';
}

export interface InternalServiceLink {
  slug: string;
  title: string;
  category: 'reviews' | 'bank_accounts' | 'accounts';
  iconKey: string;
  startingPrice: number;
  priceUnit?: string;
  relation: string;
  reason: string;
}

export interface InternalBlogLink {
  slug: string;
  title: string;
  excerpt?: string;
  readTime: string;
  categoryLabel: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'reviews' | 'bank_accounts' | 'accounts' | 'security' | 'growth';
  categoryLabel: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  content: string; // Markdown or rich formatted text
  relatedServiceSlugs?: string[];
  officialExternalLinks?: OfficialExternalLink[];
  featured?: boolean;
}

