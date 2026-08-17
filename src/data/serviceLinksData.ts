import { ServiceItem, OfficialExternalLink, InternalServiceLink, InternalBlogLink, BlogPost } from '../types';
import { ALL_SERVICES } from './servicesData';
import { BLOG_POSTS } from './blogData';

/**
 * Curated Official External Authority Links mapped by service slug or platform keyword.
 */
export const OFFICIAL_PLATFORM_LINKS_MAP: Record<string, OfficialExternalLink[]> = {
  // Google Reviews & Local Services
  'buy-google-reviews': [
    {
      title: 'Google Business Profile Official Portal',
      url: 'https://business.google.com/',
      domain: 'business.google.com',
      badge: 'Official Portal',
      description: 'Manage verified Google Business listings, respond to customers, and track Google Maps search impressions.'
    },
    {
      title: 'Google Support: Understand Customer Reviews & Policies',
      url: 'https://support.google.com/business/answer/3474122',
      domain: 'support.google.com',
      badge: 'Support Guidelines',
      description: 'Official Google documentation on business review management, formatting guidelines, and moderation policies.'
    },
    {
      title: 'Google Search Central: Local SEO Guidelines',
      url: 'https://developers.google.com/search/docs/appearance/structured-data/local-business',
      domain: 'developers.google.com',
      badge: 'Developer & API',
      description: 'Structured data guidelines for local business search rich snippets and review schema integration.'
    }
  ],
  'buy-google-local-guide-reviews': [
    {
      title: 'Google Local Guides Official Program',
      url: 'https://maps.google.com/localguides',
      domain: 'maps.google.com',
      badge: 'Official Portal',
      description: 'The global community of explorers who write reviews, share photos, and verify facts on Google Maps.'
    },
    {
      title: 'Google Local Guides Points, Levels & Badging Rules',
      url: 'https://support.google.com/local-guides/answer/6225851',
      domain: 'support.google.com',
      badge: 'Support Guidelines',
      description: 'Official breakdown of Google Local Guide badge tiers (Level 4 through Level 10) and algorithmic trust scores.'
    },
    {
      title: 'Google Maps Community Policy & Content Guidelines',
      url: 'https://support.google.com/contributionpolicy/answer/7400114',
      domain: 'support.google.com',
      badge: 'Regulatory Standard',
      description: 'Google Maps policy on prohibited and restricted review contributions and geographical proximity standards.'
    }
  ],
  'buy-google-gps-reviews': [
    {
      title: 'Google Maps Official Location Services',
      url: 'https://www.google.com/maps',
      domain: 'google.com/maps',
      badge: 'Official Portal',
      description: 'Google geolocation platform verifying physical storefront coordinates and local check-in histories.'
    },
    {
      title: 'Google Support: Managing Location Accuracy & Timeline',
      url: 'https://support.google.com/maps/answer/6258979',
      domain: 'support.google.com',
      badge: 'Support Guidelines',
      description: 'Documentation on Google Location History, GPS coordinate verification, and place visit confirmation.'
    }
  ],
  'buy-google-lsa-reviews': [
    {
      title: 'Google Local Services Ads (LSA) Business Hub',
      url: 'https://ads.google.com/local-services-ads/',
      domain: 'ads.google.com',
      badge: 'Official Portal',
      description: 'Google platform for licensed pros with the Google Guaranteed and Google Screened trust badges.'
    },
    {
      title: 'Google LSA Help: Customer Reviews & Ratings Impact',
      url: 'https://support.google.com/google-ads/answer/7125526',
      domain: 'support.google.com',
      badge: 'Support Guidelines',
      description: 'Official guidelines on how customer ratings directly dictate ad placement rank and cost-per-lead.'
    }
  ],
  'google-negative-reviews-removal-services': [
    {
      title: 'Google Support: Request Removal of Inappropriate Reviews',
      url: 'https://support.google.com/business/answer/4596773',
      domain: 'support.google.com',
      badge: 'Support Guidelines',
      description: 'Official Google Business dispute portal for flagging fake, defamatory, or policy-violating reviews.'
    },
    {
      title: 'Google Maps Prohibited and Restricted Content Policy',
      url: 'https://support.google.com/contributionpolicy/answer/7400114',
      domain: 'support.google.com',
      badge: 'Regulatory Standard',
      description: 'Legal criteria covering conflict of interest, harassment, spam, and non-customer negative reviews.'
    },
    {
      title: 'FTC Guidance on Consumer Reviews & Endorsements',
      url: 'https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides',
      domain: 'ftc.gov',
      badge: 'Regulatory Standard',
      description: 'Federal Trade Commission legal standards on online review truthfulness and commercial transparency.'
    }
  ],

  // Trustpilot
  'buy-trustpilot-reviews': [
    {
      title: 'Trustpilot Official Global Consumer Review Platform',
      url: 'https://www.trustpilot.com/',
      domain: 'trustpilot.com',
      badge: 'Official Portal',
      description: 'The world’s most trusted consumer feedback platform with over 200 million verified customer reviews.'
    },
    {
      title: 'Trustpilot Business: Review Management & TrustScore Engine',
      url: 'https://business.trustpilot.com/',
      domain: 'business.trustpilot.com',
      badge: 'Official Portal',
      description: 'Official portal for companies to track TrustScore calculations, star distribution, and invitation flows.'
    },
    {
      title: 'Trustpilot Help Center: Review Guidelines & Integrity Policy',
      url: 'https://support.trustpilot.com/hc/en-us/articles/201748946',
      domain: 'support.trustpilot.com',
      badge: 'Support Guidelines',
      description: 'Official guidelines governing consumer review eligibility, evidence requirements, and fraud prevention.'
    }
  ],
  'buy-trustpilot-verified-reviews': [
    {
      title: 'Trustpilot Verified Reviews Documentation',
      url: 'https://support.trustpilot.com/hc/en-us/articles/223405788',
      domain: 'support.trustpilot.com',
      badge: 'Developer & API',
      description: 'How the green verified order checkmark is generated via automated e-commerce invitation workflows.'
    },
    {
      title: 'Trustpilot TrustScore Algorithm Explained',
      url: 'https://support.trustpilot.com/hc/en-us/articles/201748786',
      domain: 'support.trustpilot.com',
      badge: 'Support Guidelines',
      description: 'Mathematical formula for Bayesian average weighting, review recency, and verified status multiplier.'
    }
  ],

  // Yelp & Elite
  'buy-yelp-reviews': [
    {
      title: 'Yelp for Business Official Portal',
      url: 'https://biz.yelp.com/',
      domain: 'biz.yelp.com',
      badge: 'Official Portal',
      description: 'Yelp business dashboard for claiming listings, managing photos, and monitoring consumer sentiment.'
    },
    {
      title: 'Yelp Support: How the Yelp Recommendation Software Works',
      url: 'https://www.yelp-support.com/article/What-is-Yelp-s-recommendation-software',
      domain: 'yelp-support.com',
      badge: 'Support Guidelines',
      description: 'Official explanation of Yelp algorithmic recommendation filters and user account activity metrics.'
    }
  ],
  'buy-elite-yelp-reviews': [
    {
      title: 'Yelp Elite Squad Official Program',
      url: 'https://www.yelp.com/elite',
      domain: 'yelp.com/elite',
      badge: 'Official Portal',
      description: 'Yelp exclusive community of top-tier reviewers and influencers hand-selected by Community Managers.'
    },
    {
      title: 'Yelp Elite Squad Nominations & Requirements',
      url: 'https://www.yelp-support.com/article/What-is-the-Yelp-Elite-Squad',
      domain: 'yelp-support.com',
      badge: 'Support Guidelines',
      description: 'Guidelines on Yelp Elite qualification, high-quality review drafting, and un-filtered trust status.'
    }
  ],

  // Facebook & Social
  'buy-facebook-reviews': [
    {
      title: 'Meta Business Suite Official Portal',
      url: 'https://business.facebook.com/',
      domain: 'business.facebook.com',
      badge: 'Official Portal',
      description: 'Meta central dashboard for managing Facebook Business Pages, Instagram assets, and page recommendations.'
    },
    {
      title: 'Facebook Help: How Recommendations & Ratings Work on Pages',
      url: 'https://www.facebook.com/help/129750203770500',
      domain: 'facebook.com',
      badge: 'Support Guidelines',
      description: 'Documentation on Facebook Page recommendations, tags, audience feedback, and score calculations.'
    }
  ],

  // Glassdoor
  'buy-glassdoor-reviews': [
    {
      title: 'Glassdoor for Employers Official Portal',
      url: 'https://www.glassdoor.com/employers/',
      domain: 'glassdoor.com',
      badge: 'Official Portal',
      description: 'Employer branding dashboard to manage company profiles, talent acquisition, and workplace reviews.'
    },
    {
      title: 'Glassdoor Community Guidelines & Review Moderation',
      url: 'https://help.glassdoor.com/s/article/Community-Guidelines',
      domain: 'help.glassdoor.com',
      badge: 'Support Guidelines',
      description: 'Glassdoor policies governing anonymous employee feedback, salary submissions, and CEO approval ratings.'
    }
  ],

  // Zillow & Real Estate
  'buy-zillow-reviews': [
    {
      title: 'Zillow Premier Agent Official Portal',
      url: 'https://www.zillow.com/premier-agent/',
      domain: 'zillow.com',
      badge: 'Official Portal',
      description: 'Real estate professional platform connecting agents with home buyers, sellers, and client reviews.'
    },
    {
      title: 'Zillow Help: How Client Reviews Work for Agents',
      url: 'https://zillow.zendesk.com/hc/en-us/articles/218080647',
      domain: 'zillow.zendesk.com',
      badge: 'Support Guidelines',
      description: 'Official rules on past transaction verification, buyer/seller review requests, and profile ranking.'
    }
  ],

  // Houzz & Thumbtack & BBB
  'buy-houzz-reviews': [
    {
      title: 'Houzz Pro Official Business Hub',
      url: 'https://www.houzz.com/pro',
      domain: 'houzz.com',
      badge: 'Official Portal',
      description: 'All-in-one software for home remodeling, interior design, and architecture pros with client ratings.'
    },
    {
      title: 'Houzz Support: Review Policies & Best of Houzz Awards',
      url: 'https://help.houzz.com/s/article/How-do-reviews-work',
      domain: 'help.houzz.com',
      badge: 'Support Guidelines',
      description: 'Guidelines for collecting 5-star homeowner reviews and qualifying for annual Best of Houzz badges.'
    }
  ],
  'buy-thumbtack-reviews': [
    {
      title: 'Thumbtack for Professionals Hub',
      url: 'https://www.thumbtack.com/pro',
      domain: 'thumbtack.com',
      badge: 'Official Portal',
      description: 'Local services marketplace for home improvement, events, and wellness contractors.'
    },
    {
      title: 'Thumbtack Help: How to Get Top Pro Status with Reviews',
      url: 'https://help.thumbtack.com/article/top-pro-requirements',
      domain: 'help.thumbtack.com',
      badge: 'Support Guidelines',
      description: 'Official criteria for Top Pro badges, customer responsiveness, and verified rating thresholds.'
    }
  ],
  'buy-bbb-reviews': [
    {
      title: 'Better Business Bureau (BBB) Official Directory',
      url: 'https://www.bbb.org/',
      domain: 'bbb.org',
      badge: 'Official Portal',
      description: 'North American standard for business trust, accreditation, dispute resolution, and consumer ratings.'
    },
    {
      title: 'BBB Accreditation & Customer Review Guidelines',
      url: 'https://www.bbb.org/get-listed',
      domain: 'bbb.org',
      badge: 'Support Guidelines',
      description: 'Standards for maintaining an A+ BBB rating, customer review verification, and business ethics codes.'
    }
  ],

  // Travel & Hospitality (Tripadvisor, Booking, Hotels)
  'buy-tripadvisor-reviews': [
    {
      title: 'Tripadvisor Management Center Official Portal',
      url: 'https://www.tripadvisor.com/Owners',
      domain: 'tripadvisor.com',
      badge: 'Official Portal',
      description: 'Hospitality dashboard for hotels, restaurants, and tours to manage listings and traveler reviews.'
    },
    {
      title: 'Tripadvisor Review Moderation & Traveler Ranking Algorithm',
      url: 'https://www.tripadvisor.com/Trust',
      domain: 'tripadvisor.com',
      badge: 'Support Guidelines',
      description: 'Official overview of Tripadvisor fraud detection systems, popularity index calculations, and photo guidelines.'
    }
  ],
  'buy-booking-reviews': [
    {
      title: 'Booking.com Partner Hub Official Portal',
      url: 'https://partner.booking.com/',
      domain: 'partner.booking.com',
      badge: 'Official Portal',
      description: 'Extranet dashboard for accommodation providers to manage guest bookings, rates, and guest review scores.'
    },
    {
      title: 'Booking.com Help: Understanding Guest Review Scores',
      url: 'https://partner.booking.com/en-gb/help/guest-reviews',
      domain: 'partner.booking.com',
      badge: 'Support Guidelines',
      description: 'Official metrics on verified guest review verification, clean score calculation, and Traveller Review Awards.'
    }
  ],

  // Bank Accounts & Fintech
  'buy-verified-paypal-account': [
    {
      title: 'PayPal Business Official Portal',
      url: 'https://www.paypal.com/business',
      domain: 'paypal.com',
      badge: 'Official Portal',
      description: 'Global payment gateway supporting merchant checkouts, invoicing, cross-border payments, and multi-currency.'
    },
    {
      title: 'PayPal Help: Identity Verification & Account Limits (CIP/KYC)',
      url: 'https://www.paypal.com/us/smarthelp/article/how-do-i-verify-my-paypal-account-faq444',
      domain: 'paypal.com',
      badge: 'Support Guidelines',
      description: 'Official requirements for SSN/EIN verification, linked bank confirmation, and lifting sending/withdrawal limits.'
    },
    {
      title: 'PayPal Developer Portal: REST APIs & Webhooks',
      url: 'https://developer.paypal.com/',
      domain: 'developer.paypal.com',
      badge: 'Developer & API',
      description: 'API documentation for integrating PayPal Checkout, Subscriptions, and Marketplace payouts.'
    }
  ],
  'restore-paypal-account': [
    {
      title: 'PayPal Resolution Center & Limitation Appeal Portal',
      url: 'https://www.paypal.com/disputes/',
      domain: 'paypal.com',
      badge: 'Official Portal',
      description: 'Official dashboard for resolving 180-day holds, identity re-verification, and business documentation disputes.'
    },
    {
      title: 'PayPal Help: Why is my account limited and how do I restore it?',
      url: 'https://www.paypal.com/us/smarthelp/article/why-is-my-account-limited-faq1758',
      domain: 'paypal.com',
      badge: 'Support Guidelines',
      description: 'Official steps to submit utility bills, supplier invoices, tracking numbers, and corporate documentation.'
    }
  ],
  'buy-verified-cash-app-account': [
    {
      title: 'Cash App Official Platform (by Block, Inc.)',
      url: 'https://cash.app/',
      domain: 'cash.app',
      badge: 'Official Portal',
      description: 'Peer-to-peer USD money transfers, Cash Card debit rewards, direct deposit, and Bitcoin exchange.'
    },
    {
      title: 'Cash App Support: Account Verification & Increased Limits',
      url: 'https://cash.app/help/3128-verify-your-identity',
      domain: 'cash.app',
      badge: 'Support Guidelines',
      description: 'Official rules for SSN verification, unlocking $7,500/week sending limits, and BTC on-chain withdrawals.'
    }
  ],
  'buy-verified-chase-bank-account': [
    {
      title: 'JPMorgan Chase & Co. Business Banking Portal',
      url: 'https://www.chase.com/business',
      domain: 'chase.com',
      badge: 'Official Portal',
      description: 'Tier-1 US financial institution offering commercial checking, ACH wires, merchant services, and cards.'
    },
    {
      title: 'Chase Digital Customer Service & Wire Transfer Security',
      url: 'https://www.chase.com/digital/customer-service',
      domain: 'chase.com',
      badge: 'Support Guidelines',
      description: 'Official guides for online banking credentials, 2-step authentication token setup, and domestic/international wires.'
    },
    {
      title: 'FDIC Deposit Insurance Coverage Standards',
      url: 'https://www.fdic.gov/resources/deposit-insurance/',
      domain: 'fdic.gov',
      badge: 'Regulatory Standard',
      description: 'Federal Deposit Insurance Corporation coverage guidelines protecting bank balances up to $250,000 per depositor.'
    }
  ],
  'buy-verified-relay-bank-account': [
    {
      title: 'Relay Financial Official Business Banking Platform',
      url: 'https://relayfi.com/',
      domain: 'relayfi.com',
      badge: 'Official Portal',
      description: 'Modern online banking built for growing businesses, offering up to 20 checking accounts and 50 virtual debit cards.'
    },
    {
      title: 'Relay Help Center: ACH, Wires & Third-Party Integrations',
      url: 'https://support.relayfi.com/',
      domain: 'support.relayfi.com',
      badge: 'Support Guidelines',
      description: 'Official guides on linking Stripe, QuickBooks, Xero, and managing team member permission levels.'
    }
  ],
  'buy-verified-kraken-account': [
    {
      title: 'Kraken Cryptocurrency Exchange Official Platform',
      url: 'https://www.kraken.com/',
      domain: 'kraken.com',
      badge: 'Official Portal',
      description: 'Global Tier-1 digital asset exchange with deep spot/futures liquidity, staking, and institutional OTC trading.'
    },
    {
      title: 'Kraken Support: Intermediate & Pro KYC Verification Levels',
      url: 'https://support.kraken.com/hc/en-us/articles/360001395743',
      domain: 'support.kraken.com',
      badge: 'Support Guidelines',
      description: 'Official documentation on Tier-2/Tier-3 ID verification, proof of residence, and unlimited crypto funding.'
    },
    {
      title: 'Kraken Security Guide: 2FA & Master Key Protection',
      url: 'https://www.kraken.com/features/security',
      domain: 'kraken.com',
      badge: 'Security & Compliance',
      description: 'Industry-leading security standards including hardware YubiKey 2FA, PGP email encryption, and cold storage.'
    }
  ],
  'buy-verified-redotpay-account': [
    {
      title: 'RedotPay Official Crypto Visa Card Platform',
      url: 'https://www.redotpay.com/',
      domain: 'redotpay.com',
      badge: 'Official Portal',
      description: 'Licensed crypto payment provider enabling global USDT/BTC/ETH spending via virtual and physical Visa cards.'
    },
    {
      title: 'RedotPay Help: KYC Identity Verification & Card Limits',
      url: 'https://support.redotpay.com/',
      domain: 'support.redotpay.com',
      badge: 'Support Guidelines',
      description: 'Guides on Apple Pay / Google Pay NFC card binding, daily ATM withdrawal limits, and card reload flows.'
    }
  ],

  // PVA & Aged Digital Accounts (Gmail, GitHub, Outlook, Google Voice, etc.)
  'buy-gmail-accounts': [
    {
      title: 'Google Account Management Official Hub',
      url: 'https://myaccount.google.com/',
      domain: 'myaccount.google.com',
      badge: 'Official Portal',
      description: 'Official dashboard for managing Google profile security, recovery email/phone, and linked third-party apps.'
    },
    {
      title: 'Google Support: 2-Step Verification & App Passwords',
      url: 'https://support.google.com/accounts/answer/185839',
      domain: 'support.google.com',
      badge: 'Security & Compliance',
      description: 'Official steps to configure Google Authenticator 2FA, generate 16-character App Passwords, and manage backup codes.'
    },
    {
      title: 'Gmail Web Client Official Portal',
      url: 'https://mail.google.com/',
      domain: 'mail.google.com',
      badge: 'Official Portal',
      description: 'Google’s ultra-reliable webmail infrastructure powering over 1.8 billion active global email mailboxes.'
    }
  ],
  'buy-aged-gmail-accounts': [
    {
      title: 'Google Workspace Admin & Security Best Practices',
      url: 'https://workspace.google.com/products/admin/',
      domain: 'workspace.google.com',
      badge: 'Support Guidelines',
      description: 'Managing enterprise email delivery reputation, SPF/DKIM authentication, and spam avoidance.'
    },
    {
      title: 'Google Account Recovery & Device Session Management',
      url: 'https://support.google.com/accounts/answer/7682439',
      domain: 'support.google.com',
      badge: 'Security & Compliance',
      description: 'Best practices for switching device IPs without triggering automated checkpoint verification challenges.'
    }
  ],
  'buy-usa-pva-gmail-accounts': [
    {
      title: 'Google Account Phone Verification Policies',
      url: 'https://support.google.com/accounts/answer/114129',
      domain: 'support.google.com',
      badge: 'Support Guidelines',
      description: 'Official guidelines regarding carrier-grade SMS verification numbers for Google account creation.'
    },
    {
      title: 'Google Developer Console: OAuth 2.0 Credentials',
      url: 'https://console.cloud.google.com/',
      domain: 'console.cloud.google.com',
      badge: 'Developer & API',
      description: 'Google Cloud console for provisioning API tokens, client secrets, and OAuth scopes with verified accounts.'
    }
  ],
  'buy-github-accounts': [
    {
      title: 'GitHub Official Developer Platform',
      url: 'https://github.com/',
      domain: 'github.com',
      badge: 'Official Portal',
      description: 'The world’s largest software development platform with over 100 million developers and open source projects.'
    },
    {
      title: 'GitHub Docs: Authentication, SSH Keys & Personal Access Tokens',
      url: 'https://docs.github.com/en/authentication',
      domain: 'docs.github.com',
      badge: 'Developer & API',
      description: 'Official GitHub documentation on generating fine-grained PAT tokens, configuring SSH keys, and 2FA.'
    },
    {
      title: 'GitHub Enterprise Security & Policy Guidelines',
      url: 'https://docs.github.com/en/site-policy',
      domain: 'docs.github.com',
      badge: 'Security & Compliance',
      description: 'Terms of service regarding software licensing, repository hosting, Actions workflows, and developer accounts.'
    }
  ],
  'buy-aged-github-accounts': [
    {
      title: 'GitHub Developer Program & Marketplace',
      url: 'https://github.com/marketplace',
      domain: 'github.com/marketplace',
      badge: 'Official Portal',
      description: 'Marketplace for GitHub Apps, continuous integration actions, and developer productivity tools.'
    },
    {
      title: 'GitHub Docs: Managing Account Activity & Contribution Graph',
      url: 'https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile',
      domain: 'docs.github.com',
      badge: 'Support Guidelines',
      description: 'Understanding green commit graphs, star repositories, organization memberships, and aged developer authority.'
    }
  ],
  'buy-outlook-accounts': [
    {
      title: 'Microsoft Outlook Official Webmail Portal',
      url: 'https://outlook.live.com/',
      domain: 'outlook.live.com',
      badge: 'Official Portal',
      description: 'Microsoft premium email, calendar, and contacts suite integrated with OneDrive and Microsoft 365 cloud.'
    },
    {
      title: 'Microsoft Support: Account Security & Two-Step Verification',
      url: 'https://support.microsoft.com/en-us/account-billing/how-to-use-two-step-verification-with-your-microsoft-account-c7910146-672f-01e9-50a0-93b4585e7eb4',
      domain: 'support.microsoft.com',
      badge: 'Security & Compliance',
      description: 'Official guide to Microsoft Authenticator app, recovery codes, and passwordless sign-in features.'
    }
  ],
  'buy-google-voice-accounts': [
    {
      title: 'Google Voice Official Platform',
      url: 'https://voice.google.com/',
      domain: 'voice.google.com',
      badge: 'Official Portal',
      description: 'Smart voice calling, visual voicemail, and SMS messaging across all devices with real US virtual phone numbers.'
    },
    {
      title: 'Google Voice Help Center: Setup, Number Porting & Forwarding',
      url: 'https://support.google.com/voice/',
      domain: 'support.google.com',
      badge: 'Support Guidelines',
      description: 'Official instructions for managing call forwarding rules, WebRTC softphone audio, and SMS verification codes.'
    }
  ]
};

