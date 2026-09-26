'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { FiSun, FiMoon, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';

/* =========================================================
   NAVIGATION LINKS
   ========================================================= */
const LINKS = [
  { href: '/', label: 'Dashboard' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/watchlist', label: 'Watchlist' },
  { href: '/alerts', label: 'Alerts' },
];

/* =========================================================
   NAVBAR COMPONENT
   ========================================================= */
export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isActive = (href) => {
    return href === '/' ? pathname === '/' : pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-xl dark:border-dark-border dark:bg-dark-background/95">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        
        {/* Brand Logo */}
        <Link href="/" className="group shrink-0">
          <span className="brand-gradient text-xl font-extrabold tracking-tight transition-all duration-300 group-hover:drop-shadow-[0_0_16px_rgba(0,255,255,0.9)]">
            Stock Trade
          </span>
        </Link>

        {/* Desktop Search */}
        <div className="hidden flex-1 justify-center px-6 md:flex">
          <div className="relative w-full max-w-md">
            <FiSearch
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-dark-text-muted"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search stocks..."
              className="h-9 w-full rounded-lg border border-border bg-background pl-10 pr-4 text-sm text-text-main outline-none transition-all duration-200 placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary-light/30 dark:border-dark-border dark:bg-dark-surface dark:text-dark-text-main dark:placeholder:text-dark-text-muted dark:focus:border-primary-light dark:focus:ring-primary-light/20"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? 'text-primary dark:text-primary-light'
                  : 'text-text-muted hover:text-primary dark:text-dark-text-muted dark:hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-primary transition-all duration-200 hover:border-accent hover:bg-accent hover:text-dark-background hover:shadow-[0_0_12px_rgba(0,230,184,0.45)] dark:border-dark-border dark:bg-dark-surface dark:text-primary-light dark:hover:border-accent dark:hover:bg-accent dark:hover:text-dark-background"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Profile Link */}
          <Link
            href="/profile"
            aria-label="Profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-primary transition-all duration-200 hover:border-accent hover:bg-accent hover:text-dark-background hover:shadow-[0_0_12px_rgba(0,230,184,0.45)] dark:border-dark-border dark:bg-dark-surface dark:text-primary-light dark:hover:border-accent dark:hover:bg-accent dark:hover:text-dark-background"
          >
            <FiUser size={18} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-primary transition-all duration-200 hover:border-accent hover:bg-accent hover:text-dark-background dark:border-dark-border dark:bg-dark-surface dark:text-primary-light dark:hover:border-accent dark:hover:bg-accent dark:hover:text-dark-background lg:hidden"
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="border-t border-border bg-surface px-4 pb-4 pt-3 dark:border-dark-border dark:bg-dark-background lg:hidden">
          {/* Mobile Search */}
          <div className="relative mb-3">
            <FiSearch
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-dark-text-muted"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search stocks..."
              className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-4 text-sm text-text-main outline-none placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary-light/30 dark:border-dark-border dark:bg-dark-surface dark:text-dark-text-main dark:placeholder:text-dark-text-muted dark:focus:border-primary-light"
            />
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light'
                    : 'text-text-muted hover:bg-accent/10 hover:text-primary dark:text-dark-text-muted dark:hover:bg-accent/10 dark:hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}