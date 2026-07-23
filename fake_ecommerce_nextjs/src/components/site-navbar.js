'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/cart-context';

export default function SiteNavbar() {
  const { itemCount } = useCart();

  return (
    <header className="navbar bg-base-100 border-b border-base-300 px-6">
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold">
          FakeStore
        </Link>
      </div>
      <nav className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/signup">Signup</Link>
          </li>
          <li>
            <Link href="/cart" className="gap-2">
              Cart
              <span className="badge badge-primary badge-sm">{itemCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
