import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../content/posts';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-md mx-auto py-20 text-center font-mono space-y-4">
        <h2 className="text-lg font-bold text-accent-amber">Article Not Found</h2>
        <p className="text-xs text-neutral-400 font-sans">The requested guide could not be located in our repository.</p>
        <button 
          onClick={() => navigate('/resources')} 
          className="text-xs text-dicom-bone bg-dicom-gray border border-dicom-border px-4 py-2 rounded font-mono hover:bg-dicom-border transition-all"
        >
          Back to Library
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
        <Link to="/resources" className="hover:text-dicom-bone">Library</Link>
        <ChevronRight className="w-2.5 h-2.5" />
        <span className="text-accent-amber font-bold">{post.category}</span>
      </div>

      {/* Header Info */}
      <div className="space-y-4 border-b border-dicom-border pb-6">
        <h1 className="text-xl md:text-3xl font-bold font-mono text-dicom-bone leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] text-neutral-500">
          <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {post.author}</span>
          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
        </div>
      </div>

      {/* Article Content Body */}
      <div 
        className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed space-y-6 prose prose-invert max-w-none
          prose-headings:font-mono prose-headings:text-dicom-bone prose-headings:font-bold
          prose-h3:text-sm prose-h3:uppercase prose-h3:tracking-wider prose-h3:text-accent-amber prose-h3:mt-8 prose-h3:mb-3
          prose-h4:text-xs prose-h4:uppercase prose-h4:text-dicom-bone prose-h4:mt-6 prose-h4:mb-2
          prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
          prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
          prose-strong:text-dicom-bone prose-strong:font-semibold
          prose-a:text-accent-amber prose-a:underline hover:prose-a:opacity-80"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {/* Back button footer */}
      <div className="pt-8 border-t border-dicom-border flex">
        <Link
          to="/resources"
          className="inline-flex items-center gap-1.5 font-mono text-[10px] text-neutral-500 hover:text-dicom-bone transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Library
        </Link>
      </div>

    </article>
  );
};
export default BlogPost;
