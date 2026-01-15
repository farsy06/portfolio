import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 text-center text-muted-foreground text-sm border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <p className="font-medium text-foreground">Designed & Built by Farisya Fatanansyah</p>
        <p className="mt-2">Made with ❤️ from Indonesia</p>
        <p className="mt-2">{new Date().getFullYear()} - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
