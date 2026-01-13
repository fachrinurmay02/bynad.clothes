import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { OurStory } from "@/components/our-story"
import { CollectionGrid } from "@/components/collection-grid"
import { OurVision } from "@/components/our-vision"
import { EditorialShowcase } from "@/components/editorial-showcase"
import { NewConcept } from "@/components/new-concept"
import { AboutCasual } from "@/components/about-casual"
import { ProductShowcase } from "@/components/product-showcase"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <OurStory />
      <OurVision />
      <CollectionGrid />
      <EditorialShowcase />
      <Footer />
      {/* <NewConcept />
      <AboutCasual />
      <ProductShowcase /> */}
      
    </main>
  )
}
