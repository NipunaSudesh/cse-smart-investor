import './globals.css';
import Navbar from '@/components/Navbar';
import Providers from './providers';

export const metadata = {
  title: 'Stock Trade',
  description: 'Smart investing platform for CSE investors',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}