import type { Metadata } from 'next';
import { Signika } from 'next/font/google';
import './globals.css';

const signika = Signika({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Avila Art - Blog',
  description: 'Personal Blog for the artist Avila',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={signika.className}>{children}</body>
    </html>
  );
}
