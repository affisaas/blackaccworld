import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  TrendingUp,
  Building2,
  Star,
  Users,
  Share2,
  CheckCircle2,
  Layers,
  ExternalLink,
  Link2,
  ArrowUpRight,
  Compass
} from 'lucide-react';
import { BlogPost, ServiceItem } from '../types';
import { BLOG_POSTS } from '../data/blogData';
import { ALL_SERVICES } from '../data/servicesData';
import { getBlogOfficialLinks } from '../data/serviceLinksData';
import { BrandIcon } from './BrandIcons';

interface BlogPageProps {
  onSelectService: (service: ServiceItem) => void;
  onNavigateHome: () => void;
  selectedPostSlug?: string | null;
  onSelectPostSlug?: (slug: string | null) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onSelectService,
  onNavigateHome,
  selectedPostSlug,
  onSelectPostSlug
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [copiedLink, setCopiedLink] = useState(false);

  // Active single post view if selectedPostSlug is present
  const currentPost = useMemo(() => {
    if (!selectedPostSlug) return null;
    return BLOG_POSTS.find(p => p.slug === selectedPostSlug) || null;
  }, [selectedPostSlug]);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    BLOG_POSTS.forEach(p => p.tags.forEach(t => tagsSet.add(t)));
    return Array.from(tagsSet);
  }, []);

  // Filtered posts for the list view
  const filteredPosts = useMemo(() => {
    const q = (searchQuery || '').trim().toLowerCase();
    return BLOG_POSTS.filter(post => {
      if (!q) {
        return selectedTag === 'all' || (Array.isArray(post.tags) && post.tags.includes(selectedTag));
      }
      const matchesSearch = 
        (post.title && post.title.toLowerCase().includes(q)) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(q)) ||
        (Array.isArray(post.tags) && post.tags.some(t => t && t.toLowerCase().includes(q)));
      
      const matchesTag = selectedTag === 'all' || (Array.isArray(post.tags) && post.tags.includes(selectedTag));

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  // Featured post
  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Helper to find related service objects
  const getRelatedServices = (slugs?: string[]): ServiceItem[] => {
    if (!slugs || slugs.length === 0) return [];
    return ALL_SERVICES.filter(s => slugs.includes(s.slug));
  };

  // ----------------------------------------------------
  // 1. SINGLE BLOG ARTICLE DETAIL VIEW
  // ----------------------------------------------------
  if (currentPost) {
    const relatedServices = getRelatedServices(currentPost.relatedServiceSlugs);
    const relatedPosts = BLOG_POSTS.filter(p => p.id !== currentPost.id).slice(0, 2);
    const officialExternalLinks = getBlogOfficialLinks(currentPost);

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-in fade-in duration-200">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-zinc-400 mb-6 font-medium">
          <button 
            onClick={onNavigateHome}
            className="hover:text-emerald-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <button 
            onClick={() => onSelectPostSlug && onSelectPostSlug(null)}
            className="hover:text-emerald-400 transition-colors"
          >
            Blog &amp; Knowledge Base
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-zinc-200 truncate max-w-xs">{currentPost.title}</span>
        </nav>

        {/* Article Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
              {currentPost.categoryLabel}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>{currentPost.publishedAt}</span>
            </div>
            <span className="text-zinc-700">&bull;</span>
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentPost.readTime}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {currentPost.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            {currentPost.excerpt}
          </p>

          {/* Author Card & Share Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-800">
            <div className="flex items-center gap-3">
              <img 
                src={currentPost.author.avatar} 
                alt={currentPost.author.name}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full border border-zinc-700 object-cover" 
              />
              <div>
                <span className="text-sm font-bold text-white block">{currentPost.author.name}</span>
                <span className="text-xs text-zinc-400 block">{currentPost.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition-all"
              >
                <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{copiedLink ? 'Link Copied!' : 'Share Article'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Cover Image */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 mb-10 shadow-2xl">
          <img 
            src={currentPost.coverImage} 
            alt={currentPost.title}
            referrerPolicy="no-referrer"
            className="w-full h-64 sm:h-96 object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
        </div>

        {/* Formatted Article Body */}
        <div className="prose prose-invert max-w-none space-y-6 text-zinc-200 text-base leading-relaxed">
          {currentPost.content.split('\n\n').map((paragraph, idx) => {
            const trimmed = paragraph.trim();
            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl sm:text-2xl font-bold text-white pt-4 pb-1 border-b border-zinc-800/80 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {trimmed.replace('### ', '')}
                </h3>
              );
            }
            if (trimmed.startsWith('> ')) {
              return (
                <div key={idx} className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200 text-sm italic">
                  {trimmed.replace('> ', '')}
                </div>
              );
            }
            if (trimmed.startsWith('```')) {
              const code = trimmed.replace(/```/g, '').trim();
              return (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-xs text-emerald-400 overflow-x-auto">
                  {code}
                </div>
              );
            }
            if (trimmed.startsWith('|')) {
              // Simple markdown table renderer
              const rows = trimmed.split('\n').filter(r => !r.includes('---'));
              return (
                <div key={idx} className="overflow-x-auto my-4 rounded-xl border border-zinc-800">
                  <table className="w-full text-left text-xs">
                    <tbody>
                      {rows.map((row, rIdx) => {
                        const cols = row.split('|').filter(c => c.trim() !== '');
                        return (
                          <tr key={rIdx} className={rIdx === 0 ? 'bg-zinc-900 font-bold text-emerald-400' : 'border-t border-zinc-800 text-zinc-300'}>
                            {cols.map((col, cIdx) => (
                              <td key={cIdx} className="p-3">
                                {col.trim().replace(/\*\*/g, '')}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            }
            return (
              <p key={idx} className="text-zinc-300 font-normal leading-relaxed">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-zinc-800">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-zinc-500" />
            <span className="text-xs text-zinc-400 font-medium">Topic Tags:</span>
            {currentPost.tags.map(t => (
              <span 
                key={t}
                className="px-2.5 py-1 rounded-lg text-xs bg-zinc-900 text-zinc-300 border border-zinc-800"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Embedded Call-to-Action with Related Services (Internal Cross-Links) */}
        {relatedServices.length > 0 && (
          <section className="mt-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-emerald-500/30 shadow-2xl space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Recommended Verified Services Mentioned in this Guide</span>
              </div>
              <span className="text-[11px] font-bold text-zinc-400 bg-zinc-950/80 px-2.5 py-1 rounded-full border border-zinc-800">
                1-Time Replacement Warranty Included
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white">
              Instant Activation &amp; Safe Delivery Packages
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {relatedServices.map(svc => (
                <a 
                  key={svc.id}
                  href={`/service/${svc.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectService(svc);
                  }}
                  className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 hover:border-emerald-500/50 cursor-pointer group transition-all flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-2 group-hover:border-emerald-500/50 shrink-0 group-hover:scale-105 transition-transform">
                      <BrandIcon name={svc.iconKey} className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors block truncate">
                        {svc.title}
                      </span>
                      <span className="text-xs text-zinc-400 block truncate mt-0.5">
                        From <strong className="text-zinc-200">${svc.startingPrice}</strong> {svc.priceUnit}
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-black transition-all shrink-0 flex items-center gap-1">
                    <span>Order</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Official Platform Authority Citations & External References */}
        {officialExternalLinks.length > 0 && (
          <section className="mt-12 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-850 space-y-4">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
              <ExternalLink className="w-4 h-4" />
              <span>Official External Authority Citations &amp; Policy Guidelines</span>
            </div>
            
            <p className="text-xs text-zinc-400 leading-relaxed">
              The recommendations and technical parameters in this article are aligned with official documentation, security guidelines, and regulatory compliance standards:
            </p>

            <div className="grid grid-cols-1 gap-3 pt-1">
              {officialExternalLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer external"
                  className="group block p-3.5 sm:p-4 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/80 hover:border-sky-500/40 transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {link.badge}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-mono">
                      {link.domain}
                    </span>
                  </div>
                  <h5 className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-300 transition-colors flex items-center gap-1.5">
                    <span>{link.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-sky-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                  </h5>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {link.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Read Next Posts (Internal Blog Links) */}
        {relatedPosts.length > 0 && (
          <div className="mt-14 pt-8 border-t border-zinc-800">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <span>Continue Reading Strategy Guides</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map(post => (
                <a
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onSelectPostSlug) {
                      onSelectPostSlug(post.slug);
                    }
                  }}
                  className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 cursor-pointer group transition-all space-y-2.5 block"
                >
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 inline-block">
                    {post.categoryLabel}
                  </span>
                  <h5 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h5>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="pt-2 text-[11px] text-zinc-500 font-mono flex items-center justify-between border-t border-zinc-800/60">
                    <span>{post.readTime}</span>
                    <span className="text-emerald-400 font-bold group-hover:underline flex items-center gap-1">
                      Read Blueprint &rarr;
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog List & Category Navigation */}
        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => onSelectPostSlug && onSelectPostSlug(null)}
            className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-zinc-200 border border-zinc-700 transition-colors inline-flex items-center gap-2"
          >
            &larr; Back to All Blog Articles
          </button>

          <button
            onClick={onNavigateHome}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow-lg transition-colors inline-flex items-center gap-2"
          >
            <span>Explore All 53 Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    );
  }

  // ----------------------------------------------------
  // 2. MAIN BLOG LIST & HUB VIEW
  // ----------------------------------------------------
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-in fade-in duration-200">
      
      {/* Blog Hub Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <BookOpen className="w-3.5 h-3.5" />
          <span>BLACKACC WORLD KNOWLEDGE BASE &amp; INSIGHTS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Master Digital Reputation, Global Banking &amp; High-Trust Accounts
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Actionable strategic guides, anti-ban hygiene frameworks, and expert walkthroughs on scaling online visibility with non-drop reviews, US business bank accounts, and aged PVA profiles.
        </p>

        {/* Search and Filters */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input 
              type="text"
              placeholder="Search articles, keywords, platforms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-emerald-500 text-xs text-zinc-100 placeholder-zinc-500 outline-none transition-all"
            />
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-zinc-400 hover:text-white"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Category / Tag Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
          <button
            onClick={() => setSelectedTag('all')}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              selectedTag === 'all'
                ? 'bg-emerald-500 text-black font-bold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            All Articles ({BLOG_POSTS.length})
          </button>
          {allTags.slice(0, 6).map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedTag === tag
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Lead Story (Only if no search active) */}
      {!searchQuery && selectedTag === 'all' && featuredPost && (
        <div 
          onClick={() => onSelectPostSlug && onSelectPostSlug(featuredPost.slug)}
          className="mb-12 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/40 cursor-pointer overflow-hidden shadow-2xl group transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase">
                  Featured Masterclass
                </span>
                <span className="text-xs text-zinc-400 font-mono">{featuredPost.publishedAt}</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-white group-hover:text-emerald-400 transition-colors leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-sm text-zinc-300 line-clamp-3 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80">
                <div className="flex items-center gap-2.5">
                  <img 
                    src={featuredPost.author.avatar} 
                    alt={featuredPost.author.name}
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded-full border border-zinc-700 object-cover" 
                  />
                  <div>
                    <span className="text-xs font-bold text-white block">{featuredPost.author.name}</span>
                    <span className="text-[10px] text-zinc-500 block">{featuredPost.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden">
              <img 
                src={featuredPost.coverImage} 
                alt={featuredPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-900 via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>
      )}

      {/* Grid of Articles */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Latest Published Guides ({filteredPosts.length})</span>
          </h3>
          <span className="text-xs text-zinc-500">Updated for 2025 Algorithms</span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/40 rounded-2xl border border-zinc-800">
            <p className="text-sm text-zinc-400 mb-3">No articles found matching your query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag('all');
              }}
              className="px-4 py-2 bg-zinc-800 text-xs font-semibold text-white rounded-xl hover:bg-zinc-700"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <article
                key={post.id}
                onClick={() => onSelectPostSlug && onSelectPostSlug(post.slug)}
                className="rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 overflow-hidden cursor-pointer group transition-all flex flex-col justify-between shadow-lg hover:shadow-2xl"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-zinc-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                        {post.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
                      <span>{post.publishedAt}</span>
                      <span>&bull;</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h4>

                    <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed font-light">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 border-t border-zinc-800/60 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      referrerPolicy="no-referrer"
                      className="w-6 h-6 rounded-full border border-zinc-700 object-cover" 
                    />
                    <span className="text-xs text-zinc-300 font-medium">{post.author.name}</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read &rarr;
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
