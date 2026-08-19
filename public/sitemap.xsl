<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap | BlackAccWorld</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
            color: #d4d4d8;
            background-color: #09090b;
            margin: 0;
            padding: 24px;
          }
          .container {
            max-width: 1100px;
            margin: 0 auto;
          }
          header {
            border-bottom: 1px solid #27272a;
            padding-bottom: 20px;
            margin-bottom: 24px;
          }
          h1 {
            color: #ffffff;
            font-size: 24px;
            margin: 0 0 8px 0;
          }
          p {
            color: #a1a1aa;
            font-size: 14px;
            margin: 0 0 8px 0;
          }
          a {
            color: #34d399;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .badge {
            background: #18181b;
            border: 1px solid #27272a;
            color: #38bdf8;
            padding: 4px 10px;
            border-radius: 9999px;
            font-size: 12px;
            display: inline-block;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 16px;
            background: #18181b;
            border: 1px solid #27272a;
            border-radius: 10px;
            overflow: hidden;
            font-size: 13px;
          }
          th {
            background-color: #27272a;
            color: #f4f4f5;
            text-align: left;
            padding: 12px 16px;
            font-weight: 600;
          }
          td {
            padding: 10px 16px;
            border-top: 1px solid #27272a;
            word-break: break-all;
          }
          tr:hover {
            background-color: #202024;
          }
          .priority {
            font-weight: 700;
            color: #fbbf24;
          }
          .changefreq {
            color: #a1a1aa;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>XML Sitemap — BlackAccWorld</h1>
            <p>This is the official search engine XML sitemap for <a href="https://blackaccworld.com/">blackaccworld.com</a>.</p>
            <p>Total indexed URLs: <span class="badge"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs</span></p>
          </header>
          <table>
            <thead>
              <tr>
                <th>URL Location</th>
                <th style="width: 120px;">Priority</th>
                <th style="width: 120px;">Change Frequency</th>
                <th style="width: 140px;">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                  </td>
                  <td class="priority"><xsl:value-of select="sitemap:priority"/></td>
                  <td class="changefreq"><xsl:value-of select="sitemap:changefreq"/></td>
                  <td style="color: #71717a;"><xsl:value-of select="sitemap:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
