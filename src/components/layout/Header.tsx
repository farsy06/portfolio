import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { Menu, Moon, Sun, Home, Info, Wrench, Award, Folder, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '../ui/sheet';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: Info },
    { href: '#skills', label: 'Skills', icon: Wrench },
    { href: '#achievements', label: 'Achievements', icon: Award },
    { href: '#projects', label: 'Projects', icon: Folder },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-2">
        <div className="flex justify-between items-center h-12">
          <motion.a
            href="#home"
            className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 15,
              duration: 0.3
            }}
          >
            FF
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-primary px-3 py-2 rounded-md group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.05 + 0.2,
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                  duration: 0.3
                }}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative">
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </span>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="relative hover:bg-accent"
            >
              <motion.div
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.div>
            </Button>

            {/* Mobile menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-accent"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0 flex flex-col">
                {/* Header Section */}
                <SheetHeader className="px-6 pt-6 pb-4 space-y-2 border-b">
                  <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
                  <SheetDescription className="text-sm text-muted-foreground">
                    Navigate through our sections
                  </SheetDescription>
                </SheetHeader>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto px-4 py-6">
                  <div className="space-y-1">
                    {navItems.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={i}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-lg transition-all duration-200 group"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          <span>{item.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </nav>

                {/* Footer Section */}
                <div className="px-6 py-4 border-t bg-muted/30">
                  <p className="text-xs text-muted-foreground text-center">
                    {new Date().getFullYear()} Farisya Fatanansyah. All rights reserved.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
