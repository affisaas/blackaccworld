import { CryptoAddress, ServiceItem } from '../types';

export const CONTACT_INFO = {
  domain: 'blackaccworld.com',
  telegramUser: 'EgSupport24',
  telegramUrl: 'https://t.me/EgSupport24',
  whatsappNumber: '+1 (307) 393-9979',
  whatsappRaw: '+13073939979',
  whatsappUrl: 'https://wa.me/13073939979',
  testServiceNotice: 'For testing all services, please contact us on Telegram or WhatsApp.',
  replacementPolicyNotice: 'If any reviews drop during the warranty period, we will replace them once, subject to a one-time replacement policy.'
};

export const CRYPTO_WALLETS: CryptoAddress[] = [
  {
    id: 'btc',
    coin: 'Bitcoin',
    symbol: 'BTC',
    network: 'Bitcoin Native (BTC)',
    address: '1FcThSprBdA4RQ6bZegw4UyYZMys1NbD9w',
    color: '#F7931A',
    ratePerUsd: 0.0000105
  },
  {
    id: 'usdt-trc20',
    coin: 'Tether USDT',
    symbol: 'USDT (TRC20)',
    network: 'TRON TRC20',
    address: 'TQkGnoSN5EaKnNpbXCV7cBdzTG7zYJT6rL',
    color: '#26A17B',
    ratePerUsd: 1.0
  },
  {
    id: 'usdt-bep20',
    coin: 'Tether USDT',
    symbol: 'USDT (BEP20)',
    network: 'BNB Smart Chain (BEP20)',
    address: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    color: '#26A17B',
    ratePerUsd: 1.0
  },
  {
    id: 'usdt-erc20',
    coin: 'Tether USDT',
    symbol: 'USDT (ERC20)',
    network: 'Ethereum (ERC20)',
    address: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    color: '#26A17B',
    ratePerUsd: 1.0
  },
  {
    id: 'eth',
    coin: 'Ethereum',
    symbol: 'ETH',
    network: 'Ethereum Mainnet (ERC20)',
    address: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    color: '#627EEA',
    ratePerUsd: 0.00035
  },
  {
    id: 'sol',
    coin: 'Solana',
    symbol: 'SOL',
    network: 'Solana SPL',
    address: '3iPS8xWurfFL6PPSR1czKN6mcAZSAhBa5Bny9TXZYmfg',
    color: '#14F195',
    ratePerUsd: 0.0055
  },
  {
    id: 'bnb',
    coin: 'BNB',
    symbol: 'BNB',
    network: 'BNB Smart Chain (BEP20)',
    address: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    color: '#F3BA2F',
    ratePerUsd: 0.0016
  },
  {
    id: 'ltc',
    coin: 'Litecoin',
    symbol: 'LTC',
    network: 'Litecoin Network',
    address: 'LcoRbiEKpYDxEHQrtUsiP2RU1MLQmNYnGy',
    color: '#345D9D',
    ratePerUsd: 0.0105
  },
  {
    id: 'usdc-erc20',
    coin: 'USD Coin',
    symbol: 'USDC (ERC20)',
    network: 'Ethereum (ERC20)',
    address: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    color: '#2775CA',
    ratePerUsd: 1.0
  },
  {
    id: 'usdc-bep20',
    coin: 'USD Coin',
    symbol: 'USDC (BEP20)',
    network: 'BNB Smart Chain (BEP20)',
    address: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    color: '#2775CA',
    ratePerUsd: 1.0
  },
  {
    id: 'trx',
    coin: 'TRON',
    symbol: 'TRX',
    network: 'TRON Mainnet',
    address: 'TQkGnoSN5EaKnNpbXCV7cBdzTG7zYJT6rL',
    color: '#FF0013',
    ratePerUsd: 4.25
  },
  {
    id: 'doge',
    coin: 'Dogecoin',
    symbol: 'DOGE',
    network: 'Dogecoin Network',
    address: 'D8Az7EYHRMvvtGM1X44eVFyrmEayt3H6h7',
    color: '#C2A633',
    ratePerUsd: 4.8
  }
];

