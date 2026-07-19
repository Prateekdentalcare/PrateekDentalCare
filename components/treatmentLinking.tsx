import React from 'react';
import Link from 'next/link';

const treatmentLinkEntries = [
  { href: '/services/root-canal', aliases: ['Root Canal Treatment', 'root canal treatment', 'RCT', 'root canal', 'root canal therapy'] },
  { href: '/services/implants', aliases: ['Dental Implants', 'dental implants', 'dental implant', 'implants', 'implant'] },
  { href: '/services/kids-dentistry', aliases: ['Kids Dentistry', 'kids dentistry', 'Pediatric Dentistry', 'pediatric dentistry'] },
  { href: '/services/orthodontics', aliases: ['Orthodontic Treatment', 'orthodontic treatment', 'orthodontics', 'braces', 'aligners', 'clear aligners'] },
  { href: '/services/wisdom-teeth', aliases: ['Wisdom Teeth Removal', 'wisdom teeth removal', 'Wisdom Tooth Removal', 'wisdom tooth removal', 'wisdom tooth extraction', 'wisdom teeth extraction'] },
  { href: '/services/tooth-extraction', aliases: ['Tooth Extraction', 'tooth extraction', 'Extractions', 'extractions', 'extraction'] },
  { href: '/services/dental-fillings', aliases: ['Dental Fillings', 'dental fillings', 'filling', 'fillings'] },
  { href: '/services/scaling-polishing', aliases: ['Scaling and Polishing', 'scaling and polishing'] },
  { href: '/services/dentures', aliases: ['Dentures', 'dentures', 'denture'] },
  { href: '/services/bridges-crowns-veneers', aliases: ['Bridges, Crowns, and Veneers', 'bridges, crowns, and veneers', 'crowns', 'Crowns', 'bridges', 'Bridges', 'veneers', 'Veneers', 'dental crown', 'dental crowns', 'bridge', 'Bridge', 'veneer', 'Veneer'] },
  { href: '/services/smile-makeover-teeth-whitening', aliases: ['Smile Makeover & Teeth Whitening', 'smile makeover & teeth whitening', 'Smile Makeover', 'smile makeover', 'Teeth Whitening', 'teeth whitening', 'whitening'] },
  { href: '/services/preventive-dentistry', aliases: ['Preventive Dentistry', 'preventive dentistry', 'preventive care'] }
] as const;

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export function renderLinkedTreatmentText(text: string, currentHref?: string) {
  const candidates = treatmentLinkEntries
    .filter((entry) => entry.href !== currentHref)
    .flatMap((entry) => entry.aliases.map((alias) => ({ alias, href: entry.href })))
    .sort((a, b) => b.alias.length - a.alias.length);

  if (candidates.length === 0) {
    return text;
  }

  const pattern = new RegExp(`\\b(${candidates.map(({ alias }) => escapeRegExp(alias)).join('|')})\\b`, 'gi');
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    const [matchedText] = match;
    const matchIndex = match.index;

    if (matchIndex > lastIndex) {
      parts.push(text.slice(lastIndex, matchIndex));
    }

    const candidate = candidates.find(({ alias }) => alias.toLowerCase() === matchedText.toLowerCase());

    if (candidate) {
      parts.push(
        <Link
          key={`${candidate.href}-${matchIndex}-${matchedText}`}
          href={candidate.href}
          className="font-medium text-[#48b5c4] hover:text-[#3da3b1] transition-colors"
        >
          {matchedText}
        </Link>
      );
    } else {
      parts.push(matchedText);
    }

    lastIndex = matchIndex + matchedText.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}
