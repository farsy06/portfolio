import React, { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';

// Lazy-loaded layout components
const Header = React.lazy(() => import('./Header'));
const Footer = React.lazy(() => import('./Footer'));
const BackToTop = React.lazy(() => import('./BackToTop'));

interface LayoutProps {
  children: React.ReactNode;
}

// Loading skeleton for layout components
const LayoutSkeleton: React.FC = () => (
    <Skeleton className="h-12 w-full" />
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<LayoutSkeleton />}>
        <Header />
      </Suspense>

      <main className="flex-1">
        {children}
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
    </div>
  );
};

export default Layout;
