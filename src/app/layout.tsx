import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Syncra Labs — Custom AI Solutions Built for Your Business',
  description: 'We build ground-up AI agents and custom workflows tailored to your unique needs. No templates, no generic offerings, just pure engineering excellence.',
  openGraph: {
    title: 'Syncra Labs — Custom AI Solutions Built for Your Business',
    description: 'We build ground-up AI agents and custom workflows tailored to your unique needs.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
