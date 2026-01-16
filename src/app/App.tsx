import { HeroSection } from '@/app/components/HeroSection';
import { PurposeSection } from '@/app/components/PurposeSection';
import { SolutionsSection } from '@/app/components/SolutionsSection';
import { VisualSection } from '@/app/components/VisualSection';
import { TrustSection } from '@/app/components/TrustSection';
import { CTASection } from '@/app/components/CTASection';

export default function App() {
  return (
    <div className="size-full overflow-x-hidden">
      <HeroSection />
      <PurposeSection />
      <SolutionsSection />
      <VisualSection />
      <TrustSection />
      <CTASection />
    </div>
  );
}
