import { HeroSection } from '@/app/components/HeroSection';
import { PurposeSection } from '@/app/components/PurposeSection';
import { SolutionsSection } from '@/app/components/SolutionsSection';
import { VisualSection } from '@/app/components/VisualSection';
import { TrustSection } from '@/app/components/TrustSection';
import { CTASection } from '@/app/components/CTASection';
import { PageLayout } from '@/app/components/layout';

export function Home() {
  return (
    <PageLayout showParallax={false}>
      <HeroSection />
      <PurposeSection />
      <SolutionsSection />
      <VisualSection />
      <TrustSection />
      <CTASection />
    </PageLayout>
  );
}
