import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import PostModal from '@/components/common/PostModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<Array<{ title: string; content: string }>>([]);

  const handleAddPost = (post: { title: string; content: string }) => {
    setUserPosts(prev => [...prev, post]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome to React Learning
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Master modern React development with TypeScript, reusable components, API integration, and best practices.
          </p>
          
          <div className="mt-8 flex gap-4 justify-center flex-wrap">
            <Button 
              variant="hero" 
              size="large"
              onClick={() => setIsModalOpen(true)}
            >
              Create New Post
            </Button>
            <Button variant="secondary" size="large">
              Explore Components
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card
            title="Reusable Components"
            content="Learn to build modular, reusable components with TypeScript interfaces and proper prop validation for maintainable code."
          />
          <Card
            title="API Integration"
            content="Fetch and display data from external APIs using modern React patterns and handle loading states gracefully."
          />
          <Card
            title="Modern Routing"
            content="Implement client-side routing with React Router for seamless navigation between different views and pages."
          />
          <Card
            title="TypeScript Best Practices"
            content="Write type-safe code with proper interfaces, ensuring better developer experience and fewer runtime errors."
          />
          <Card
            title="Responsive Design"
            content="Create beautiful, responsive layouts using Tailwind CSS and modern design principles that work on all devices."
          />
          <Card
            title="Interactive UI"
            content="Build engaging user interfaces with modals, forms, and interactive components that provide excellent user experience."
          />
        </div>

        {/* User Created Posts */}
        {userPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Your Created Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userPosts.map((post, index) => (
                <Card
                  key={index}
                  title={post.title}
                  content={post.content}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPost={handleAddPost}
      />
    </div>
  );
};

export default Home;