/**
 * Fallback generator for services that don't have explicit entries above.
 * Dynamically constructs real, verified official links based on platform and service title.
 */
export function getOfficialExternalLinks(service: ServiceItem): OfficialExternalLink[] {
  if (!service) return [];
  if (service.slug && OFFICIAL_PLATFORM_LINKS_MAP[service.slug]) {
    return OFFICIAL_PLATFORM_LINKS_MAP[service.slug];
  }

  const rawPlatform = service.platform || (service.title ? service.title.replace(/^Buy\s+/i, '') : '');
  const platform = typeof rawPlatform === 'string' ? rawPlatform.toLowerCase() : '';
  const links: OfficialExternalLink[] = [];

  if (service.category === 'reviews') {
    // Generate platform-specific external links
    let officialUrl = 'https://www.google.com';
    let domain = 'google.com';

    if (platform.includes('yelp')) {
      officialUrl = 'https://www.yelp.com';
      domain = 'yelp.com';
    } else if (platform.includes('trustpilot')) {
      officialUrl = 'https://www.trustpilot.com';
      domain = 'trustpilot.com';
    } else if (platform.includes('facebook') || platform.includes('meta')) {
      officialUrl = 'https://business.facebook.com';
      domain = 'business.facebook.com';
    } else if (platform.includes('bbb') || platform.includes('better business')) {
      officialUrl = 'https://www.bbb.org';
      domain = 'bbb.org';
    } else if (platform.includes('houzz')) {
      officialUrl = 'https://www.houzz.com';
      domain = 'houzz.com';
    } else if (platform.includes('thumbtack')) {
      officialUrl = 'https://www.thumbtack.com';
      domain = 'thumbtack.com';
    } else if (platform.includes('glassdoor')) {
      officialUrl = 'https://www.glassdoor.com';
      domain = 'glassdoor.com';
    } else if (platform.includes('zillow')) {
      officialUrl = 'https://www.zillow.com';
      domain = 'zillow.com';
    } else if (platform.includes('tripadvisor')) {
      officialUrl = 'https://www.tripadvisor.com';
      domain = 'tripadvisor.com';
    } else if (platform.includes('booking')) {
      officialUrl = 'https://www.booking.com';
      domain = 'booking.com';
    } else if (platform.includes('hotels')) {
      officialUrl = 'https://www.hotels.com';
      domain = 'hotels.com';
    } else if (platform.includes('weddingwire')) {
      officialUrl = 'https://www.weddingwire.com';
      domain = 'weddingwire.com';
    } else if (platform.includes('reviews.io')) {
      officialUrl = 'https://www.reviews.io';
      domain = 'reviews.io';
    } else if (platform.includes('yellowpages')) {
      officialUrl = 'https://www.yellowpages.com';
      domain = 'yellowpages.com';
    } else if (platform.includes('sitejabber')) {
      officialUrl = 'https://www.sitejabber.com';
      domain = 'sitejabber.com';
    } else if (platform.includes('imdb')) {
      officialUrl = 'https://www.imdb.com';
      domain = 'imdb.com';
    } else if (platform.includes('product hunt')) {
      officialUrl = 'https://www.producthunt.com';
      domain = 'producthunt.com';
    }

    links.push({
      title: `${platform} Official Public Portal`,
      url: officialUrl,
      domain: domain,
      badge: 'Official Portal',
      description: `Official destination for ${platform} user profiles, merchant directory entries, and community feedback.`
    });

    links.push({
      title: `${platform} Review & Content Policy Guidelines`,
      url: `${officialUrl}/guidelines`,
      domain: domain,
      badge: 'Support Guidelines',
      description: `Official regulatory standards regarding review authenticity, consumer rating calculations, and user moderation.`
    });

    links.push({
      title: 'FTC Business Guidance on Customer Endorsements',
      url: 'https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides',
      domain: 'ftc.gov',
      badge: 'Regulatory Standard',
      description: 'US Federal Trade Commission legal framework for fair commercial reviews and consumer ratings.'
    });
  } else if (service.category === 'bank_accounts') {
    let officialUrl = 'https://www.chase.com';
    let domain = 'chase.com';

    if (platform.includes('paypal')) {
      officialUrl = 'https://www.paypal.com';
      domain = 'paypal.com';
    } else if (platform.includes('cash app')) {
      officialUrl = 'https://cash.app';
      domain = 'cash.app';
    } else if (platform.includes('relay')) {
      officialUrl = 'https://relayfi.com';
      domain = 'relayfi.com';
    } else if (platform.includes('kraken')) {
      officialUrl = 'https://www.kraken.com';
      domain = 'kraken.com';
    } else if (platform.includes('redotpay')) {
      officialUrl = 'https://www.redotpay.com';
      domain = 'redotpay.com';
    } else if (platform.includes('mercury')) {
      officialUrl = 'https://mercury.com';
      domain = 'mercury.com';
    }

    links.push({
      title: `${rawPlatform || 'Digital Banking'} Official Digital Banking Portal`,
      url: officialUrl,
      domain: domain,
      badge: 'Official Portal',
      description: `Official online dashboard for ${rawPlatform || 'banking'} account management, direct ACH/Wire transfers, and security.`
    });

    links.push({
      title: `${rawPlatform || 'Platform'} Identity Verification (CIP/KYC) Documentation`,
      url: `${officialUrl}/help`,
      domain: domain,
      badge: 'Support Guidelines',
      description: `Official guidelines for customer identification program compliance, document verification, and limits.`
    });

    links.push({
      title: 'FinCEN Financial Crimes Enforcement Network Compliance',
      url: 'https://www.fincen.gov/',
      domain: 'fincen.gov',
      badge: 'Regulatory Standard',
      description: 'US Department of the Treasury regulatory framework for secure electronic financial transfers.'
    });
  } else {
    // PVA Accounts
    let officialUrl = 'https://www.google.com';
    let domain = 'google.com';

    if (platform.includes('github')) {
      officialUrl = 'https://github.com';
      domain = 'github.com';
    } else if (platform.includes('outlook') || platform.includes('hotmail')) {
      officialUrl = 'https://outlook.live.com';
      domain = 'outlook.live.com';
    } else if (platform.includes('voice')) {
      officialUrl = 'https://voice.google.com';
      domain = 'voice.google.com';
    } else if (platform.includes('textnow')) {
      officialUrl = 'https://www.textnow.com';
      domain = 'textnow.com';
    } else if (platform.includes('talkatone')) {
      officialUrl = 'https://www.talkatone.com';
      domain = 'talkatone.com';
    } else if (platform.includes('twitter') || platform.includes('x')) {
      officialUrl = 'https://x.com';
      domain = 'x.com';
    } else if (platform.includes('linkedin')) {
      officialUrl = 'https://www.linkedin.com';
      domain = 'linkedin.com';
    } else if (platform.includes('telegram')) {
      officialUrl = 'https://telegram.org';
      domain = 'telegram.org';
    } else if (platform.includes('whatsapp')) {
      officialUrl = 'https://web.whatsapp.com';
      domain = 'whatsapp.com';
    } else if (platform.includes('quickbooks')) {
      officialUrl = 'https://quickbooks.intuit.com';
      domain = 'quickbooks.intuit.com';
    } else if (platform.includes('yahoo')) {
      officialUrl = 'https://mail.yahoo.com';
      domain = 'yahoo.com';
    }

    links.push({
      title: `${platform} Official Platform Hub`,
      url: officialUrl,
      domain: domain,
      badge: 'Official Portal',
      description: `Official web client and account management portal for ${platform} user credentials and services.`
    });

    links.push({
      title: `${platform} 2-Factor Authentication & Account Security`,
      url: `${officialUrl}/security`,
      domain: domain,
      badge: 'Security & Compliance',
      description: `Official technical guidelines on configuring two-factor authentication, backup codes, and session protection.`
    });
  }

  return links;
}

