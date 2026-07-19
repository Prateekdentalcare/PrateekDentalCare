'use client';

import React, { useState } from 'react';
import { HelpCircle, Minus, Plus } from 'lucide-react';
import { renderLinkedTreatmentText } from './treatmentLinking';

type Faq = {
  q: string;
  a: string;
};

type TreatmentFaqAccordionProps = {
  faqs: Faq[];
  currentHref: string;
};

export default function TreatmentFaqAccordion({
  faqs,
  currentHref,
}: TreatmentFaqAccordionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = activeFaq === idx;

        return (
          <div
            key={idx}
            className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-200"
          >
            <button
              type="button"
              onClick={() => setActiveFaq(isOpen ? null : idx)}
              className="w-full flex items-center justify-between p-6 bg-white text-left text-gray-900 font-display font-semibold text-sm sm:text-base hover:bg-gray-50 transition-colors focus:outline-none"
            >
              <span className="flex items-center gap-3">
                <HelpCircle className="text-[#48b5c4] shrink-0" size={18} />
                {faq.q}
              </span>
              {isOpen ? (
                <Minus size={18} className="text-gray-500 shrink-0" />
              ) : (
                <Plus size={18} className="text-[#48b5c4] shrink-0" />
              )}
            </button>

            {isOpen && (
              <div className="p-6 bg-[#f9fafa] border-t border-gray-50 text-xs sm:text-sm text-gray-600 leading-relaxed font-light animate-in fade-in slide-in-from-top-2 duration-200">
                {renderLinkedTreatmentText(faq.a, currentHref)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
