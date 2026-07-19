import React from 'react';
import { ArrowUpRight, ExternalLink, Star } from 'lucide-react';
import { siteConfig } from '../data/site';

const reviewHighlights = [
  'Consistent 5-star patient feedback',
  'Trusted local dental care in Wakad',
  'Verified Google Business Profile presence',
];

export default function GoogleReviews() {
  return (
    <section className="mx-auto max-w-[1400px] border-t border-gray-100 px-6 py-8 md:px-16 md:py-16">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-12 bg-gray-200"></div>
            <span className="text-xs font-medium uppercase tracking-widest text-[#48b5c4]">Google Reviews</span>
          </div>
          <h2 className="text-3xl font-display font-medium tracking-tight text-gray-900 md:text-[2.75rem] leading-[1.15]">
            See How Patients Rate <span className="text-[#48b5c4]">Prateek Dental Care</span>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] font-light leading-relaxed text-gray-600 md:text-base">
            Explore our Google Business Profile reviews and see what patients are saying about their treatment
            experience, comfort, and care.
          </p>
        </div>

        <a
          href={siteConfig.googleBusiness.reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-full border border-gray-200 px-5 py-3 text-sm font-medium text-gray-900 transition-all hover:border-[#48b5c4] hover:text-[#48b5c4]"
        >
          Read Reviews on Google
          <ExternalLink size={16} />
        </a>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        <a
          href={siteConfig.googleBusiness.reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Google Business Profile reviews for Prateek Dental Care"
          className="group relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-[#f9fafa] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(0,0,0,0.06)] lg:col-span-8"
        >
          <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 transition-colors group-hover:text-[#48b5c4]">
            <ArrowUpRight size={20} />
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 shadow-sm">
              Google Business Profile
            </span>
            <span className="rounded-full bg-[#48b5c4]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#48b5c4]">
              Live Review Source
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-lg font-medium text-gray-900">{siteConfig.name}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="text-5xl font-display font-medium text-gray-900">
                  {siteConfig.googleBusiness.rating}
                </span>
                <div>
                  <div className="flex items-center gap-1 text-[#f4b400]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={18} fill="currentColor" strokeWidth={1.5} />
                    ))}
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-500">{siteConfig.googleBusiness.reviewCount}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {reviewHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-gray-100 bg-white px-4 py-4 text-sm font-medium leading-relaxed text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-gray-100 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">Review Window</p>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-gray-100 bg-[#f9fafa] p-4">
                  <p className="text-sm font-medium text-gray-900">Read patient feedback on Google</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    Open the official Google reviews profile to browse the latest public reviews, ratings, and profile details.
                  </p>
                </div>
                <div className="rounded-2xl border border-dashed border-gray-200 p-4">
                  <p className="text-sm font-medium text-gray-900">Click this review window</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    You will be redirected to the Google Business Profile reviews page in a new tab.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>

        <div className="rounded-[2.5rem] border border-gray-100 bg-gray-900 p-8 text-white lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#48b5c4]">Google Actions</p>
          <h3 className="mt-5 text-2xl font-display font-medium leading-tight">
            Review the clinic directly on Google.
          </h3>
          <p className="mt-4 text-sm font-light leading-relaxed text-gray-300">
            Open the profile to read public reviews, verify business details, and check the live Google presence.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={siteConfig.googleBusiness.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#48b5c4] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#3da3b1]"
            >
              Read Reviews
              <ExternalLink size={16} />
            </a>
            <a
              href={siteConfig.googleBusiness.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Open Business Profile
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
