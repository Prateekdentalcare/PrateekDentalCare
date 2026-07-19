import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import { siteConfig, toAbsoluteUrl } from '../../data/site';
import teeth1Image from '../../assets/teeth1.webp';
import teeth2Image from '../../assets/teeth2.webp';
import teeth3Image from '../../assets/teeth3.webp';
import freeDentalCheckUpImage from '../../assets/freeDentalCheckUp.webp';
import hoardingImage from '../../assets/hoarding.webp';
import interiorImage from '../../assets/interior.webp';
import clinic2Image from '../../assets/clinic2.webp';
import implant1Image from '../../assets/implant1.webp';
import implant2Image from '../../assets/inmplant2.webp';

export const metadata: Metadata = {
  title: 'Dental Clinic Gallery in Wakad, Pune',
  description:
    'View the Prateek Dental Care gallery in Wakad, Pune, including clinic interiors, patient areas, smile treatment highlights, dental implant cases, and care experiences from nearby areas.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Dental Clinic Gallery in Wakad, Pune',
    description:
      'Explore our dental clinic gallery in Wakad, Pune with treatment spaces, clinic interiors, implant cases, and patient care highlights.',
    url: '/gallery',
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/gallery-og.jpg'),
        width: 1200,
        height: 630,
        alt: 'Prateek Dental Care gallery preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Clinic Gallery in Wakad, Pune',
    description:
      'Explore clinic interiors, treatment spaces, and smile care highlights from Prateek Dental Care in Wakad, Pune.',
    images: [toAbsoluteUrl('/gallery-og.jpg')],
  },
};

const galleryImages = [
  {
    url: teeth2Image,
    title: 'Scaling Before & After',
    category: 'Smile Results',
    description: 'Professional cleaning results showing clearer enamel surfaces and improved overall smile presentation.',
  },
  {
    url: teeth1Image,
    title: 'Tooth Restoration Before & After',
    category: 'Smile Results',
    description: 'Restorative dental work focused on improving tooth appearance, structure, and smile balance.',
  },
  {
    url: teeth3Image,
    title: 'Crowding Correction Before & After',
    category: 'Smile Results',
    description: 'Visible smile alignment improvement that reflects the clinic’s orthodontic and smile-correction approach.',
  },
  {
    url: freeDentalCheckUpImage,
    title: 'Free Dental Checkup Camp',
    category: 'Community Care',
    description: 'A snapshot of community-facing dental care and oral health outreach activity.',
  },
  {
    url: hoardingImage,
    title: 'Clinic Hoarding',
    category: 'Clinic Presence',
    description: 'The clinic’s visible local presence for patients visiting from Wakad and nearby Pune areas.',
  },
  {
    url: interiorImage,
    title: 'Patient Waiting Lounge',
    category: 'Clinic Interior',
    description: 'A comfortable patient waiting space designed for a calm and welcoming clinic experience.',
  },
  {
    url: clinic2Image,
    title: 'Treatment Room Interior',
    category: 'Clinic Interior',
    description: 'Modern treatment space that reflects the clinic’s focus on hygiene, comfort, and organized care.',
  },
  {
    url: implant1Image,
    title: 'Dental Implant X-Ray',
    category: 'Implant Cases',
    description: 'Implant case imagery that highlights precise restorative planning and treatment support.',
  },
  {
    url: implant2Image,
    title: 'Implant Placement X-Ray',
    category: 'Implant Cases',
    description: 'Clinical implant placement visual demonstrating advanced dental implant treatment work.',
  },
];

export default function GalleryPage() {
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Prateek Dental Care Gallery',
    description:
      'Image gallery of Prateek Dental Care in Wakad, Pune featuring clinic interiors, dental treatment highlights, and implant cases.',
    url: toAbsoluteUrl('/gallery'),
    about: {
      '@type': 'Dentist',
      name: siteConfig.name,
      areaServed: [...siteConfig.areaServed, 'Hinjewadi', 'Tathawade', 'Punawale', 'Baner'],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <div className="relative rounded-b-[3rem] bg-gray-900 pb-12">
        <Navbar />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-32 pb-20 text-center md:px-16">
          <h1 className="mb-6 font-display text-4xl font-medium text-white md:text-5xl lg:text-6xl">
            Our <span className="text-[#48b5c4]">Gallery</span>
          </h1>
          <p className="mx-auto max-w-3xl text-[15px] font-light leading-relaxed text-gray-300">
            Explore our dental clinic gallery in Wakad, Pune and view treatment spaces, patient areas, smile care
            highlights, and dental implant cases from Prateek Dental Care.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-16 md:py-24">
        <section className="mb-16 grid gap-8 rounded-[2.5rem] border border-gray-100 bg-[#f9fafa] p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-[#48b5c4]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#48b5c4]">
              Clinic Experience
            </div>
            <h2 className="max-w-2xl font-display text-3xl font-medium leading-[1.15] text-gray-900 md:text-4xl">
              A closer look at our clinic environment, treatment results, and patient-focused dental care.
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-light leading-relaxed text-gray-600 md:text-base">
              This gallery gives patients from Wakad, Hinjewadi, Tathawade, Punawale, Baner, and nearby Pune areas a
              clearer view of our clinic setup, treatment spaces, smile care results, and implant planning visuals
              before their visit.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            <div className="rounded-[2rem] border border-gray-100 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">What You’ll See</p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-gray-700">
                Clinic interiors, waiting spaces, treatment highlights, community activity, and smile result visuals.
              </p>
            </div>
            <div className="rounded-[2rem] border border-gray-100 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Local Relevance</p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-gray-700">
                Designed for patients searching for a trusted dental clinic in Wakad, Pune and nearby residential areas.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 flex flex-wrap gap-3">
          {['Clinic Interior', 'Smile Results', 'Implant Cases', 'Community Care', 'Clinic Presence'].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500"
            >
              {tag}
            </span>
          ))}
        </section>

        <h2 className="sr-only">Gallery Images</h2>
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.title}
              className="gallery-item group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.url}
                  alt={`${image.title} - ${image.description}`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-600 shadow-sm backdrop-blur-sm">
                  {image.category}
                </div>
              </div>

              <div className="space-y-3 p-6">
                <h3 className="font-display text-xl font-medium leading-snug text-gray-900">{image.title}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-[2.5rem] border border-gray-100 bg-gray-900 px-8 py-10 text-white md:px-12">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-medium leading-tight md:text-4xl">
                Visit our dental clinic in <span className="text-[#48b5c4]">Wakad, Pune</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm font-light leading-relaxed text-gray-300 md:text-base">
                If you are looking for a private dental clinic near Wakad, Hinjewadi, Tathawade, Punawale, Baner, or
                nearby Pune neighborhoods, this gallery gives you a real preview of our treatment environment before
                your appointment.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#48b5c4]">Gallery Summary</p>
              <ul className="mt-4 space-y-3 text-sm font-medium text-gray-200">
                <li>Modern clinic interior and waiting lounge visuals</li>
                <li>Smile care and restorative treatment highlights</li>
                <li>Dental implant case imagery and clinical snapshots</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

