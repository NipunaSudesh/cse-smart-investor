import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'CSE Smart Investor',
  description: 'CSE investment analytics and decision-support platform'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}