export const ALL_SERVICES: ServiceItem[] = [
  // ==========================================
  // 1. REVIEWS SERVICES
  // ==========================================
  {
    id: 'google-reviews',
    slug: 'buy-google-reviews',
    title: 'Buy Google Reviews',
    category: 'reviews',
    platform: 'Google Business Profile',
    iconKey: 'google',
    isHot: true,
    isPopular: true,
    startingPrice: 7,
    priceUnit: 'per Review',
    shortDesc: 'High-retention 5-star Google Business ratings from aged real accounts with 1-time replacement warranty.',
    fullDesc: 'Boost your Google Maps search visibility, local SEO ranking, and trust score. Our Google reviews are posted from aged, location-specific, IP-unique profiles designed to stick permanently. Includes full text customization, star rating preferences, and warranty support.',
    tiers: [
      { id: 'gr-30d', name: '30 Days Warranty Package', price: 15, unit: 'per Review', warranty: '30 Days Warranty', popular: true, description: 'Premium sticky accounts with 30-day one-time replacement policy' },
      { id: 'gr-15d', name: '15 Days Warranty Package', price: 10, unit: 'per Review', warranty: '15 Days Warranty', description: 'Standard high-grade active Google accounts with 15-day replacement' },
      { id: 'gr-7d', name: '7 Days Warranty Package', price: 7, unit: 'per Review', warranty: '7 Days Warranty', description: 'Economy tier with 7-day initial stability warranty' }
    ],
    features: [
      '100% Non-Drop Quality Profiles',
      'Realistic drip-feed posting schedule',
      'Custom keyword rich review text',
      'Geo-targeted local IP addresses',
      '1-Time Free Replacement during warranty period'
    ],
    seoKeywords: [
      'Buy Google Reviews',
      'Buy 5 Star Google Reviews',
      'Google Maps SEO reviews',
      'Buy Google My Business reviews',
      'Google review replacement warranty',
      'Permanent sticky Google reviews'
    ],
    warrantyPolicy: 'If any reviews drop during the warranty period, we will replace them once, subject to a one-time replacement policy.',
    deliveryTime: 'Starts in 1-4 hours (drip-fed naturally)',
    faq: [
      { q: 'How does the warranty work?', a: 'If a review drops during your selected warranty period (7, 15, or 30 days), we provide a 1-time full replacement free of charge.' },
      { q: 'Can I write my own custom text?', a: 'Yes! You can provide specific review text or let our SEO team generate natural, realistic customer feedback.' }
    ]
  },
  {
    id: 'google-local-guide-reviews',
    slug: 'buy-google-local-guide-reviews',
    title: 'Buy Google Local Guide Reviews',
    category: 'reviews',
    platform: 'Google Local Guides',
    iconKey: 'google-guide',
    isHot: true,
    startingPrice: 20,
    priceUnit: 'per Review',
    shortDesc: 'Authoritative Level 4+ Google Local Guide badge reviews with ultra-high algorithmic weight.',
    fullDesc: 'Google Local Guide badges provide the highest trust signal on Google Maps and Google Search. Each review comes from an authentic, aged Local Guide account with badges and review histories.',
    tiers: [
      { id: 'glg-standard', name: 'Local Guide 5-Star Review', price: 20, unit: 'per Review', warranty: '30 Days Warranty', popular: true, description: 'Aged Google Local Guide badge profile review' }
    ],
    features: [
      'Level 4 to Level 8 Local Guide badges',
      'Maximum credibility & Maps ranking boost',
      'Includes custom photos/text upon request',
      'Highest retention rate on Google algorithms'
    ],
    seoKeywords: ['Buy Google Local Guide Reviews', 'Local Guide badge reviews', 'Google level 5 reviews', 'GMB local guide ranking'],
    warrantyPolicy: 'One-time replacement policy applies during 30 days.',
    deliveryTime: '6-12 hours gradual delivery'
  },
  {
    id: 'trustpilot-reviews',
    slug: 'buy-trustpilot-reviews',
    title: 'Buy Trustpilot Reviews',
    category: 'reviews',
    platform: 'Trustpilot',
    iconKey: 'trustpilot',
    isHot: true,
    isPopular: true,
    startingPrice: 10,
    priceUnit: 'per Review',
    shortDesc: 'Boost your TrustScore to 4.8+ with organic, verified-style Trustpilot company reviews.',
    fullDesc: 'Overcome negative ratings and build instant buyer trust with professional Trustpilot reviews. Handcrafted to survive Trustpilot automated filters and moderation checks.',
    tiers: [
      { id: 'tp-standard', name: 'Standard Trustpilot Review', price: 10, unit: 'per Review', warranty: '30 Days Warranty', popular: true, description: 'Aged Trustpilot account with verified status simulation' }
    ],
    features: [
      'Aged Trustpilot accounts with activity history',
      'Unique residential IP & browser fingerprinting',
      'Natural review length with positive customer narratives',
      'Boosts overall TrustScore quickly'
    ],
    seoKeywords: ['Buy Trustpilot Reviews', 'Buy 5 star Trustpilot reviews', 'Increase TrustScore', 'Trustpilot positive reviews'],
    warrantyPolicy: '30 days warranty with one-time replacement policy.',
    deliveryTime: '2-6 hours start time'
  },
  {
    id: 'trustpilot-verified-reviews',
    slug: 'buy-trustpilot-verified-reviews',
    title: 'Buy Trustpilot Verified Reviews',
    category: 'reviews',
    platform: 'Trustpilot Verified',
    iconKey: 'trustpilot-verified',
    startingPrice: 12,
    priceUnit: 'per Review',
    shortDesc: 'Order-verified green checkmark Trustpilot reviews for bulletproof buyer confidence.',
    fullDesc: 'Verified reviews carry the highest trust badge on Trustpilot. We generate purchase-verified invitation flows that trigger the official green "Verified" badge.',
    tiers: [
      { id: 'tpv-standard', name: 'Verified Trustpilot Review', price: 12, unit: 'per Review', warranty: '30 Days Warranty', popular: true, description: 'Green badge verified order review' }
    ],
    features: [
      'Official Green "Verified Order" badge on Trustpilot',
      'Impermeable to automated removal algorithms',
      'Greatly improves conversion rate for e-commerce stores'
    ],
    seoKeywords: ['Buy Trustpilot Verified Reviews', 'Verified Trustpilot badge', 'Order verified TrustScore'],
    warrantyPolicy: '30 days warranty with 1-time replacement policy.',
    deliveryTime: '4-12 hours'
  },
  {
    id: 'google-gps-reviews',
    slug: 'buy-google-gps-reviews',
    title: 'Buy Google GPS Reviews',
    category: 'reviews',
    platform: 'Google GPS / Geolocation',
    iconKey: 'google-gps',
    startingPrice: 25,
    priceUnit: 'per Review',
    shortDesc: 'GPS-spoofed location-verified physical visit Google reviews for local brick & mortar businesses.',
    fullDesc: 'Our physical GPS review service simulates real hardware geolocation coordinate check-ins before posting the review, resulting in 100% sticky physical venue ratings.',
    tiers: [
      { id: 'gps-standard', name: 'GPS Geolocation Google Review', price: 25, unit: 'per Review', warranty: '30 Days Warranty', popular: true, description: 'Real coordinates hardware checked review' }
    ],
    features: [
      'Hardware GPS coordinate verification check-in',
      'Best for restaurants, clinics, mechanics, hotels',
      'Ultra-low drop rate'
    ],
    seoKeywords: ['Buy Google GPS Reviews', 'GPS verified Google reviews', 'Location verified GMB reviews'],
    deliveryTime: '6-24 hours'
  },
  {
    id: 'google-lsa-reviews',
    slug: 'buy-google-lsa-reviews',
    title: 'Buy Google LSA Reviews',
    category: 'reviews',
    platform: 'Google Local Services Ads',
    iconKey: 'google-lsa',
    startingPrice: 20,
    priceUnit: 'per Review',
    shortDesc: 'Google Screened & Guaranteed Local Services Ads reviews for licensed contractors & pros.',
    fullDesc: 'Grow your Google Guaranteed / Screened badge rank with verified LSA client feedback. Perfect for plumbers, lawyers, electricians, and real estate professionals.',
    tiers: [
      { id: 'lsa-standard', name: 'Google LSA Review', price: 20, unit: 'per Review', warranty: '30 Days Warranty', popular: true, description: 'Google Local Services Ads compliant review' }
    ],
    features: ['Google Guaranteed profile compatible', 'Increases ad placement quality score', 'Customizable service type feedback'],
    seoKeywords: ['Buy Google LSA Reviews', 'Google Screened reviews', 'Local Services Ads 5 star reviews'],
    deliveryTime: '12-24 hours'
  },
  {
    id: 'google-negative-reviews-removal',
    slug: 'google-negative-reviews-removal-services',
    title: 'Google Negative Reviews Removal Services',
    category: 'reviews',
    platform: 'Google Policy Legal Dispute',
    iconKey: 'shield-remove',
    isHot: true,
    startingPrice: 50,
    priceUnit: 'per Review',
    shortDesc: 'Permanent legal & algorithmic deletion of damaging, fake, or competitor negative 1-star Google reviews.',
    fullDesc: 'Our legal and policy compliance specialists leverage Google Terms of Service violations (conflict of interest, harassment, fake engagement, spam) to permanently remove toxic 1-star reviews from your profile.',
    tiers: [
      { id: 'gnr-1-2mo', name: '1-2 Months+ Older Reviews Removal', price: 50, unit: 'per Review', popular: true, description: 'Takedown for reviews posted 1 to 2 months ago or older' },
      { id: 'gnr-3mo', name: '3 Months+ Older Reviews Removal', price: 50, unit: 'per Review', description: 'Takedown for reviews posted 3 months or longer ago' }
    ],
    features: [
      '100% Permanent removal from public view',
      'No risk to your Google Business Profile',
      'Legal & Policy breach dispute filing',
      'Pay only when success is confirmed'
    ],
    seoKeywords: ['Google Negative Reviews Removal', 'Remove 1 star Google review', 'Delete bad Google review', 'Clean GMB reputation'],
    warrantyPolicy: 'Permanent removal guaranteed. If not removed, 100% full refund.',
    deliveryTime: '3-7 business days per review'
  },
  {
    id: 'yelp-reviews',
    slug: 'buy-yelp-reviews',
    title: 'Buy Yelp Reviews',
    category: 'reviews',
    platform: 'Yelp',
    iconKey: 'yelp',
    isHot: true,
    startingPrice: 75,
    priceUnit: 'per Review',
    shortDesc: 'Unfiltered sticky Yelp 5-star reviews from active US city profiles that bypass the Yelp filter.',
    fullDesc: 'Yelp has the strictest recommendation filter in the world. Our Yelp reviews come from active accounts with friends, check-ins, tips, and regular consumer history to ensure they stay in the Recommended section.',
    tiers: [
      { id: 'yelp-standard', name: 'Aged Active Yelp Review', price: 75, unit: 'per Review', warranty: '30 Days Warranty', popular: true, description: 'Active city consumer account with past reviews' }
    ],
    features: ['Bypasses Yelp recommendation filter', 'Active profiles with profile pictures & friends', 'City targeted US/CA/UK accounts'],
    seoKeywords: ['Buy Yelp Reviews', 'Sticky Yelp reviews', 'Pass Yelp filter', 'Yelp 5 star ratings'],
    deliveryTime: '24-48 hours'
  },
  {
    id: 'elite-yelp-reviews',
    slug: 'buy-elite-yelp-reviews',
    title: 'Buy Elite Yelp Reviews',
    category: 'reviews',
    platform: 'Yelp Elite Squad',
    iconKey: 'yelp-elite',
    isHot: true,
    startingPrice: 275,
    priceUnit: 'per Review',
    shortDesc: 'Official Yelp Elite Squad badge reviews with unmatched consumer authority and immunity to filters.',
    fullDesc: 'The ultimate weapon in local reputation. Yelp Elite members are hand-picked by Yelp community managers. Their reviews NEVER get filtered and immediately anchor your Yelp rating at the very top.',
    tiers: [
      { id: 'yelp-elite-standard', name: 'Yelp Elite Squad Review', price: 275, unit: 'per Review', warranty: '60 Days Warranty', popular: true, description: 'VIP Yelp Elite badge verified member post' }
    ],
    features: [
      'Official Yelp Elite Squad badge visible',
      'Never gets filtered by Yelp algorithm',
      'Highest weight on overall Yelp star rating',
      'Includes high-resolution photos and detailed narrative'
    ],
    seoKeywords: ['Buy Elite Yelp Reviews', 'Yelp Elite Squad badge review', 'VIP Yelp rating'],
    deliveryTime: '24-72 hours'
  },
  {
    id: 'facebook-reviews',
    slug: 'buy-facebook-reviews',
    title: 'Buy Facebook Reviews',
    category: 'reviews',
    platform: 'Facebook Page Recommendations',
    iconKey: 'facebook',
    startingPrice: 5,
    priceUnit: 'per Review',
    shortDesc: 'Affordable 5-star Facebook Page recommendations from aged social profiles.',
    fullDesc: 'Upgrade your Facebook Business Page recommendation score. Profiles are real-looking with photos, friends, and active timelines.',
    tiers: [
      { id: 'fb-standard', name: 'Facebook 5-Star Recommendation', price: 5, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Aged Facebook accounts with active feeds', 'Custom positive recommendation text', 'Improves Facebook Page SEO rank'],
    seoKeywords: ['Buy Facebook Reviews', 'Buy Facebook recommendations', 'Facebook 5 star reviews'],
    deliveryTime: '1-3 hours'
  },
  {
    id: 'glassdoor-reviews',
    slug: 'buy-glassdoor-reviews',
    title: 'Buy Glassdoor Reviews',
    category: 'reviews',
    platform: 'Glassdoor',
    iconKey: 'glassdoor',
    startingPrice: 20,
    priceUnit: 'per Review',
    shortDesc: 'Positive employee rating reviews for tech companies, startups, and enterprises.',
    fullDesc: 'Attract top talent and showcase stellar workplace culture with 5-star employee reviews on Glassdoor.',
    tiers: [
      { id: 'gd-standard', name: 'Glassdoor Employee Review', price: 20, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Custom job title & department tags', 'Detailed Pros & Cons balancing', 'CEO approval rating booster'],
    seoKeywords: ['Buy Glassdoor Reviews', 'Glassdoor employee ratings', 'Glassdoor employer branding'],
    deliveryTime: '6-12 hours'
  },
  {
    id: 'zillow-reviews',
    slug: 'buy-zillow-reviews',
    title: 'Buy Zillow Reviews',
    category: 'reviews',
    platform: 'Zillow Premier Agent',
    iconKey: 'zillow',
    startingPrice: 15,
    priceUnit: 'per Review',
    shortDesc: '5-Star buyer and seller agent reviews for Zillow Premier Agents and realtors.',
    fullDesc: 'Close more high-ticket listings by showing prospective home buyers and sellers a flawless track record on Zillow.',
    tiers: [
      { id: 'zillow-standard', name: 'Zillow Agent Review', price: 15, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Buyer & Seller transaction tags', 'US homeowner realistic profiles', 'Premier agent compatibility'],
    seoKeywords: ['Buy Zillow Reviews', 'Zillow Premier Agent reviews', 'Real estate agent 5 star reviews'],
    deliveryTime: '6-24 hours'
  },
  {
    id: 'thumbtack-reviews',
    slug: 'buy-thumbtack-reviews',
    title: 'Buy Thumbtack Reviews',
    category: 'reviews',
    platform: 'Thumbtack Pro',
    iconKey: 'thumbtack',
    startingPrice: 15,
    priceUnit: 'per Review',
    shortDesc: 'Top Pro badge compatible reviews for service contractors and freelancers on Thumbtack.',
    fullDesc: 'Climb to the top of Thumbtack local search results and achieve "Top Pro" status with high-converting 5-star customer feedback.',
    tiers: [
      { id: 'tt-standard', name: 'Thumbtack Customer Review', price: 15, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Top Pro status accelerator', 'Custom project pricing feedback', 'Aged client profiles'],
    seoKeywords: ['Buy Thumbtack Reviews', 'Thumbtack Top Pro reviews', 'Contractor Thumbtack ratings'],
    deliveryTime: '6-18 hours'
  },
  {
    id: 'houzz-reviews',
    slug: 'buy-houzz-reviews',
    title: 'Buy Houzz Reviews',
    category: 'reviews',
    platform: 'Houzz Home Design',
    iconKey: 'houzz',
    startingPrice: 15,
    priceUnit: 'per Review',
    shortDesc: 'Architect, interior designer, and contractor 5-star reviews on Houzz.',
    fullDesc: 'Win high-budget interior design and remodeling projects with authoritative ratings on Houzz.',
    tiers: [
      { id: 'houzz-standard', name: 'Houzz 5-Star Review', price: 15, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Best of Houzz award booster', 'Custom project photo attachment capability', 'High-income homeowner profiles'],
    seoKeywords: ['Buy Houzz Reviews', 'Best of Houzz ratings', 'Interior design reviews'],
    deliveryTime: '6-18 hours'
  },
  {
    id: 'bbb-reviews',
    slug: 'buy-bbb-reviews',
    title: 'Buy BBB Reviews',
    category: 'reviews',
    platform: 'Better Business Bureau',
    iconKey: 'bbb',
    startingPrice: 12,
    priceUnit: 'per Review',
    shortDesc: 'Better Business Bureau accredited style customer satisfaction reviews.',
    fullDesc: 'Neutralize BBB complaints and raise your overall BBB consumer rating with verified customer testimonials.',
    tiers: [
      { id: 'bbb-standard', name: 'BBB Customer Review', price: 12, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['A+ Accreditation support', 'US verified consumer identities', 'Permanent retention'],
    seoKeywords: ['Buy BBB Reviews', 'Better Business Bureau ratings', 'BBB 5 star feedback'],
    deliveryTime: '12-24 hours'
  },
  {
    id: 'google-play-store-reviews',
    slug: 'buy-google-play-store-reviews',
    title: 'Buy Google Play Store Reviews',
    category: 'reviews',
    platform: 'Google Play Store',
    iconKey: 'playstore',
    startingPrice: 12,
    priceUnit: 'per Review',
    shortDesc: 'Real Android device app install + 5-star rating with custom feedback.',
    fullDesc: 'Boost your Android app search ranking (ASO) with genuine device installations and positive reviews.',
    tiers: [
      { id: 'play-standard', name: 'Play Store Install + Review', price: 12, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Includes real app install & open time', 'ASO keyword optimization', 'Country targeted downloads'],
    seoKeywords: ['Buy Google Play Store Reviews', 'Android app ASO reviews', 'Play store 5 star rating'],
    deliveryTime: '2-8 hours'
  },
  {
    id: 'homeadvisor-reviews',
    slug: 'buy-homeadvisor-reviews',
    title: 'Buy HomeAdvisor Reviews',
    category: 'reviews',
    platform: 'HomeAdvisor / Angi',
    iconKey: 'homeadvisor',
    startingPrice: 12,
    priceUnit: 'per Review',
    shortDesc: 'Angi / HomeAdvisor verified lead ratings for home service businesses.',
    fullDesc: 'Increase job close rates on HomeAdvisor leads with trusted homeowner reviews.',
    tiers: [
      { id: 'ha-standard', name: 'HomeAdvisor Review', price: 12, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Angi lead conversion booster', 'Verified project categories', 'High retention'],
    seoKeywords: ['Buy HomeAdvisor Reviews', 'Angi reviews', 'Home service contractor ratings'],
    deliveryTime: '6-18 hours'
  },
  {
    id: 'booking-reviews',
    slug: 'buy-booking-reviews',
    title: 'Buy Booking Reviews',
    category: 'reviews',
    platform: 'Booking.com',
    iconKey: 'booking',
    startingPrice: 25,
    priceUnit: 'per Review',
    shortDesc: '9.0+ Superb score Booking.com guest review reservations for hotels and apartments.',
    fullDesc: 'Skyrocket your accommodation booking conversion rate with high-score guest testimonials.',
    tiers: [
      { id: 'booking-standard', name: 'Booking.com 9.5+ Score Review', price: 25, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Verified reservation simulation', 'Multi-language international guest accounts', 'Boosts search ranking on Booking.com'],
    seoKeywords: ['Buy Booking Reviews', 'Booking.com hotel ratings', '9.5 score guest reviews'],
    deliveryTime: '24-48 hours'
  },
  {
    id: 'website-product-reviews',
    slug: 'buy-website-product-reviews',
    title: 'Buy Website Product Reviews',
    category: 'reviews',
    platform: 'Shopify / WooCommerce / Custom Web',
    iconKey: 'cart-check',
    startingPrice: 5,
    priceUnit: 'per Review',
    shortDesc: 'Custom product reviews for your Shopify, WooCommerce, or direct e-commerce website.',
    fullDesc: 'Fill your new online store with glowing, high-converting product reviews, star ratings, and buyer testimonials.',
    tiers: [
      { id: 'wpr-standard', name: 'Product Store Review', price: 5, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Direct web submission / CSV bulk export', 'Includes customer names & photo reviews', 'Boosts Shopify add-to-cart rate'],
    seoKeywords: ['Buy Website Product Reviews', 'Shopify reviews', 'WooCommerce product reviews'],
    deliveryTime: '1-4 hours'
  },
  {
    id: 'home-star-reviews',
    slug: 'buy-home-star-reviews',
    title: 'Buy Home Star Reviews',
    category: 'reviews',
    platform: 'HomeStars',
    iconKey: 'homestar',
    startingPrice: 15,
    priceUnit: 'per Review',
    shortDesc: 'Top-rated Canadian home renovation contractor ratings on HomeStars.',
    fullDesc: 'Dominate Canadian local renovation markets with 10/10 HomeStars contractor reviews.',
    tiers: [
      { id: 'hs-standard', name: 'HomeStars 10/10 Review', price: 15, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Canadian geo-targeted IP', 'StarScore calculation booster', 'Custom trade categories'],
    seoKeywords: ['Buy Home Star Reviews', 'HomeStars contractor rating Canada'],
    deliveryTime: '6-18 hours'
  },
  {
    id: 'chrome-extension-reviews',
    slug: 'buy-chrome-extension-reviews',
    title: 'Buy Chrome Extension Reviews',
    category: 'reviews',
    platform: 'Chrome Web Store',
    iconKey: 'chrome',
    startingPrice: 12,
    priceUnit: 'per Review',
    shortDesc: '5-Star Chrome Web Store installation ratings to improve organic search visibility.',
    fullDesc: 'Get your browser extension trending in Chrome Web Store categories with active user reviews.',
    tiers: [
      { id: 'cwe-standard', name: 'Chrome Web Store Review', price: 12, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Real extension download & install', 'Keyword rich user commentary', 'Permanent sticky ratings'],
    seoKeywords: ['Buy Chrome Extension Reviews', 'Chrome Web Store ranking', 'Extension 5 star rating'],
    deliveryTime: '2-6 hours'
  },
  {
    id: 'weddingwire-reviews',
    slug: 'buy-weddingwire-reviews',
    title: 'Buy WeddingWire Reviews',
    category: 'reviews',
    platform: 'WeddingWire / The Knot',
    iconKey: 'weddingwire',
    startingPrice: 12,
    priceUnit: 'per Review',
    shortDesc: 'Couples Choice Award compatible ratings for wedding venues, photographers, and DJs.',
    fullDesc: 'Attract high-budget brides and grooms with glowing testimonials on WeddingWire.',
    tiers: [
      { id: 'ww-standard', name: 'WeddingWire Review', price: 12, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Couples Choice Award qualifying ratings', 'Custom wedding date & venue details', 'Aged bride/groom accounts'],
    seoKeywords: ['Buy WeddingWire Reviews', 'Wedding photographer reviews', 'Couples Choice Award'],
    deliveryTime: '6-18 hours'
  },
  {
    id: 'reviews-io-reviews',
    slug: 'buy-reviews-io-reviews',
    title: 'Buy Reviews.io Reviews',
    category: 'reviews',
    platform: 'Reviews.io',
    iconKey: 'reviewsio',
    startingPrice: 10,
    priceUnit: 'per Review',
    shortDesc: 'Google Licensed partner verified seller ratings on Reviews.io.',
    fullDesc: 'Generate Google Seller Ratings gold stars in Google Ads with verified Reviews.io ratings.',
    tiers: [
      { id: 'rio-standard', name: 'Reviews.io Verified Rating', price: 10, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Google Seller Rating stars integration', 'Verified order email invitation flow', 'High retention'],
    seoKeywords: ['Buy Reviews.io Reviews', 'Google Seller Ratings', 'Reviews.io verified'],
    deliveryTime: '4-12 hours'
  },
  {
    id: 'hotels-reviews',
    slug: 'buy-hotels-reviews',
    title: 'Buy Hotels Reviews',
    category: 'reviews',
    platform: 'TripAdvisor & Hotels.com',
    iconKey: 'hotel',
    startingPrice: 25,
    priceUnit: 'per Review',
    shortDesc: 'Top-tier luxury hotel and resort guest ratings on Hotels.com & TripAdvisor.',
    fullDesc: 'Ensure your hospitality business stays at the top of travel search engines.',
    tiers: [
      { id: 'hr-standard', name: 'Hotels.com / TripAdvisor Review', price: 25, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['High Traveler Ranking impact', 'Custom room type & amenity praise', 'Aged travel enthusiast accounts'],
    seoKeywords: ['Buy Hotels Reviews', 'TripAdvisor hotel ratings', 'Hotels.com guest reviews'],
    deliveryTime: '12-24 hours'
  },
  {
    id: 'quickbooks-reviews',
    slug: 'buy-quickbooks-reviews',
    title: 'Buy QuickBooks Review',
    category: 'reviews',
    platform: 'Intuit QuickBooks App Store',
    iconKey: 'quickbooks',
    startingPrice: 12,
    priceUnit: 'per Review',
    shortDesc: '5-Star reviews for QuickBooks ProAdvisors and Intuit App Store developers.',
    fullDesc: 'Demonstrate fiscal expertise and software reliability on the Intuit App Store.',
    tiers: [
      { id: 'qb-standard', name: 'QuickBooks 5-Star Review', price: 12, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Intuit App store rank boost', 'Business accountant profile simulations', 'Permanent sticky feedback'],
    seoKeywords: ['Buy QuickBooks Review', 'Intuit App Store ratings', 'QuickBooks ProAdvisor reviews'],
    deliveryTime: '6-18 hours'
  },
  {
    id: 'imdb-reviews',
    slug: 'buy-imdb-reviews',
    title: 'Buy IMDb Reviews',
    category: 'reviews',
    platform: 'IMDb / Amazon',
    iconKey: 'imdb',
    startingPrice: 7,
    priceUnit: 'per Review',
    shortDesc: '10/10 star ratings and critic reviews for indie films, series, actors, and directors.',
    fullDesc: 'Increase your film or series IMDb score above 8.0 to attract streaming distributors and festival attention.',
    tiers: [
      { id: 'imdb-standard', name: 'IMDb 10-Star Rating & Review', price: 7, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Boosts weighted IMDb title score', 'Custom spoiler-free praise', 'Aged IMDb movie lover accounts'],
    seoKeywords: ['Buy IMDb Reviews', 'IMDb movie ratings', 'Indie film IMDb score boost'],
    deliveryTime: '2-6 hours'
  },
  {
    id: 'real-estate-agents-reviews',
    slug: 'buy-realestateagents-reviews',
    title: 'Buy RealEstateAgents Reviews',
    category: 'reviews',
    platform: 'RealEstateAgents.com / Realtor.com',
    iconKey: 'realestate',
    startingPrice: 15,
    priceUnit: 'per Review',
    shortDesc: 'Verified home buyer and seller reviews on RealEstateAgents.com & Realtor.com.',
    fullDesc: 'Showcase your real estate deal volume and client satisfaction with verified agent reviews.',
    tiers: [
      { id: 'rea-standard', name: 'RealEstateAgents.com Review', price: 15, unit: 'per Review', warranty: '30 Days Warranty', popular: true }
    ],
    features: ['Realtor.com directory compatibility', 'High-end homebuyer narrative', 'Permanent retention'],
    seoKeywords: ['Buy RealEstateAgents Reviews', 'Realtor.com agent reviews', 'Real estate broker testimonials'],
    deliveryTime: '6-24 hours'
  },

  // ==========================================
  // 2. BANK ACCOUNTS
  // ==========================================
  {
    id: 'verified-paypal-account',
    slug: 'buy-verified-paypal-account',
    title: 'Buy Verified PayPal Account',
    category: 'bank_accounts',
    platform: 'PayPal',
    iconKey: 'paypal',
    isHot: true,
    isPopular: true,
    startingPrice: 80,
    priceUnit: 'Per Account',
    shortDesc: 'Fully verified PayPal accounts with bank linked, phone verified, and SSN/ID KYC completed.',
    fullDesc: 'Ready-to-transact verified PayPal accounts. Complete with linked virtual bank account, verified phone number, email access, and full KYC document pack for complete ownership.',
    tiers: [
      { id: 'pp-personal', name: 'Verified Personal PayPal Account', price: 80, unit: 'Per Account', description: 'Includes bank linked, email access, full KYC documents', popular: true },
      { id: 'pp-business', name: 'Verified Business PayPal Account', price: 130, unit: 'Per Account', description: 'Includes EIN/Company docs, merchant processing ready, higher limits' }
    ],
    features: [
      'Full KYC Documents Included (ID / Utility / SSN)',
      'Linked Virtual US Bank & VCC',
      'Phone Number (VOIP/SIM access included)',
      'Primary Email Login & Security Answers',
      'No initial limits on sending or receiving'
    ],
    seoKeywords: ['Buy Verified PayPal Account', 'PayPal Business account', 'Verified US PayPal', 'PayPal with bank linked'],
    deliveryTime: 'Instant to 2 hours delivery'
  },
  {
    id: 'restore-paypal-accounts',
    slug: 'buy-restore-paypal-accounts',
    title: 'Buy Restore PayPal Accounts (Verified & Aged)',
    category: 'bank_accounts',
    platform: 'PayPal Restored',
    iconKey: 'paypal-restore',
    isHot: true,
    startingPrice: 120,
    priceUnit: 'Per Account',
    shortDesc: 'Aged PayPal accounts with past 180-day limitation cleared, transaction history & pristine standing.',
    fullDesc: 'These accounts have previously cleared PayPal compliance audits (Restored status), giving them the highest algorithmic trust score and zero hold times on incoming funds.',
    tiers: [
      { id: 'ppr-personal', name: 'Restore Personal PayPal Account', price: 120, unit: 'Per Account', description: 'Verified & Aged Restored Personal account', popular: true },
      { id: 'ppr-business', name: 'Restore Business PayPal Account', price: 180, unit: 'Per Account', description: 'Verified & Aged Restored Business account with clean records' }
    ],
    features: [
      'Audited & 100% Restored Status (High Trust Score)',
      'Aged 1 to 3+ Years with transaction history',
      'Zero 21-day holds on incoming payments',
      'Full KYC document archive + Cookie profile'
    ],
    seoKeywords: ['Buy Restore PayPal Accounts', 'Aged PayPal account', 'Restored PayPal business', 'No hold PayPal account'],
    deliveryTime: '1-3 hours delivery'
  },
  {
    id: 'verified-cash-app-accounts',
    slug: 'buy-verified-cash-app-accounts',
    title: 'Buy Verified Cash App Accounts',
    category: 'bank_accounts',
    platform: 'Cash App (Block)',
    iconKey: 'cashapp',
    isHot: true,
    isPopular: true,
    startingPrice: 130,
    priceUnit: 'Per Account',
    shortDesc: 'SSN-verified US Cash App accounts with active Cash Card and optional BTC withdrawal enabled.',
    fullDesc: 'Get a fully functioning Cash App account with routing & account number, physical/virtual Cash Card credentials, and Bitcoin purchase & withdrawal verification.',
    tiers: [
      { id: 'ca-4k-norm', name: '4k Limit Normal Account', price: 130, unit: 'Per Account', description: '$4,000 weekly sending limit, fully verified' },
      { id: 'ca-4k-btc', name: '4k Limit BTC Enable Account', price: 160, unit: 'Per Account', popular: true, description: '$4,000 limit + Bitcoin withdrawal and deposit activated' },
      { id: 'ca-20k-norm', name: '20k Limit Normal Account', price: 180, unit: 'Per Account', description: '$20,000 high-tier weekly limit verified' },
      { id: 'ca-20k-btc', name: '20k Limit BTC Enable Account', price: 250, unit: 'Per Account', description: '$20,000 limit + high-volume Bitcoin deposit/withdrawal' }
    ],
    features: [
      'SSN & ID KYC verification complete',
      'Cash Card details & PIN included',
      'Direct deposit account & routing number active',
      'BTC purchase, receive, and on-chain withdrawal verified',
      'Full email and mobile access'
    ],
    seoKeywords: ['Buy Verified Cash App Accounts', 'Cash App BTC enabled', 'Cash App 20k limit', 'Cash App with card active'],
    deliveryTime: 'Instant to 2 hours'
  },
  {
    id: 'hacking-cash-app-accounts',
    slug: 'buy-hacking-cash-app-accounts',
    title: 'Buy Hacking Cash App Accounts',
    category: 'bank_accounts',
    platform: 'Cash App Pro',
    iconKey: 'cashapp-secure',
    startingPrice: 150,
    priceUnit: 'Per Account',
    shortDesc: 'Hardened anti-ban Cash App accounts with specialized device fingerprints & BTC withdrawal.',
    fullDesc: 'Specially configured Cash App accounts engineered with hardened session cookies and anti-flag security frameworks for heavy daily transactional volume.',
    tiers: [
      { id: 'hca-4k-norm', name: '4k Limit Normal Account', price: 150, unit: 'Per Account', description: 'Hardened anti-flag 4k limit account' },
      { id: 'hca-4k-btc', name: '4k Limit BTC Enable Account', price: 170, unit: 'Per Account', popular: true, description: 'Hardened 4k limit with BTC on-chain enabled' },
      { id: 'hca-20k-norm', name: '20k Limit Normal Account', price: 180, unit: 'Per Account', description: 'Hardened 20k high limit account' },
      { id: 'hca-20k-btc', name: '20k Limit BTC Enable Account', price: 280, unit: 'Per Account', description: 'Hardened 20k limit + unlimited BTC withdrawal tier' }
    ],
    features: [
      'Custom Anti-Ban session configuration',
      'Clean IP history & browser fingerprints included',
      'Pre-warmed with legitimate transaction history',
      'Full KYC archive + email access'
    ],
    seoKeywords: ['Buy Hacking Cash App Accounts', 'Hardened Cash App', 'Cash App BTC high limit'],
    deliveryTime: '1-3 hours'
  },
  {
    id: 'verified-chase-bank-accounts',
    slug: 'buy-verified-chase-bank-accounts',
    title: 'Buy Verified Chase Bank Accounts',
    category: 'bank_accounts',
    platform: 'Chase Bank (JPMorgan)',
    iconKey: 'chase',
    isHot: true,
    startingPrice: 400,
    priceUnit: 'Per Account',
    shortDesc: 'Real US JPMorgan Chase Total Checking accounts with online banking access & complete docs.',
    fullDesc: 'Top-tier US banking infrastructure. Includes active online banking credentials, linked debit card details, routing & account numbers, Zelle active, and full document package.',
    tiers: [
      { id: 'chase-docs', name: 'Verified Account with all documents', price: 400, unit: 'Per Account', popular: true, description: 'Freshly verified Chase Total Checking with all KYC docs & online login' },
      { id: 'chase-aged', name: 'Aged Verified with transaction history', price: 650, unit: 'Per Account', description: 'Aged 6+ months with active transaction records and seasoned credit standing' }
    ],
    features: [
      'Chase Online Banking User & Password',
      'Zelle instant transfer enabled',
      'Full KYC: SSN, US Driver License/Passport, Utility Bill',
      'Debit card numbers, CVV, expiry & PIN',
      'Direct deposit ready'
    ],
    seoKeywords: ['Buy Verified Chase Bank Accounts', 'Chase bank online access', 'Chase checking account with Zelle', 'Chase aged bank account'],
    deliveryTime: '2-6 hours'
  },
  {
    id: 'verified-relay-bank-accounts',
    slug: 'buy-verified-relay-bank-accounts',
    title: 'Buy Verified Relay Bank Accounts',
    category: 'bank_accounts',
    platform: 'Relay Financial',
    iconKey: 'relay',
    startingPrice: 420,
    priceUnit: 'Per Account',
    shortDesc: 'US Relay Financial business and personal banking accounts with multiple virtual debit cards.',
    fullDesc: 'Relay Financial is the preferred fintech banking platform for online businesses. Offers seamless ACH, domestic wire, multi-account sub-ledgers, and up to 50 virtual Visa debit cards.',
    tiers: [
      { id: 'relay-personal', name: 'Personal verified with all documents', price: 420, unit: 'Per Account', description: 'Full personal KYC, online dashboard, debit card issued' },
      { id: 'relay-biz', name: 'Business verified with all documents', price: 550, unit: 'Per Account', popular: true, description: 'Full US LLC/EIN business docs, multi-card creation enabled' }
    ],
    features: [
      'Relay online banking login & 2FA secret key',
      'Virtual Mastercard/Visa generation enabled',
      'Zero monthly fee account structure',
      'Complete LLC formation documents & EIN certificate (Business tier)'
    ],
    seoKeywords: ['Buy Verified Relay Bank Accounts', 'Relay Financial business account', 'US fintech bank account'],
    deliveryTime: '2-6 hours'
  },
  {
    id: 'verified-kraken-accounts',
    slug: 'buy-verified-kraken-accounts',
    title: 'Buy Verified Kraken Accounts',
    category: 'bank_accounts',
    platform: 'Kraken Exchange',
    iconKey: 'kraken',
    startingPrice: 180,
    priceUnit: 'Per Account',
    shortDesc: 'Intermediate/Pro verified Kraken crypto exchange accounts with unlimited crypto withdrawal.',
    fullDesc: 'Tier-3 Pro verified Kraken accounts ready for instant high-volume fiat deposit via wire/SEPA and unrestricted crypto trading & withdrawal.',
    tiers: [
      { id: 'kraken-new', name: 'New Verified Account', price: 180, unit: 'Per Account', description: 'Fresh Intermediate verified with full KYC documents' },
      { id: 'kraken-aged', name: 'Aged Verified Account', price: 220, unit: 'Per Account', popular: true, description: 'Aged 6+ months with trade history and zero compliance restrictions' }
    ],
    features: [
      'Pro tier daily $100k+ withdrawal limits',
      'EUR/USD SEPA, SWIFT, and FedWire enabled',
      'Full KYC Identity kit + 2FA codes',
      'Clean IP connection logs'
    ],
    seoKeywords: ['Buy Verified Kraken Accounts', 'Kraken Tier 3 verified', 'Kraken crypto exchange account'],
    deliveryTime: '1-3 hours'
  },
  {
    id: 'verified-redotpay-accounts',
    slug: 'buy-verified-redotpay-accounts',
    title: 'Buy Verified RedotPay Accounts',
    category: 'bank_accounts',
    platform: 'RedotPay Crypto Card',
    iconKey: 'redotpay',
    startingPrice: 150,
    priceUnit: 'Per Account',
    shortDesc: 'KYC-approved RedotPay account with active crypto-to-fiat Visa card for global spending.',
    fullDesc: 'Spend your crypto anywhere Visa is accepted worldwide. RedotPay account comes fully KYC verified with an active virtual Visa card connected to multi-asset crypto wallets (USDT, BTC, ETH, USDC).',
    tiers: [
      { id: 'redot-active', name: 'Redotpay account with card active', price: 150, unit: 'Per Account', popular: true, description: 'Includes verified identity, active virtual Visa card, and email credentials' }
    ],
    features: [
      'Active RedotPay Virtual Visa card (Apple Pay / Google Pay ready)',
      'Spend USDT, USDC, BTC, and ETH anywhere globally',
      'Full passport/ID KYC completed',
      'Complete email login and security setup'
    ],
    seoKeywords: ['Buy Verified RedotPay Accounts', 'RedotPay crypto card', 'Virtual crypto debit card account'],
    deliveryTime: '1-2 hours'
  },

  // ==========================================
  // 3. ACCOUNTS SERVICES
  // ==========================================
  {
    id: 'usa-gmail-accounts',
    slug: 'buy-usa-gmail-accounts',
    title: 'Buy USA Gmail Accounts',
    category: 'accounts',
    platform: 'Google / Gmail USA',
    iconKey: 'gmail',
    isHot: true,
    isPopular: true,
    startingPrice: 6,
    priceUnit: 'for 2 Accounts',
    shortDesc: 'Clean US residential IP created Gmail accounts with recovery email and phone verified.',
    fullDesc: 'Top-tier American IP Gmail accounts ideal for cold outreach, affiliate marketing, social media registrations, and Google Ads setups.',
    tiers: [
      { id: 'us-gm-2', name: '2 Gmail Accounts', price: 6, unit: 'Pack of 2', description: '$3.00 / per account' },
      { id: 'us-gm-5', name: '5 Gmail Accounts', price: 15, unit: 'Pack of 5', description: '$3.00 / per account' },
      { id: 'us-gm-20', name: '20 Gmail Accounts', price: 55, unit: 'Pack of 20', description: '$2.75 / per account', popular: true },
      { id: 'us-gm-50', name: '50 Gmail Accounts', price: 130, unit: 'Pack of 50', description: '$2.60 / per account' },
      { id: 'us-gm-100', name: '100 Gmail Accounts', price: 220, unit: 'Pack of 100', description: '$2.20 / per account' }
    ],
    features: [
      'Created with 100% US Residential Clean IP',
      'Active Recovery Email Included',
      'Never asked for phone verification on login',
      'Instant TXT/CSV delivery with Email:Pass:Recovery format'
    ],
    seoKeywords: ['Buy USA Gmail Accounts', 'Bulk US Gmail', 'PVA USA Google accounts', 'Aged USA Gmail'],
    deliveryTime: 'Instant to 30 mins'
  },
  {
    id: 'pva-gmail-accounts',
    slug: 'buy-pva-gmail-accounts',
    title: 'Buy PVA Gmail Accounts',
    category: 'accounts',
    platform: 'Google PVA',
    iconKey: 'gmail-pva',
    isHot: true,
    startingPrice: 6,
    priceUnit: 'for 2 Accounts',
    shortDesc: 'Phone Verified (PVA) Gmail accounts with active recovery credentials and zero-flag guarantees.',
    fullDesc: 'Phone Verified Accounts (PVA) created using real SIM cards. Suitable for automation tools, scrapers, and multi-login browsers like Dolphin Anty, AdsPower, and Multilogin.',
    tiers: [
      { id: 'pva-gm-2', name: '2 Gmail Accounts', price: 6, unit: 'Pack of 2' },
      { id: 'pva-gm-5', name: '5 Gmail Accounts', price: 15, unit: 'Pack of 5' },
      { id: 'pva-gm-20', name: '20 Gmail Accounts', price: 55, unit: 'Pack of 20', popular: true },
      { id: 'pva-gm-50', name: '50 Gmail Accounts', price: 130, unit: 'Pack of 50' },
      { id: 'pva-gm-100', name: '100 Gmail Accounts', price: 220, unit: 'Pack of 100' }
    ],
    features: ['Real SIM Phone Verified', '2FA backup codes generated', 'Clean browser fingerprint history', '48-hour login replacement warranty'],
    seoKeywords: ['Buy PVA Gmail Accounts', 'Phone verified Gmail', 'Bulk PVA Gmails'],
    deliveryTime: 'Instant to 30 mins'
  },
  {
    id: 'aged-mix-country-gmail-accounts',
    slug: 'buy-aged-mix-country-gmail-accounts',
    title: 'Buy Aged Mix Country Gmail Accounts',
    category: 'accounts',
    platform: 'Google Aged Global',
    iconKey: 'gmail-aged',
    isPopular: true,
    startingPrice: 5,
    priceUnit: 'for 2 Accounts',
    shortDesc: 'Aged 6 to 24+ months international Gmail accounts with seasoned activity history.',
    fullDesc: 'Seasoned aged Gmail accounts withstand stricter spam filters and CAPTCHA challenges compared to fresh accounts. Perfect for long-term marketing and business automation.',
    tiers: [
      { id: 'aged-gm-2', name: '2 Gmail Accounts', price: 5, unit: 'Pack of 2' },
      { id: 'aged-gm-5', name: '5 Gmail Accounts', price: 10, unit: 'Pack of 5' },
      { id: 'aged-gm-20', name: '20 Gmail Accounts', price: 40, unit: 'Pack of 20', popular: true },
      { id: 'aged-gm-50', name: '50 Gmail Accounts', price: 95, unit: 'Pack of 50' },
      { id: 'aged-gm-100', name: '100 Gmail Accounts', price: 180, unit: 'Pack of 100' }
    ],
    features: ['6-24 Months Old Aged Status', 'Higher inbox delivery rate for email campaigns', 'POP3/IMAP enabled', 'Bulk discount pricing'],
    seoKeywords: ['Buy Aged Mix Country Gmail Accounts', 'Aged Gmail accounts', 'Old Gmail PVA accounts'],
    deliveryTime: 'Instant to 30 mins'
  },
  {
    id: 'outlook-accounts',
    slug: 'buy-outlook-accounts',
    title: 'Buy Outlook Accounts',
    category: 'accounts',
    platform: 'Microsoft Outlook',
    iconKey: 'outlook',
    startingPrice: 80,
    priceUnit: 'for 100 Accounts',
    shortDesc: 'Bulk POP3/IMAP active Microsoft Outlook accounts for email marketing and bulk register.',
    fullDesc: 'High-volume Microsoft Outlook mailboxes configured with IMAP/SMTP protocols for email outreach tools like Instantly, Smartlead, and custom mailers.',
    tiers: [
      { id: 'out-new-100', name: 'New 100 Accounts', price: 80, unit: 'Pack of 100', description: 'Fresh high quality POP3/IMAP active Outlook accounts', popular: true },
      { id: 'out-aged-100', name: 'Aged 100 Accounts', price: 150, unit: 'Pack of 100', description: 'Aged 1+ Year seasoned Outlook mailboxes' }
    ],
    features: ['IMAP / POP3 / SMTP Active', 'Format: Email:Password:Recovery', 'No phone verification requested on login', 'High delivery reputation'],
    seoKeywords: ['Buy Outlook Accounts', 'Bulk Outlook mailboxes', 'Aged Outlook accounts', 'Outlook IMAP accounts'],
    deliveryTime: 'Instant to 1 hour'
  },
  {
    id: 'hotmail-accounts',
    slug: 'buy-hotmail-accounts',
    title: 'Buy Hotmail Accounts',
    category: 'accounts',
    platform: 'Microsoft Hotmail',
    iconKey: 'hotmail',
    startingPrice: 80,
    priceUnit: 'for 100 Accounts',
    shortDesc: 'Classic @hotmail.com domain accounts for nostalgia and vintage email delivery protocols.',
    fullDesc: 'Original Hotmail domain accounts offering high reputation scores with legacy spam filters across the web.',
    tiers: [
      { id: 'hot-new-100', name: 'New 100 Accounts', price: 80, unit: 'Pack of 100', popular: true },
      { id: 'hot-aged-100', name: 'Aged 100 Accounts', price: 150, unit: 'Pack of 100' }
    ],
    features: ['Rare @hotmail.com domain names', 'Full POP3/IMAP protocol support', 'Instant bulk credential delivery'],
    seoKeywords: ['Buy Hotmail Accounts', 'Hotmail bulk accounts', 'Aged Hotmail accounts'],
    deliveryTime: 'Instant to 1 hour'
  },
  {
    id: 'google-voice-accounts',
    slug: 'buy-google-voice-accounts',
    title: 'Buy Google Voice Accounts',
    category: 'accounts',
    platform: 'Google Voice',
    iconKey: 'gvoice',
    isHot: true,
    startingPrice: 10,
    priceUnit: 'Per Google Voice Number',
    shortDesc: 'Permanent real US phone number with incoming/outgoing SMS and voice call functionality.',
    fullDesc: 'Get a permanent US phone number hosted inside a dedicated Gmail account. Use it on web or mobile to receive OTP verification codes from banks, WhatsApp, Telegram, and social apps.',
    tiers: [
      { id: 'gv-single', name: 'Google Voice US Number Account', price: 10, unit: 'Per Google Voice Number', popular: true, description: 'Includes Gmail login + active US phone number' }
    ],
    features: [
      'Permanent US phone number (Area code selectable upon request)',
      'Free inbound SMS & calls within USA/Canada',
      'Receives OTP verification codes reliably',
      'Full Gmail credentials provided'
    ],
    seoKeywords: ['Buy Google Voice Accounts', 'Google Voice US number', 'Buy GV accounts', 'Google voice for OTP'],
    deliveryTime: 'Instant to 1 hour'
  },
  {
    id: 'textnow-accounts',
    slug: 'buy-textnow-accounts',
    title: 'Buy Textnow Accounts',
    category: 'accounts',
    platform: 'TextNow',
    iconKey: 'textnow',
    startingPrice: 7,
    priceUnit: 'Per Textnow Account',
    shortDesc: 'Active TextNow accounts with assigned US/Canadian phone number for SMS and calling.',
    fullDesc: 'Cheap and efficient virtual numbers ready for instant texting and verification tasks.',
    tiers: [
      { id: 'tn-single', name: 'TextNow Account with Number', price: 7, unit: 'Per Textnow Account', popular: true }
    ],
    features: ['Active US/CA phone number', 'Instant SMS send & receive', 'Login credentials with email backup'],
    seoKeywords: ['Buy Textnow Accounts', 'TextNow account with number', 'Textnow SMS verification'],
    deliveryTime: 'Instant to 30 mins'
  },
  {
    id: 'edu-mail-accounts',
    slug: 'buy-edu-mail-accounts',
    title: 'Buy Edu Mail Accounts',
    category: 'accounts',
    platform: '.EDU College Mail',
    iconKey: 'edumail',
    isHot: true,
    startingPrice: 10,
    priceUnit: 'for 1 EDU Mail',
    shortDesc: 'Official university .EDU email accounts to unlock 50%+ student discounts on Prime, GitHub, Spotify, Apple & Notion.',
    fullDesc: 'Save thousands of dollars on software subscriptions. Our real accredited US college .EDU accounts provide immediate student verification on UNiDAYS, Student Beans, Prime Student, GitHub Student Developer Pack, and JetBrains.',
    tiers: [
      { id: 'edu-1', name: '1 edu mail', price: 10, unit: '1 Account', description: 'Access to Prime Student, Spotify 50% off, Canva Pro' },
      { id: 'edu-2', name: '2 edu mail', price: 18, unit: '2 Accounts', popular: true, description: '$9.00 / per account' },
      { id: 'edu-3', name: '3 edu mail', price: 27, unit: '3 Accounts', description: '$9.00 / per account' }
    ],
    features: [
      'Unlocks GitHub Student Developer Pack ($200k+ in free tools)',
      'Amazon Prime Student 6 Months Free',
      'Spotify Premium + Hulu Student 50% discount',
      'Notion Plus / Canva Pro / JetBrains 100% Free'
    ],
    seoKeywords: ['Buy Edu Mail Accounts', 'Student .edu email discount', 'GitHub student pack .edu', 'Amazon Prime student edu'],
    deliveryTime: 'Instant to 1 hour'
  },
  {
    id: 'talkatone-accounts',
    slug: 'buy-talkatone-accounts',
    title: 'Buy Talkatone Accounts',
    category: 'accounts',
    platform: 'Talkatone',
    iconKey: 'talkatone',
    startingPrice: 7,
    priceUnit: 'Per Account',
    shortDesc: 'Talkatone virtual number accounts for high-speed SMS OTP verification and calling.',
    fullDesc: 'Reliable US burner phone number platform with immediate OTP code capture capability.',
    tiers: [
      { id: 'talk-single', name: 'Talkatone Account', price: 7, unit: 'Per Talkatone Account', description: 'Standard account with active number' },
      { id: 'talk-sub', name: '1 Month Premium Subscription Account', price: 25, unit: 'Per Account', popular: true, description: 'Ad-free premium status + number lock protection' }
    ],
    features: ['Active US phone number assigned', 'Burner verification ready', 'Email + Password login provided'],
    seoKeywords: ['Buy Talkatone Accounts', 'Talkatone premium account', 'Talkatone number for verification'],
    deliveryTime: 'Instant to 30 mins'
  },
  {
    id: 'textplus-accounts',
    slug: 'buy-textplus-accounts',
    title: 'Buy Textplus Accounts',
    category: 'accounts',
    platform: 'TextPlus',
    iconKey: 'textplus',
    startingPrice: 7,
    priceUnit: 'Per Account',
    shortDesc: 'TextPlus phone number accounts for messaging and quick verification services.',
    fullDesc: 'Turnkey TextPlus accounts pre-configured with active phone numbers.',
    tiers: [
      { id: 'tp-single', name: 'Textplus Account', price: 7, unit: 'Per Textplus Account' },
      { id: 'tp-sub', name: '1 Month Premium Subscription Account', price: 25, unit: 'Per Account', popular: true }
    ],
    features: ['Assigned US area code number', 'Supports incoming verification codes', 'Clean account status'],
    seoKeywords: ['Buy Textplus Accounts', 'Textplus virtual number', 'Textplus premium subscription'],
    deliveryTime: 'Instant to 30 mins'
  },
  {
    id: 'github-accounts',
    slug: 'buy-github-accounts-with-repository-history',
    title: 'Buy GitHub Accounts with Repository History',
    category: 'accounts',
    platform: 'GitHub',
    iconKey: 'github',
    isHot: true,
    isPopular: true,
    startingPrice: 35,
    priceUnit: 'Per Account',
    shortDesc: 'Aged 5-7+ year GitHub profiles with green contribution graphs, active repos, and specialized tool accounts.',
    fullDesc: 'Build instant developer authority or bypass new account restrictions on developer platforms, airdrops, and crypto bounty programs.',
    tiers: [
      { id: 'gh-5yr', name: '5 years or older with Repository History', price: 35, unit: 'Per Account', description: 'Aged 5+ years, historical commits and repos', popular: true },
      { id: 'gh-7yr', name: '7 years or older with Repository History', price: 50, unit: 'Per Account', description: 'Aged 7+ years, extensive commit history and stargazers' },
      { id: 'gh-legion', name: 'GitHub for LEGION', price: 55, unit: 'Per Account', description: 'Configured & verified for LEGION platform integration' },
      { id: 'gh-authena', name: 'GitHub for AUTHENA', price: 55, unit: 'Per Account', description: 'Configured & verified for AUTHENA token/security deployment' }
    ],
    features: [
      'Lush green contribution heatmaps',
      'Aged 5 to 7+ years old accounts',
      'Includes original registered email address',
      'Eligible for crypto developer airdrops & faucet claims'
    ],
    seoKeywords: ['Buy GitHub Accounts', 'Aged GitHub with repo history', 'GitHub 5 years old', 'GitHub for LEGION', 'GitHub for AUTHENA'],
    deliveryTime: 'Instant to 1 hour'
  },
  {
    id: 'facebook-accounts',
    slug: 'buy-facebook-accounts',
    title: 'Buy Facebook Accounts',
    category: 'accounts',
    platform: 'Meta / Facebook',
    iconKey: 'facebook',
    isHot: true,
    startingPrice: 10,
    priceUnit: 'Per Account',
    shortDesc: 'Fresh, Aged, 5k Friends, and USA Marketplace Enabled Facebook accounts with 2FA.',
    fullDesc: 'From casual dropshipping on FB Marketplace to high-budget Meta Ads management, our accounts come with 2FA cookies, aged history, and warm friend lists.',
    tiers: [
      { id: 'fb-new', name: 'New Facebook Accounts', price: 10, unit: 'Per Account', description: 'Fresh verified Facebook profile' },
      { id: 'fb-aged', name: 'Aged Facebook Account', price: 25, unit: 'Per Account', description: 'Aged 1-3 years with natural activity', popular: true },
      { id: 'fb-5k', name: 'Aged Facebook Account with 5000 Friends', price: 45, unit: 'Per Account', description: 'Maxed out 5,000 real friends for instant social proof' },
      { id: 'fb-market', name: 'USA Marketplace Enable Facebook Account', price: 50, unit: 'Per Account', description: 'Active Facebook Marketplace with US location & shipping active' }
    ],
    features: [
      '2FA secret code + JSON session cookies provided',
      'Marketplace enabled option available',
      'Realistic profile pictures and timeline activity',
      'Email login credentials included'
    ],
    seoKeywords: ['Buy Facebook Accounts', 'Aged Facebook accounts', 'Facebook Marketplace enabled account', '5000 friends Facebook account'],
    deliveryTime: 'Instant to 1 hour'
  },
  {
    id: 'instagram-accounts',
    slug: 'buy-instagram-accounts',
    title: 'Buy Instagram Accounts',
    category: 'accounts',
    platform: 'Instagram (Meta)',
    iconKey: 'instagram',
    startingPrice: 10,
    priceUnit: 'Per Account',
    shortDesc: 'Aged Instagram profiles with real followers, posts, and zero shadowbans.',
    fullDesc: 'Kickstart your brand or influencer presence on Instagram with aged accounts that avoid spam flags and algorithm suppression.',
    tiers: [
      { id: 'ig-new', name: 'New Accounts', price: 10, unit: 'Per Account' },
      { id: 'ig-aged', name: 'Aged Account', price: 25, unit: 'Per Account', description: 'Aged 1-2 years', popular: true },
      { id: 'ig-2k', name: 'Aged Account with 2k Followers', price: 40, unit: 'Per Account', description: 'Aged + 2,000 active followers and niche feed posts' }
    ],
    features: ['Original creation email provided (OGE)', '2FA security backup codes', 'No phone challenge on login'],
    seoKeywords: ['Buy Instagram Accounts', 'Aged Instagram account', 'Instagram 2k followers account'],
    deliveryTime: 'Instant to 1 hour'
  },
  {
    id: 'twitter-accounts',
    slug: 'buy-twitter-accounts',
    title: 'Buy Twitter (X) Accounts',
    category: 'accounts',
    platform: 'X / Twitter',
    iconKey: 'twitter',
    startingPrice: 10,
    priceUnit: 'Per Account',
    shortDesc: 'Aged Twitter / X profiles with established followers, token engagement, and crypto readiness.',
    fullDesc: 'Perfect for Web3 shill campaigns, crypto project launches, affiliate marketing, and automated bot networks.',
    tiers: [
      { id: 'tw-new', name: 'New Accounts', price: 10, unit: 'Per Account' },
      { id: 'tw-aged', name: 'Aged Account', price: 25, unit: 'Per Account', popular: true },
      { id: 'tw-2k', name: 'Aged Account with 2k Followers', price: 50, unit: 'Per Account', description: 'Aged + 2,000 real followers in crypto/tech niche' }
    ],
    features: ['Auth_token cookies provided for instant 1-click login', 'Aged 2018-2022 options', 'Phone & Email verified'],
    seoKeywords: ['Buy Twitter Accounts', 'Buy X accounts', 'Aged Twitter with followers', 'Twitter auth token account'],
    deliveryTime: 'Instant to 1 hour'
  },
  {
    id: 'linkedin-accounts',
    slug: 'buy-linkedin-accounts',
    title: 'Buy LinkedIn Accounts',
    category: 'accounts',
    platform: 'LinkedIn (Microsoft)',
    iconKey: 'linkedin',
    isHot: true,
    isPopular: true,
    startingPrice: 15,
    priceUnit: 'Per Account',
    shortDesc: 'High-connection aged LinkedIn accounts with full career history and NFC Passport verification.',
    fullDesc: 'Scale B2B cold sales outreach on Sales Navigator without hitting weekly connection limits or getting identity flagged.',
    tiers: [
      { id: 'li-new', name: 'New Account', price: 15, unit: 'Per Account' },
      { id: 'li-100', name: '100+ Connection Aged Account', price: 50, unit: 'Per Account' },
      { id: 'li-300', name: '300+ Connection Aged Account', price: 70, unit: 'Per Account', popular: true },
      { id: 'li-500', name: '500+ Connection Aged Account', price: 90, unit: 'Per Account', description: 'Prestigious "500+ Connections" badge profile' },
      { id: 'li-nfc', name: 'NFC Passport Verified Account', price: 130, unit: 'Per Account', description: 'Green Checkmark NFC Government Passport verified profile (unbannable)' }
    ],
    features: [
      'Real executive & professional work history details',
      '500+ Connections badge options',
      'NFC Passport official government checkmark tier',
      'Ready for Sales Navigator & automation tools (Expandi, Waalaxy)'
    ],
    seoKeywords: ['Buy LinkedIn Accounts', 'LinkedIn 500 connections', 'NFC Passport verified LinkedIn', 'Aged LinkedIn profile'],
    deliveryTime: '1-3 hours'
  },
  {
    id: 'yelp-accounts',
    slug: 'buy-yelp-accounts',
    title: 'Buy Yelp Accounts',
    category: 'accounts',
    platform: 'Yelp Consumer & Business',
    iconKey: 'yelp',
    startingPrice: 60,
    priceUnit: 'Per Account',
    shortDesc: 'Aged Yelp consumer and claimed business manager accounts for managing reputation.',
    fullDesc: 'Need to write organic Yelp reviews that stick, or claim and manage an existing Yelp business listing? Our aged accounts come fully vetted.',
    tiers: [
      { id: 'ya-aged', name: 'Aged Yelp Account', price: 60, unit: 'Per Account', popular: true, description: 'Aged consumer account with historical reviews & friends' },
      { id: 'ya-biz', name: 'Business Yelp Account', price: 99, unit: 'Per Account', description: 'Yelp for Business claimed manager account' }
    ],
    features: ['Aged profile history', 'City geo-targeted accounts', 'Includes email login and cookies'],
    seoKeywords: ['Buy Yelp Accounts', 'Aged Yelp consumer account', 'Yelp business account'],
    deliveryTime: '1-3 hours'
  },
  {
    id: 'trustpilot-accounts',
    slug: 'buy-trustpilot-accounts',
    title: 'Buy Trustpilot Accounts',
    category: 'accounts',
    platform: 'Trustpilot Consumer',
    iconKey: 'trustpilot',
    startingPrice: 35,
    priceUnit: 'Per Account',
    shortDesc: 'Aged and verified Trustpilot reviewer accounts with verified identity badges.',
    fullDesc: 'Post your own reviews and build reviewer authority with aged Trustpilot reviewer accounts.',
    tiers: [
      { id: 'tpa-aged', name: 'Aged Verified Trustpilot Account', price: 35, unit: 'Per Account', popular: true }
    ],
    features: ['Aged reviewer history', 'Verified email profile', 'Survives Trustpilot moderation easily'],
    seoKeywords: ['Buy Trustpilot Accounts', 'Aged Trustpilot account', 'Trustpilot reviewer account'],
    deliveryTime: '1-2 hours'
  },
  {
    id: 'whatsapp-account-numbers',
    slug: 'buy-whatsapp-account-numbers',
    title: 'Buy WhatsApp Account Numbers',
    category: 'accounts',
    platform: 'WhatsApp (Meta)',
    iconKey: 'whatsapp',
    isHot: true,
    startingPrice: 8,
    priceUnit: 'Per Number',
    shortDesc: 'USA & UK WhatsApp virtual number accounts and 1-Year Permanent numbers.',
    fullDesc: 'Get dedicated WhatsApp numbers for business support, marketing campaigns, or personal privacy. Setup via QR code or session file.',
    tiers: [
      { id: 'wa-usa', name: 'USA WhatsApp number account', price: 8, unit: 'Per Number', description: 'Clean +1 US phone number registration' },
      { id: 'wa-uk', name: 'UK WhatsApp number account', price: 10, unit: 'Per Number', description: 'Clean +44 UK phone number registration', popular: true },
      { id: 'wa-perm', name: '1 Year Permanent Number', price: 55, unit: '1 Year License', description: 'Permanent dedicated number with 12 months guaranteed renewal' }
    ],
    features: [
      'Instant SMS verification code delivery',
      'USA (+1) and UK (+44) options',
      '1 Year Permanent Number option guarantees zero takeover',
      'Compatible with WhatsApp Business and standard apps'
    ],
    seoKeywords: ['Buy WhatsApp Account Numbers', 'USA WhatsApp number', 'UK WhatsApp number', 'Permanent WhatsApp account'],
    deliveryTime: 'Instant to 30 mins'
  },
  {
    id: 'telegram-accounts',
    slug: 'buy-telegram-accounts',
    title: 'Buy Telegram Accounts',
    category: 'accounts',
    platform: 'Telegram',
    iconKey: 'telegram',
    isHot: true,
    startingPrice: 10,
    priceUnit: 'Per Account',
    shortDesc: 'New & Aged Telegram accounts in Tdata and Session+JSON formats for desktop and marketing bots.',
    fullDesc: 'High-retention Telegram accounts pre-configured for Telegram Desktop (Tdata) or automated marketing software (Session+JSON). No spam block / flood wait restrictions.',
    tiers: [
      { id: 'tg-new', name: 'New Telegram Accounts', price: 10, unit: 'Per Account', description: 'Fresh non-flagged Telegram account' },
      { id: 'tg-aged', name: 'Aged Telegram Account', price: 15, unit: 'Per Account', popular: true, description: 'Aged 6+ months with zero flood restrictions' }
    ],
    features: [
      'Delivered in Tdata / Session+JSON / Phone Login formats',
      'No SpamBot ban on startup',
      'Aged accounts survive mass messaging and channel additions',
      '2FA code provided'
    ],
    seoKeywords: ['Buy Telegram Accounts', 'Telegram Tdata accounts', 'Aged Telegram session', 'Telegram marketing accounts'],
    deliveryTime: 'Instant to 30 mins'
  }
];

export const CATEGORIES_META = [
  {
    id: 'all',
    name: 'All Products & Services',
    count: ALL_SERVICES.length,
    icon: 'grid',
    desc: 'Browse our entire verified digital inventory with instant delivery and 24/7 support.'
  },
  {
    id: 'reviews',
    name: '1. Reviews Services',
    count: ALL_SERVICES.filter(s => s.category === 'reviews').length,
    icon: 'star',
    desc: 'Google, Trustpilot, Yelp, Facebook, and niche 5-star review services with replacement warranties.'
  },
  {
    id: 'bank_accounts',
    name: '2. Bank Accounts',
    count: ALL_SERVICES.filter(s => s.category === 'bank_accounts').length,
    icon: 'building',
    desc: 'Verified PayPal, Cash App, Chase Bank, Relay Bank, Kraken, and RedotPay card accounts.'
  },
  {
    id: 'accounts',
    name: '3. Accounts Services',
    count: ALL_SERVICES.filter(s => s.category === 'accounts').length,
    icon: 'users',
    desc: 'USA & PVA Gmails, Outlook, Edu Mails, GitHub with repo history, LinkedIn, WhatsApp & Telegram.'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Marcus Vance',
    role: 'Digital Agency Director, NY',
    text: 'Ordered 50 Google reviews with 30-day warranty and 2 Verified PayPal Business accounts. Delivered flawlessly in 2 hours with all KYC docs. Customer support on Telegram @EgSupport24 is unmatched!',
    rating: 5,
    service: 'Google Reviews & PayPal Business',
    date: 'August 2026'
  },
  {
    name: 'Elena Rostova',
    role: 'E-commerce Brand Owner',
    text: 'Trustpilot Verified reviews pushed our TrustScore from 3.2 to 4.9. Also bought 100 Aged Gmails for our cold outreach campaigns. Outstanding stick rate.',
    rating: 5,
    service: 'Trustpilot Verified & Aged Gmails',
    date: 'August 2026'
  },
  {
    name: 'David K.',
    role: 'Software Developer & Crypto Trader',
    text: 'The 7-Year Aged GitHub account with full repo history and the Kraken Pro account were delivered instantly via Crypto payment. Highly recommend BlackAccWorld.',
    rating: 5,
    service: 'GitHub 7-Year & Kraken Pro',
    date: 'July 2026'
  }
];

export const GENERAL_FAQS = [
  {
    q: 'How do I test services before placing a large order?',
    a: 'As noted across our store: for testing all services, please contact our 24/7 team directly on Telegram (@EgSupport24) or WhatsApp (+1 307 393-9979). We will set up your trial instantly.'
  },
  {
    q: 'What is your review replacement warranty policy?',
    a: 'If any reviews drop during your purchased warranty period (7, 15, or 30 days), we will replace them once, subject to our one-time replacement policy free of charge.'
  },
  {
    q: 'Which cryptocurrencies do you accept?',
    a: 'We accept 12 major crypto coins: Bitcoin (BTC), Litecoin (LTC), Ethereum (ETH), USDT (TRC20, BEP20, ERC20), BNB, Solana (SOL), USDC (ERC20, BEP20), TRON (TRX), and Dogecoin (DOGE). All payments generate instant verification.'
  },
  {
    q: 'How fast is delivery?',
    a: 'Most digital accounts (Gmail, Outlook, Edu Mail, Telegram, WhatsApp, GitHub) are delivered instantly or within 30 minutes. Bank accounts take 1-3 hours. Reviews are drip-fed naturally across your requested timeframe.'
  }
];
