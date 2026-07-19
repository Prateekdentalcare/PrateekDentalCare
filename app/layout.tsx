import type { Metadata } from 'next';
import './globals.css';
import Footer from '../components/Footer';
import HashScrollHandler from '../components/HashScrollHandler';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { siteConfig } from '../data/site';

export const metadata: Metadata = {
  title: {
    default: 'Prateek Dental Care',
    template: '%s | Prateek Dental Care',
  },
  description:
    'Prateek Dental Care offers modern dental treatments, implants, orthodontics, and preventive care in Wakad, Pune.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dentistSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address,
    },
    areaServed: siteConfig.areaServed,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.openingHours.map((entry) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${entry.dayOfWeek}`,
      opens: entry.opens,
      closes: entry.closes,
    })),
  };

  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="font-sans text-gray-900 selection:bg-[#48b5c4]/20 selection:text-gray-900"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
        <div className="min-h-screen bg-white">
          <HashScrollHandler />
          <WhatsAppFloat />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
