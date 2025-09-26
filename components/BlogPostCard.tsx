
import React from 'react';
import { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
      <img className="w-full h-48 object-cover" src={post.imageUrl} alt={post.title} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-primary mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
        <div className="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
          <span>By {post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
