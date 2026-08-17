import { OrderRecord } from '../types';

export async function sendOrderEmails(order: OrderRecord): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch('/api/send-order-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ order })
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return { success: false, error: data.error || `HTTP ${res.status}` };
    }

    const data = await res.json();
    return { success: true };
  } catch (err: any) {
    console.warn('Could not connect to /api/send-order-email endpoint:', err.message);
    return { success: false, error: err.message };
  }
}
