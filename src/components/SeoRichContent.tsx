import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck, 
  Star, 
  TrendingUp, 
  Zap, 
  Layers, 
  Cpu, 
  Table, 
  Lightbulb, 
  Check, 
  Award,
  Lock,
  ArrowRight
} from 'lucide-react';
import { ServiceItem } from '../types';
import { getServiceSeoRichContent } from '../utils/seoContentGenerator';

interface SeoRichContentProps {
  service: ServiceItem;
  onOpenWarrantyModal?: () => void;
}

export const SeoRichContent: React.FC<SeoRichContentProps> = ({ 
  service,
  onOpenWarrantyModal 
}) => {
  const seo = getServiceSeoRichContent(service);

  return (
    <div className="space-y-8 pt-4">
      {/* 1. SEO Executive Summary & Primary Keyword Context */}
      <section className="bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 sm:p-7 relative overflow-hidden space-y-4">
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
          <Award className="w-4 h-4" />
          <span>SEO Master Guide &amp; Technical Overview</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
          Complete Strategic Guide: {service.title} for High-Growth Brands &amp; Digital Ventures
        </h2>

        <p className="text-sm text-zinc-300 leading-relaxed font-normal">
          {seo.executiveSummary}
        </p>

        {/* Primary & Secondary Keywords Bar for SEO Transparency */}
        <div className="pt-3 border-t border-zinc-800/60 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
            Primary Target:
          </span>
          <span className="text-xs font-bold text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20 font-mono">
            {seo.targetPrimaryKeyword}
          </span>

          <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider ml-2">
            Related Semantic Keywords:
          </span>
          {seo.semanticKeywords.slice(0, 4).map((kw, i) => (
            <span key={i} className="text-[11px] text-zinc-400 bg-zinc-800/60 px-2 py-0.5 rounded border border-zinc-700/50">
              {kw}
            </span>
          ))}
        </div>
      </section>

      {/* 2. Technical Specifications & Quality Assurance Matrix */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <span>Technical Specifications &amp; Quality Parameters</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {seo.technicalSpecs.map((spec, i) => (
            <div key={i} className="bg-zinc-900/40 border border-zinc-800/70 p-4 rounded-xl space-y-1">
              <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider block">
                {spec.label}
              </span>
              <span className="text-xs font-bold text-zinc-100 block">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Deep In-Depth Keyword-Targeted Content Sections */}
      <div className="space-y-6">
        {seo.deepArticleSections.map((sec, idx) => (
          <article 
            key={idx} 
            className="bg-zinc-900/30 border border-zinc-800/70 rounded-2xl p-6 sm:p-7 space-y-4"
          >
            <div>
              {sec.subheading && (
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  {sec.subheading}
                </span>
              )}
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {sec.heading}
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* Key Takeaways Box */}
            {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wide">
                  <Lightbulb className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Key Strategic Takeaways</span>
                </div>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {sec.keyTakeaways.map((kt, kIdx) => (
                    <li key={kIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{kt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bullet Points */}
            {sec.bulletPoints && sec.bulletPoints.length > 0 && (
              <div className="mt-4 space-y-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                  {sec.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-950/40 border border-zinc-800/60">
                      <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Comparison / Metric Table */}
            {sec.table && (
              <div className="mt-5 overflow-x-auto rounded-xl border border-zinc-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-zinc-950/80 text-zinc-300 font-semibold border-b border-zinc-800">
                    <tr>
                      {sec.table.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-3">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/60 bg-zinc-900/20">
                    {sec.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-zinc-800/20 transition-colors">
                        <td className="p-3 font-semibold text-zinc-200">
                          {row[0]}
                        </td>
                        <td className="p-3 text-emerald-300 font-medium">
                          {row[1]}
                        </td>
                        <td className="p-3 text-zinc-400">
                          {row[2]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* 4. Why Buy From BlackAcc World Feature Pillars */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Why BlackAcc World is the #1 Provider for {service.title}</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {seo.whyChoosePoints.map((pt, i) => (
            <div key={i} className="bg-zinc-900/40 border border-zinc-800/80 p-5 rounded-2xl space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
                  0{i + 1}
                </div>
                <h4 className="text-sm font-bold text-white">
                  {pt.title}
                </h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed pl-8">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Safe Operations & Client Best Practices */}
      <section className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-5 sm:p-6 space-y-3">
        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-sky-400">
          <Lock className="w-4 h-4" />
          <span>Operational Security &amp; Safe Usage Protocol</span>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed">
          To maximize the retention, lifespan, and organic performance of your {service.title}, our engineering team advises adhering to these standard best practices:
        </p>

        <ul className="space-y-2 text-xs text-zinc-300">
          {seo.safetyBestPractices.map((sb, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
              <span>{sb}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 6. Comprehensive Semantic FAQ Section */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>Search Optimization &amp; Order Questions ({service.title})</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {seo.expandedFaqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4 sm:p-5 space-y-2"
            >
              <h4 className="text-xs sm:text-sm font-bold text-white flex items-start gap-2">
                <span className="text-emerald-400 font-mono">Q:</span>
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Comprehensive Keyword Tags Matrix for Indexing Depth */}
      <section className="space-y-2.5 pt-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
          Target Semantic Keywords &amp; Search Queries:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {seo.secondaryKeywords.map((kw, i) => (
            <span key={i} className="text-[11px] px-2.5 py-1 bg-zinc-900/90 text-zinc-300 border border-zinc-800 rounded-lg hover:border-emerald-500/40 transition-colors">
              {kw}
            </span>
          ))}
          {seo.rankingKeywords.map((kw, i) => (
            <span key={`rank-${i}`} className="text-[11px] px-2.5 py-1 bg-zinc-950 text-zinc-400 border border-zinc-850 rounded-lg font-mono">
              #{kw}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};
