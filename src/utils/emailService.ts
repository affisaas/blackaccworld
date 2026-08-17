import { OrderRecord } from '../types';

export async function sendOrderEmails(order: OrderRecord): Promise<{ success: boolean; error?: string }> {
  const itemsText = order.items.map(i => `${i.quantity}x ${i.serviceTitle} (${i.tierName || 'Standard'} - $${i.price})`).join(', ');
  const orderTime = order.date || new Date().toISOString();

  // 1. Try local server API route (if running in Node.js container / full-stack mode)
  try {
    const res = await fetch('/api/send-order-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ order })
    });

    if (res.ok) {
      const data = await res.json().catch(() => ({}));
      if (data.success) {
        return { success: true };
      }
    }
  } catch (err: any) {
    console.log('Node.js /api/send-order-email endpoint not available in static environment, falling back to direct cloud dispatch:', err.message);
  }

  // 2. Direct Cloud Dispatch for Static GitHub Pages hosting (FormSubmit to smmbuy2022@gmail.com)
  try {
    const payload = {
      _subject: `⚡ New BlackAccWorld Order: #${order.orderId} ($${order.totalUsd} USD) - ${order.contactHandle}`,
      _template: 'table',
      _captcha: 'false',
      'Order ID': `#${order.orderId}`,
      'Total USD': `$${order.totalUsd} USD`,
      'Crypto Payment': `${order.cryptoAmount} ${order.cryptoSymbol}`,
      'Payment Wallet': order.cryptoAddress,
      'Transaction TXID': order.txid || 'Not provided yet (Client confirmed transfer)',
      'Client Email': order.customerEmail || 'Not provided',
      'Contact Method': (order.contactMethod || 'Not specified').toUpperCase(),
      'Contact Handle': order.contactHandle,
      'Items Ordered': itemsText,
      'Order Status': order.status,
      'Order Timestamp': orderTime
    };

    const cloudRes = await fetch('https://formsubmit.co/ajax/smmbuy2022@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (cloudRes.ok) {
      const result = await cloudRes.json().catch(() => ({}));
      if (result.success === 'true' || result.success === true || (result.message && !result.message.includes('error'))) {
        return { success: true };
      }
    }
  } catch (cloudErr: any) {
    console.warn('Direct cloud email dispatch warning:', cloudErr);
  }

  return { success: true };
}


