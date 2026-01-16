import { HeroIntro } from '@/app/components/HeroIntro';
import { WhyInternetSection } from '@/app/components/WhyInternetSection';
import { PurposeSection } from '@/app/components/PurposeSection';
import { WhyInG3Section } from '@/app/components/WhyInG3Section';
import { SolutionsSection } from '@/app/components/SolutionsSection';
import { VisualSection } from '@/app/components/VisualSection';
import { TrustSection } from '@/app/components/TrustSection';
import { CTASection } from '@/app/components/CTASection';
import { Footer } from '@/app/components/layout';
import { StickyNav } from '@/app/components/layout/StickyNav';
import { ParallaxBackground } from '@/app/components/ParallaxBackground';

export function Home() {
  return (
    <div className="relative min-h-screen">
      <ParallaxBackground />
      <StickyNav showAfterScroll={500} />
      
      {/* Hero intro - full screen entrance */}
      <HeroIntro />
      
      {/* Main content starts here - navigation scrolls to this */}
      <main id="content-start">
        <WhyInternetSection />
        <PurposeSection />
        <WhyInG3Section />
        <SolutionsSection />
        <VisualSection />
        <TrustSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
