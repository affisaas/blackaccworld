var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_nodemailer = __toESM(require("nodemailer"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  const smtpUser = process.env.SMTP_EMAIL || "smmbuy2022@gmail.com";
  const smtpPass = (process.env.SMTP_APP_PASSWORD || "cozi ibbt kzwp xato").replace(/\s+/g, "");
  const transporter = import_nodemailer.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    // SSL
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });
  transporter.verify((error) => {
    if (error) {
      console.warn("\u26A0\uFE0F SMTP Transporter Warning:", error.message);
    } else {
      console.log("\u2705 Gmail SMTP Transporter ready to dispatch order emails from:", smtpUser);
    }
  });
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", domain: "blackaccworld.com", time: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.post("/api/send-order-email", async (req, res) => {
    try {
      const { order } = req.body;
      if (!order || !order.orderId) {
        return res.status(400).json({ success: false, error: "Invalid order payload" });
      }
      const {
        orderId,
        date,
        items = [],
        totalUsd,
        cryptoSymbol,
        cryptoAmount,
        cryptoAddress,
        txid,
        contactMethod,
        contactHandle,
        customerEmail
      } = order;
      const formattedDate = new Date(date || Date.now()).toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short"
      });
      const itemsTableHtml = items.map(
        (item, idx) => `
          <tr style="border-bottom: 1px solid #27272a;">
            <td style="padding: 12px 8px; color: #f4f4f5; font-weight: 600;">
              ${idx + 1}. ${item.serviceTitle}
              <div style="font-size: 12px; color: #a1a1aa; font-weight: normal; margin-top: 2px;">
                Tier: ${item.tierName || "Standard"} ${item.customNotes ? `<br>Notes: ${item.customNotes}` : ""}
              </div>
            </td>
            <td style="padding: 12px 8px; text-align: center; color: #d4d4d8;">${item.quantity || 1}</td>
            <td style="padding: 12px 8px; text-align: right; color: #10b981; font-weight: bold;">$${((item.price || 0) * (item.quantity || 1)).toFixed(2)} USD</td>
          </tr>`
      ).join("");
      const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Confirmation #${orderId}</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f4f4f5;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #09090b; padding: 24px 12px;">
          <tr>
            <td align="center">
              <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #18181b; border: 1px solid #27272a; border-radius: 16px; overflow: hidden;">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #09090b 0%, #18181b 100%); padding: 32px 24px; text-align: center; border-bottom: 1px solid #27272a;">
                    <div style="display: inline-block; padding: 8px 16px; background-color: #10b98120; border: 1px solid #10b98150; border-radius: 20px; color: #34d399; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
                      BlackAccWorld Official Store
                    </div>
                    <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff;">Order Confirmed!</h1>
                    <p style="margin: 8px 0 0; color: #a1a1aa; font-size: 14px;">Order ID: <strong style="color: #34d399; font-family: monospace;">#${orderId}</strong></p>
                  </td>
                </tr>

                <!-- Order Details -->
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.5; color: #e4e4e7;">
                      Thank you for your purchase from <strong>blackaccworld.com</strong>. Your order has been submitted to our automated delivery processing queue.
                    </p>

                    <!-- Summary Card -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #09090b; border: 1px solid #27272a; border-radius: 12px; margin-bottom: 20px; padding: 16px;">
                      <tr>
                        <td style="padding: 6px 12px; font-size: 13px; color: #a1a1aa;">Order Date:</td>
                        <td style="padding: 6px 12px; font-size: 13px; color: #ffffff; text-align: right; font-weight: 600;">${formattedDate}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 12px; font-size: 13px; color: #a1a1aa;">Total Paid:</td>
                        <td style="padding: 6px 12px; font-size: 15px; color: #34d399; text-align: right; font-weight: bold;">$${totalUsd} USD (${cryptoAmount} ${cryptoSymbol})</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 12px; font-size: 13px; color: #a1a1aa;">Wallet Paid:</td>
                        <td style="padding: 6px 12px; font-size: 11px; color: #d4d4d8; text-align: right; font-family: monospace; word-break: break-all;">${cryptoAddress}</td>
                      </tr>
                      ${txid ? `<tr>
                        <td style="padding: 6px 12px; font-size: 13px; color: #a1a1aa;">TXID / Hash:</td>
                        <td style="padding: 6px 12px; font-size: 11px; color: #38bdf8; text-align: right; font-family: monospace; word-break: break-all;">${txid}</td>
                      </tr>` : ""}
                      <tr>
                        <td style="padding: 6px 12px; font-size: 13px; color: #a1a1aa;">Delivery Contact:</td>
                        <td style="padding: 6px 12px; font-size: 13px; color: #ffffff; text-align: right; font-weight: 600;">${contactHandle} (${contactMethod || "direct"})</td>
                      </tr>
                    </table>

                    <!-- Items Table -->
                    <h3 style="margin: 20px 0 10px; font-size: 16px; font-weight: 700; color: #ffffff; border-bottom: 1px solid #27272a; padding-bottom: 8px;">
                      Ordered Items (${items.length})
                    </h3>
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px; font-size: 14px;">
                      <thead>
                        <tr style="border-bottom: 1px solid #3f3f46; color: #a1a1aa; font-size: 12px; text-transform: uppercase;">
                          <th style="padding: 8px; text-align: left;">Service</th>
                          <th style="padding: 8px; text-align: center;">Qty</th>
                          <th style="padding: 8px; text-align: right;">Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${itemsTableHtml}
                      </tbody>
                    </table>

                    <!-- Instant Delivery Action CTA -->
                    <div style="background-color: #10b98115; border: 1px solid #10b98140; border-radius: 12px; padding: 18px; text-align: center; margin-bottom: 24px;">
                      <p style="margin: 0 0 12px; font-size: 14px; color: #34d399; font-weight: bold;">
                        \u{1F680} For Instant Priority Delivery, Send Receipt to 24/7 Support:
                      </p>
                      <a href="https://t.me/EgSupport24" style="display: inline-block; background-color: #0284c7; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 13px; font-weight: bold; margin-right: 8px; margin-bottom: 6px;">
                        Telegram: @EgSupport24
                      </a>
                      <a href="https://wa.me/13073939979" style="display: inline-block; background-color: #16a34a; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 13px; font-weight: bold; margin-bottom: 6px;">
                        WhatsApp: +1 (307) 393-9979
                      </a>
                    </div>

                    <!-- Warranty & Policy Notice -->
                    <div style="font-size: 12px; color: #71717a; border-top: 1px solid #27272a; padding-top: 16px; line-height: 1.5;">
                      <strong>Replacement Warranty:</strong> All eligible review orders include our 1-time free replacement policy during the warranty window. For any queries, contact support 24/7.
                    </div>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #09090b; padding: 20px; text-align: center; border-top: 1px solid #27272a; font-size: 12px; color: #71717a;">
                    \xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} BlackAccWorld.com \u2014 All Rights Reserved.<br>
                    Website: <a href="https://blackaccworld.com" style="color: #34d399; text-decoration: none;">https://blackaccworld.com</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
      `;
      const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <body style="font-family: Arial, sans-serif; background-color: #18181b; color: #f4f4f5; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #09090b; border: 1px solid #27272a; border-radius: 12px; padding: 20px;">
          <h2 style="color: #10b981; margin-top: 0;">\u{1F514} New Order Received: #${orderId}</h2>
          <p><strong>Total Amount:</strong> $${totalUsd} USD (${cryptoAmount} ${cryptoSymbol})</p>
          <p><strong>Customer Contact:</strong> ${contactHandle} (${contactMethod})</p>
          ${customerEmail ? `<p><strong>Customer Email:</strong> <a href="mailto:${customerEmail}" style="color: #38bdf8;">${customerEmail}</a></p>` : ""}
          <p><strong>Wallet Address:</strong> <code>${cryptoAddress}</code></p>
          <p><strong>TXID / Hash:</strong> <code>${txid || "Pending / Direct Proof"}</code></p>
          <hr style="border: 0; border-top: 1px solid #27272a;" />
          <h3>Ordered Items (${items.length}):</h3>
          <ul>
            ${items.map((it) => `<li><strong>${it.serviceTitle}</strong> (${it.tierName || "Standard"}) x ${it.quantity || 1} - $${((it.price || 0) * (it.quantity || 1)).toFixed(2)} USD</li>`).join("")}
          </ul>
        </div>
      </body>
      </html>
      `;
      const sendPromises = [];
      if (customerEmail && customerEmail.includes("@")) {
        sendPromises.push(
          transporter.sendMail({
            from: `"BlackAccWorld Store" <${smtpUser}>`,
            to: customerEmail,
            subject: `Receipt: Order #${orderId} Confirmed - BlackAccWorld`,
            html: clientEmailHtml
          })
        );
      }
      sendPromises.push(
        transporter.sendMail({
          from: `"BlackAccWorld Alerts" <${smtpUser}>`,
          to: smtpUser,
          subject: `\u26A1 New Order #${orderId} ($${totalUsd} USD) - ${contactHandle}`,
          html: adminEmailHtml
        })
      );
      await Promise.all(sendPromises);
      return res.json({
        success: true,
        message: "Order confirmation and notification emails sent successfully"
      });
    } catch (err) {
      console.error("\u274C Error sending order emails:", err);
      return res.status(500).json({
        success: false,
        error: err.message || "Failed to dispatch email"
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`\u{1F680} BlackAccWorld server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
