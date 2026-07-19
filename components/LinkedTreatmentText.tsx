import React from 'react';
import { renderLinkedTreatmentText } from './treatmentLinking';

type LinkedTreatmentTextProps = {
  text: string;
  currentHref?: string;
};

export default function LinkedTreatmentText({ text, currentHref }: LinkedTreatmentTextProps) {
  return <>{renderLinkedTreatmentText(text, currentHref)}</>;
}
