import React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';

const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'A Week in the Villages of Uganda',
    excerpt: 'Our recent medical mission brought much-needed supplies and care to three remote villages. The smiles we received were our greatest reward.',
    imageUrl: 'https://picsum.photos/seed/uganda/800/600',
    author: 'Jane Doe',
    date: 'Oct 15, 2023',
  },
  {
    id: 2,
    title: 'Building Hope in Haiti',
    excerpt: 'The new school building is finally complete! Read about the journey, the challenges, and the incredible community that made it all possible.',
    imageUrl: 'https://picsum.photos/seed/haiti/800/600',
    author: 'John Smith',
    date: 'Sep 28, 2023',
  },
  {
    id: 3,
    title: 'Water for Life in the Andes',
    excerpt: 'A clean water project is transforming a community in the Peruvian Andes. See the impact of bringing this essential resource to those in need.',
    imageUrl: 'https://picsum.photos/seed/peru/800/600',
    author: 'Emily White',
    date: 'Sep 05, 2023',
  },
];

const LandingPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/8948348/pexels-photo-8948348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
      >
        <div className="absolute inset-0 bg-brand-dark opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">Sharing Hope Across Borders</h2>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Join us on a journey of faith, service, and transformation. Discover stories from the field and see how you can make a difference.
          </p>
          <Link to="/trips" className="mt-8 inline-block bg-brand-accent text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300">
            Explore Our Missions
          </Link>
        </div>
      </section>

      {/* Our Calling Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-brand-primary mb-4">Our Calling</h3>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            We are dedicated to demonstrating God's love in tangible ways. Through medical aid, education, community development, and sharing the Gospel, we strive to bring hope and healing to communities in need around the world. Every trip is a step of faith, and every story is a testament to His grace.
          </p>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-brand-primary mb-8 text-center">Latest Updates from the Field</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockBlogPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;