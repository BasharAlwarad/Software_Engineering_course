import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/contexts/cart-context';
import SiteNavbar from '@/components/site-navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'FakeStore eCommerce',
  description: 'Next.js App Router skeleton with FakeStoreAPI and local cart',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <div className="min-h-screen bg-base-200">
            <SiteNavbar />
            <main className="mx-auto w-full max-w-7xl p-6">{children}</main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