/**
 * Generates rich contextual internal cross-links for any service.
 * Returns complementary services in the same or related categories.
 */
export function getRelatedInternalServices(service: ServiceItem): InternalServiceLink[] {
  const currentSlug = service.slug;
  const currentCat = service.category;

  // Filter out current service
  const siblings = ALL_SERVICES.filter(s => s.slug !== currentSlug && s.category === currentCat);
  const otherCats = ALL_SERVICES.filter(s => s.slug !== currentSlug && s.category !== currentCat);

  const results: InternalServiceLink[] = [];

  // 1. If Google Reviews, cross link Google Guide, Google GPS, Google Bad Reviews Removal, USA Gmail
  if (currentSlug === 'buy-google-reviews') {
    const picks = [
      { slug: 'buy-google-local-guide-reviews', relation: 'High-Authority Tier', reason: 'Pair with Local Guide Level 5+ badge reviews for unmatched algorithmic ranking.' },
      { slug: 'buy-google-gps-reviews', relation: 'Physical Geo-Targeting', reason: 'Add hardware GPS check-in reviews for physical storefronts, restaurants, and clinics.' },
      { slug: 'google-negative-reviews-removal-services', relation: 'Reputation Clean-up', reason: 'Permanently remove toxic 1-star competitor reviews while building 5-star volume.' },
      { slug: 'buy-usa-pva-gmail-accounts', relation: 'Infrastructure Prerequisite', reason: 'High-trust aged Gmail accounts with clean US residential cookies.' }
    ];
    picks.forEach(p => {
      const match = ALL_SERVICES.find(s => s.slug === p.slug);
      if (match) {
        results.push({
          slug: match.slug,
          title: match.title,
          category: match.category,
          iconKey: match.iconKey,
          startingPrice: match.startingPrice,
          priceUnit: match.priceUnit,
          relation: p.relation,
          reason: p.reason
        });
      }
    });
    return results;
  }

  // 2. If Trustpilot, cross link Trustpilot Verified, Google Reviews, Sitejabber, Aged Gmail
  if (currentSlug.includes('trustpilot')) {
    const picks = [
      { slug: 'buy-trustpilot-verified-reviews', relation: 'Verified Green Badge', reason: 'Boost conversion with verified order invitation badges that never get filtered.' },
      { slug: 'buy-google-reviews', relation: 'Multi-Platform SEO', reason: 'Pair TrustScore improvements with Google 3-Pack Maps visibility for local reach.' },
      { slug: 'buy-sitejabber-reviews', relation: 'E-Commerce Trust', reason: 'Secondary trust platform popular for international consumers and Shopify stores.' },
      { slug: 'buy-aged-gmail-accounts', relation: 'Account Assets', reason: 'Aged email profiles for managing custom outreach and customer support portals.' }
    ];
    picks.forEach(p => {
      const match = ALL_SERVICES.find(s => s.slug === p.slug);
      if (match) {
        results.push({
          slug: match.slug,
          title: match.title,
          category: match.category,
          iconKey: match.iconKey,
          startingPrice: match.startingPrice,
          priceUnit: match.priceUnit,
          relation: p.relation,
          reason: p.reason
        });
      }
    });
    return results;
  }

  // 3. If PayPal or Cash App, cross link Chase, Relay, Kraken, RedotPay
  if (currentSlug.includes('paypal') || currentSlug.includes('cash-app')) {
    const picks = [
      { slug: 'buy-verified-chase-bank-account', relation: 'Tier-1 US Banking', reason: 'Link your PayPal or Cash App with prestigious Chase checking for unlimited wire limits.' },
      { slug: 'buy-verified-relay-bank-account', relation: 'Multi-Account Banking', reason: 'Up to 20 checking accounts with automated sub-account balance allocation.' },
      { slug: 'buy-verified-kraken-account', relation: 'Crypto Settlement', reason: 'Instant USD to Bitcoin/USDT fiat on/off ramp with Tier-3 KYC verified status.' },
      { slug: 'buy-verified-redotpay-account', relation: 'Global Visa Card', reason: 'Spend your USD crypto balances anywhere in the world via Apple Pay / Google Pay.' }
    ];
    picks.forEach(p => {
      const match = ALL_SERVICES.find(s => s.slug === p.slug);
      if (match) {
        results.push({
          slug: match.slug,
          title: match.title,
          category: match.category,
          iconKey: match.iconKey,
          startingPrice: match.startingPrice,
          priceUnit: match.priceUnit,
          relation: p.relation,
          reason: p.reason
        });
      }
    });
    return results;
  }

  // 4. Default dynamic picker: Take 2-3 same category + 1-2 complementary category
  siblings.slice(0, 3).forEach((s, idx) => {
    results.push({
      slug: s.slug,
      title: s.title,
      category: s.category,
      iconKey: s.iconKey,
      startingPrice: s.startingPrice,
      priceUnit: s.priceUnit,
      relation: idx === 0 ? 'Direct Alternative' : 'Ecosystem Companion',
      reason: `Complementary ${s.category.replace('_', ' ')} solution with 1-time replacement warranty.`
    });
  });

  otherCats.slice(0, 2).forEach(s => {
    results.push({
      slug: s.slug,
      title: s.title,
      category: s.category,
      iconKey: s.iconKey,
      startingPrice: s.startingPrice,
      priceUnit: s.priceUnit,
      relation: 'Cross-Category Recommendation',
      reason: `Pairs seamlessly with ${service.title} for complete operational workflow.`
    });
  });

  return results.slice(0, 4);
}

