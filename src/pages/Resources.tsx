import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, CATEGORIES } from '../content/posts';

export const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-mono text-[9px] text-accent-amber border border-accent-amber/20 bg-accent-amber/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Library
        </span>
        <h1 className="text-2xl md:text-4xl font-bold font-mono text-dicom-bone">
          Maxillofacial Centre Operations Guides
        </h1>
        <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
          Pillar articles, operations analyses, and referral growth guidelines written for CBCT centre owners and dental imaging specialists.
        </p>
      </div>

      {/* Category Filter Tags */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-dicom-border/50 pb-6 max-w-2xl mx-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded font-mono text-[10px] border transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-accent-amber/10 border-accent-amber text-accent-amber font-bold'
                : 'bg-transparent border-dicom-border text-neutral-500 hover:text-dicom-bone'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredPosts.map((post) => (
          <div key={post.slug} className="bg-dicom-dark border border-dicom-border p-6 rounded-lg flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[9px] font-mono text-neutral-500">
                <span className="text-accent-amber font-bold">{post.category}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>
              
              <h3 className="text-sm font-bold font-mono text-dicom-bone leading-snug">
                {post.title}
              </h3>
              
              <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                {post.summary}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-dicom-border/50 flex justify-between items-center text-[10px] font-mono">
              <span className="text-neutral-500">{post.date}</span>
              <Link
                to={`/resources/${post.slug}`}
                className="text-accent-amber hover:underline flex items-center gap-1 font-bold"
              >
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
export default Resources;
