import type { Metadata } from 'next';
import TreatmentDetailPage from '../../../components/TreatmentDetailPage';
import { treatmentSeo } from '../../../data/treatmentSeo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ treatmentId: string }>;
}): Promise<Metadata> {
  const { treatmentId } = await params;
  const seo = treatmentSeo[treatmentId];

  if (!seo) {
    return {
      title: 'Treatment Not Found',
      description: 'The requested dental treatment page could not be found.',
    };
  }

  return {
    title: seo.title,
    description: seo.description,
  };
}

export default async function ServiceTreatmentPage({
  params,
}: {
  params: Promise<{ treatmentId: string }>;
}) {
  const { treatmentId } = await params;

  return <TreatmentDetailPage treatmentId={treatmentId} />;
}