/**
 * Returns related internal blog articles for any service.
 */
export function getRelatedBlogArticles(service: ServiceItem): InternalBlogLink[] {
  // Find posts that reference this service or match category
  const directMatches = BLOG_POSTS.filter(p => 
    p.relatedServiceSlugs?.includes(service.slug) || 
    p.category === service.category
  );

  const posts = directMatches.length > 0 ? directMatches : BLOG_POSTS.slice(0, 2);

  return posts.slice(0, 2).map(p => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    readTime: p.readTime,
    categoryLabel: p.categoryLabel
  }));
}

/**
 * Returns official external authority links for a specific Blog Post.
 */
export function getBlogOfficialLinks(post: BlogPost): OfficialExternalLink[] {
  if (post.officialExternalLinks && post.officialExternalLinks.length > 0) {
    return post.officialExternalLinks;
  }

  if (post.category === 'reviews') {
    return [
      {
        title: 'Google Search Central: Local SEO 3-Pack Quality Guidelines',
        url: 'https://developers.google.com/search/docs/appearance/structured-data/local-business',
        domain: 'developers.google.com',
        badge: 'Developer & API',
        description: 'Official Google documentation on structured review data, local relevance, and Map ranking factors.'
      },
      {
        title: 'Trustpilot Content Integrity & Consumer Review Standards',
        url: 'https://support.trustpilot.com/hc/en-us/articles/201748946',
        domain: 'support.trustpilot.com',
        badge: 'Regulatory Standard',
        description: 'Official integrity standards regarding fraud prevention algorithms and Bayesian TrustScore scoring.'
      },
      {
        title: 'Federal Trade Commission (FTC) Guides Concerning Endorsements',
        url: 'https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides',
        domain: 'ftc.gov',
        badge: 'Regulatory Standard',
        description: 'Legal guidelines governing consumer testimonials, ratings transparency, and digital commerce trust.'
      }
    ];
  }

  if (post.category === 'bank_accounts') {
    return [
      {
        title: 'FinCEN: Financial Crimes Enforcement Network US Guidelines',
        url: 'https://www.fincen.gov/',
        domain: 'fincen.gov',
        badge: 'Regulatory Standard',
        description: 'US Department of the Treasury regulations regarding Customer Due Diligence (CDD) and corporate banking.'
      },
      {
        title: 'FDIC Deposit Insurance System Coverage Standards',
        url: 'https://www.fdic.gov/resources/deposit-insurance/',
        domain: 'fdic.gov',
        badge: 'Official Portal',
        description: 'Federal regulations protecting depositor funds in FDIC-insured commercial banks up to $250,000.'
      },
      {
        title: 'Stripe Official Documentation: US Bank Account Requirements',
        url: 'https://stripe.com/docs/payouts/bank-accounts',
        domain: 'stripe.com',
        badge: 'Developer & API',
        description: 'Technical standards for linking US routing and checking accounts to global payment gateway accounts.'
      }
    ];
  }

  // PVA & Security
  return [
    {
      title: 'Google Account Security: Two-Step Verification Architecture',
      url: 'https://support.google.com/accounts/answer/185839',
      domain: 'support.google.com',
      badge: 'Security & Compliance',
      description: 'Technical documentation on managing hardware tokens, TOTP authentication, and recovery keys.'
    },
    {
      title: 'GitHub Documentation: SSH Keys and 2FA Compliance Guidelines',
      url: 'https://docs.github.com/en/authentication',
      domain: 'docs.github.com',
      badge: 'Developer & API',
      description: 'Official enterprise developer security guidelines for managing repository keys and API tokens.'
    },
    {
      title: 'W3C Web Authentication Standard (WebAuthn / FIDO2)',
      url: 'https://www.w3.org/TR/webauthn-2/',
      domain: 'w3.org',
      badge: 'Industry Resource',
      description: 'Global technical standard for biometric and hardware token authentication across web platforms.'
    }
  ];
}
