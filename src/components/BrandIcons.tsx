import React from 'react';

interface BrandIconProps {
  name?: string;
  iconKey?: string;
  className?: string;
  size?: number;
}

export const BrandIcon: React.FC<BrandIconProps> = ({ name, iconKey, className = 'w-6 h-6', size }) => {
  const rawName = name || iconKey || '';
  const normalizedName = typeof rawName === 'string' ? rawName.toLowerCase() : '';
  const sizeStyle = size ? { width: `${size}px`, height: `${size}px` } : undefined;

  switch (normalizedName) {
    case 'google':
    case 'google-guide':
    case 'google-gps':
    case 'google-lsa':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
        </svg>
      );

    case 'trustpilot':
    case 'trustpilot-verified':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="currentColor">
          <rect width="24" height="24" rx="4" fill="#00B67A"/>
          <path d="M12 3.8l2.5 7.7h8.1l-6.5 4.8 2.5 7.7-6.6-4.8-6.6 4.8 2.5-7.7-6.5-4.8h8.1z" fill="#FFFFFF"/>
          <path d="M16.1 14.5l-4.1-3V3.8l2.5 7.7h8.1z" fill="#005128"/>
        </svg>
      );

    case 'yelp':
    case 'yelp-elite':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#D32323"/>
          <path d="M12 3.5c-.8 0-1.5.7-1.5 1.5v5.5c0 .6.4 1.1 1 1.3l.5.1.5-.1c.6-.2 1-.7 1-1.3V5c0-.8-.7-1.5-1.5-1.5z" fill="#FFFFFF"/>
          <path d="M6.2 9.2c-.6-.5-1.5-.4-2 .2l-3 4c-.5.6-.4 1.5.2 2 .6.5 1.5.4 2-.2l3-4c.5-.6.4-1.5-.2-2z" fill="#FFFFFF"/>
          <path d="M7.5 16.5c-.2-.8-1-1.3-1.8-1.1l-5.3 1.4c-.8.2-1.3 1-1.1 1.8.2.8 1 1.3 1.8 1.1l5.3-1.4c.8-.2 1.3-1 1.1-1.8z" fill="#FFFFFF"/>
          <path d="M17.8 9.2c.6-.5 1.5-.4 2 .2l3 4c.5.6.4 1.5-.2 2-.6.5-1.5.4-2-.2l-3-4c-.5-.6-.4-1.5.2-2z" fill="#FFFFFF"/>
          <path d="M16.5 16.5c.2-.8 1-1.3 1.8-1.1l5.3 1.4c.8.2 1.3 1 1.1 1.8-.2.8-1 1.3-1.8 1.1l-5.3-1.4c-.8-.2-1.3-1-1.1-1.8z" fill="#FFFFFF"/>
        </svg>
      );

    case 'facebook':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#1877F2"/>
          <path d="M16.5 12h-3v8h-3.5v-8h-2V9h2V7c0-2.2 1.3-3.5 3.4-3.5 1 0 2.1.2 2.1.2v2.3h-1.2c-1.1 0-1.4.7-1.4 1.4V9h2.6l-.4 3z" fill="#FFFFFF"/>
        </svg>
      );

    case 'instagram':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="url(#ig-grad)"/>
          <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.6a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" fill="#FFFFFF"/>
          <defs>
            <linearGradient id="ig-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F58529"/>
              <stop offset="0.5" stopColor="#DD2A7B"/>
              <stop offset="1" stopColor="#8134AF"/>
            </linearGradient>
          </defs>
        </svg>
      );

    case 'twitter':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#000000"/>
          <path d="M18.244 4h2.756l-6.02 6.88L22 20h-5.547l-4.346-5.682L7.13 20H4.372l6.438-7.359L4 4h5.687l3.928 5.193L18.244 4zm-.967 14.354h1.527L8.85 5.57H7.21l10.067 12.784z" fill="#FFFFFF"/>
        </svg>
      );

    case 'linkedin':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#0A66C2"/>
          <path d="M6.5 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5 10h3v10H5V10zm5 0h2.9v1.4h.1c.4-.8 1.5-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.9V20h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V20h-3.5V10z" fill="#FFFFFF"/>
        </svg>
      );

    case 'paypal':
    case 'paypal-restore':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#003087"/>
          <path d="M7 5h5.5c2.5 0 4.2 1.3 3.8 3.8-.4 2.8-2.5 4.2-5 4.2H9.2L8 19H5.5L7 5z" fill="#0079C1"/>
          <path d="M9.5 8h4.5c2.2 0 3.8 1.1 3.4 3.5-.4 2.5-2.2 3.8-4.5 3.8h-2.1L9.6 20h-2.5l2.4-12z" fill="#00457C"/>
        </svg>
      );

    case 'cashapp':
    case 'cashapp-secure':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#00D632"/>
          <path d="M12.8 6.5c-1.8 0-3 .9-3.2 2.3l1.8.4c.1-.6.6-1 1.4-1 .8 0 1.3.4 1.3 1 0 .6-.4.9-1.5 1.2-1.8.5-2.8 1.2-2.8 2.6 0 1.5 1.2 2.5 3 2.5v1.5h1.2v-1.5c1.9 0 3.2-1 3.3-2.4l-1.8-.4c-.1.7-.7 1.1-1.5 1.1-.9 0-1.4-.4-1.4-1 0-.6.5-1 1.6-1.3 1.9-.5 2.8-1.2 2.8-2.6 0-1.4-1.1-2.3-2.7-2.3V5h-1.2v1.5h-.1z" fill="#000000"/>
        </svg>
      );

    case 'chase':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#117ACA"/>
          <path d="M12 4l3.5 3.5H7.5L12 4zm8 8l-3.5 3.5V7.5L20 12zm-8 8l-3.5-3.5h8L12 20zm-8-8l3.5-3.5v8L4 12z" fill="#FFFFFF"/>
        </svg>
      );

    case 'relay':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#1F2937"/>
          <circle cx="12" cy="12" r="7" stroke="#10B981" strokeWidth="2.5"/>
          <path d="M12 8v8M8 12h8" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      );

    case 'kraken':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#5741D9"/>
          <path d="M7 6h10c1.7 0 3 1.3 3 3v4c0 1.7-1.3 3-3 3h-2v3h-2v-3h-2v3H9v-3H7c-1.7 0-3-1.3-3-3V9c0-1.7 1.3-3 3-3zm1 4v3h2v-3H8zm6 0v3h2v-3h-2z" fill="#FFFFFF"/>
        </svg>
      );

    case 'redotpay':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#E50914"/>
          <path d="M6 8h12v3H6V8zm0 5h8v3H6v-3z" fill="#FFFFFF"/>
        </svg>
      );

    case 'gmail':
    case 'gmail-pva':
    case 'gmail-aged':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H4z" fill="#EAEAEA"/>
          <path d="M22 8.5L12 15 2 8.5V8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v.5z" fill="#EA4335"/>
          <path d="M2 8.5l4.5 3.5L2 15.5v-7zm20 0v7l-4.5-3.5L22 8.5z" fill="#C5221F"/>
          <path d="M6.5 12L2 15.5V18c0 1.1.9 2 2 2h2.5L12 15.5 6.5 12zm11 0l-5.5 3.5L17.5 20H20c1.1 0 2-.9 2-2v-2.5L17.5 12z" fill="#FBBC05"/>
        </svg>
      );

    case 'outlook':
    case 'hotmail':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#0078D4"/>
          <circle cx="12" cy="12" r="5" fill="#FFFFFF" fillOpacity="0.3"/>
          <path d="M8 8.5C8 7.7 8.7 7 9.5 7h5c.8 0 1.5.7 1.5 1.5v7c0 .8-.7 1.5-1.5 1.5h-5c-.8 0-1.5-.7-1.5-1.5v-7z" fill="#FFFFFF"/>
          <path d="M9.5 9h5l-2.5 2.5L9.5 9z" fill="#0078D4"/>
        </svg>
      );

    case 'gvoice':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#34A853"/>
          <path d="M6.5 8c0 5.2 4.3 9.5 9.5 9.5l1.5-2.5-3-1.5-1.5 1.5c-2.5-1-4-2.5-5-5l1.5-1.5-1.5-3L6.5 8z" fill="#FFFFFF"/>
        </svg>
      );

    case 'github':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="currentColor">
          <rect width="24" height="24" rx="4" fill="#24292E"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7.58 4 4 7.58 4 12c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0020 12c0-4.42-3.58-8-8-8z" fill="#FFFFFF"/>
        </svg>
      );

    case 'whatsapp':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#25D366"/>
          <path d="M17.5 14.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.8 0 1.7 1.2 3.3 1.4 3.5.2.2 2.4 3.7 5.8 5.1.8.3 1.4.6 1.9.7.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.6.2-1.7-.1-.2-.3-.3-.6-.5z" fill="#FFFFFF"/>
        </svg>
      );

    case 'telegram':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#24A1DE"/>
          <path d="M17.8 7.2l-2.4 11.2c-.2.8-.7 1-1.3.6l-3.6-2.7-1.8 1.7c-.2.2-.4.4-.8.4l.3-3.8 6.9-6.3c.3-.3-.1-.4-.4-.2L8.2 13.5l-3.7-1.2c-.8-.2-.8-.8.2-1.2l14.4-5.5c.7-.2 1.3.2 1.1 1.2z" fill="#FFFFFF"/>
        </svg>
      );

    case 'edumail':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#6366F1"/>
          <path d="M12 4L3 9l9 5 9-5-9-5zm-6 8v4l6 3 6-3v-4l-6 3-6-3z" fill="#FFFFFF"/>
        </svg>
      );

    case 'glassdoor':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#0CAA41"/>
          <path d="M7 6h10v3H10v6h7v3H7V6z" fill="#FFFFFF"/>
        </svg>
      );

    case 'zillow':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#006AFF"/>
          <path d="M12 4l8 7h-3v8h-4v-5h-2v5H7v-8H4l8-7z" fill="#FFFFFF"/>
        </svg>
      );

    case 'thumbtack':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#009FD9"/>
          <path d="M14 4l3 3-2 2 1 4-4 4-2-2-4 4-1-1 4-4-2-2 4-4 4 1 2-2z" fill="#FFFFFF"/>
        </svg>
      );

    case 'houzz':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#4DBC15"/>
          <path d="M8 5h3v5h2V5h3v14h-3v-6h-2v6H8V5z" fill="#FFFFFF"/>
        </svg>
      );

    case 'bbb':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#005A70"/>
          <text x="5" y="16" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">BBB</text>
        </svg>
      );

    case 'playstore':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#01875F"/>
          <path d="M6 5l8 7-8 7V5zm9 8.2l2.5 2.2-9 4.6 6.5-6.8zm0-2.4L8.5 4l9 4.6L15 10.8z" fill="#FFFFFF"/>
        </svg>
      );

    case 'booking':
    case 'hotel':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#003580"/>
          <text x="4" y="16" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">B.</text>
        </svg>
      );

    case 'quickbooks':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#2CA01C"/>
          <circle cx="10" cy="12" r="4" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
          <path d="M14 8v8h2a3 3 0 000-6h-2" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
        </svg>
      );

    case 'imdb':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F5C518"/>
          <text x="3" y="16" fill="#000000" fontSize="9" fontWeight="900" fontFamily="sans-serif">IMDb</text>
        </svg>
      );

    case 'chrome':
      return (
        <svg style={sizeStyle} className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#4285F4"/>
          <circle cx="12" cy="12" r="4" fill="#FFFFFF"/>
          <path d="M12 2a10 10 0 018.66 5H12v5z" fill="#EA4335"/>
          <path d="M20.66 7A10 10 0 0112 22l4.33-7.5z" fill="#FBBC05"/>
          <path d="M12 22A10 10 0 013.34 7H12v5z" fill="#34A853"/>
        </svg>
      );

    default:
      return (
        <div style={sizeStyle} className={`bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-lg flex items-center justify-center font-bold text-xs ${className}`}>
          {name.substring(0, 2).toUpperCase()}
        </div>
      );
  }
};
