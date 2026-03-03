'use client';
import Link from 'next/link';

const nav = () => {
  console.log('im client');

  return (
    <nav className="p-4 bg-gray-100">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-blue-600 hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
