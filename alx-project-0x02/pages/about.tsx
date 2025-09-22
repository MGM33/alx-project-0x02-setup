import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* About Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About This Project
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This project demonstrates modern React development practices, showcasing reusable components, TypeScript integration, and API data fetching.
          </p>
        </div>

        {/* Button Showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Button Component Showcase</h2>
          <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-soft)] border border-border">
            
            {/* Sizes */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Different Sizes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="small" variant="primary">Small Button</Button>
                <Button size="medium" variant="primary">Medium Button</Button>
                <Button size="large" variant="primary">Large Button</Button>
              </div>
            </div>

            {/* Shapes */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Different Shapes</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button shape="rounded-sm" variant="accent">Sharp Corners</Button>
                <Button shape="rounded-md" variant="accent">Rounded Corners</Button>
                <Button shape="rounded-full" variant="accent">Pill Shape</Button>
              </div>
            </div>

            {/* Variants */}
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Different Variants</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="default">Default</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="hero">Hero</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Technology Stack"
            content="Built with React 18, TypeScript, Tailwind CSS, and React Router. Uses modern hooks and functional components for optimal performance."
          />
          <Card
            title="Component Architecture"
            content="Follows atomic design principles with reusable components, proper TypeScript interfaces, and consistent styling patterns."
          />
          <Card
            title="API Integration"
            content="Demonstrates data fetching from JSONPlaceholder API with proper loading states, error handling, and responsive design."
          />
          <Card
            title="Design System"
            content="Implements a cohesive design system with semantic color tokens, consistent spacing, and beautiful animations for enhanced UX."
          />
          <Card
            title="Best Practices"
            content="Showcases React best practices including custom hooks, proper state management, accessibility considerations, and performance optimization."
          />
          <Card
            title="Learning Path"
            content="Perfect for developers learning modern React patterns, TypeScript integration, and building scalable component libraries."
          />
        </div>
      </main>
    </div>
  );
};

export default About;