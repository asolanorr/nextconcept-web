import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yournextconcept.com'),
  keywords: [
    'Software development services',
    'Outsourcing software development',
    'Custom software solutions',
    'Web and mobile app development',
    'Professional software developers',
    'Next Concept software outsourcing',
    'Bring your concept to life',
    'High-quality software solutions',
    'Full-stack development outsourcing',
    'Tailored software development Costa Rica',
    'Affordable software development',
    'Front-end and UI development services',
    'UX/UI design and coding services',
    'Robust web application development',
    'Cost-effective software development',
    'React and Vue development experts',
    'Next.js and TypeScript projects',
    'Custom .NET backend solutions',
    'Full-stack app development company',
    'Software development services in Costa Rica',
    'Latin America software outsourcing',
    'Nearshore development company',
  ],
  title: 'Next Concept - Bring Your Concept to Life',
  description:
    'Next Concept offers high-quality, custom software development services. From front-end design to robust web applications, we bring your ideas to life with tailored solutions.',
  openGraph: {
    title: 'Next Concept - Bring Your Concept to Life',
    description:
      'Next Concept offers high-quality, custom software development services. From front-end design to robust web applications, we bring your ideas to life with tailored solutions.',
    url: 'https://yournextconcept.com',
    type: 'website',
    images: [
      {
        url: 'https://yournextconcept.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Next Concept Logo and Slogan',
      },
    ],
    siteName: 'Next Concept',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>{children}</body>
    </html>
  );
}
