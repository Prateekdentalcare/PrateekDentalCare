import React from 'react';

export default function Process() {
  const steps = [
    'Smile Assessment',
    'Care Planning',
    'Treatment Process',
    'Dental Maintenance'
  ];

  return (
    <div className="px-8 md:px-16 py-4 md:py-6 max-w-[1400px] mx-auto hidden md:flex items-center justify-between text-xs text-gray-500 font-medium">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <span className={index === 0 ? "text-gray-900 font-semibold" : ""}>{step}</span>
          {index < steps.length - 1 && (
            <div className="flex-1 mx-4 flex items-center">
              <div className="w-full border-t-2 border-dotted border-gray-200"></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
