import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturedPosts } from "@/components/featured-posts"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ReklamiRai.net - Публикуване на статии и реклама чрез статии",
  description:
    "Професионална рекламна платформа за публикуване на статии. SEO статии, платено публикуване и онлайн реклама за българските бизнеси. Започнете днес!",
  keywords:
    "публикуване на статии, реклама чрез статии, публикувай статия, SEO статии, платено публикуване, онлайн реклама, статии за бизнес, рекламна платформа, рекламни публикации, линк билдинг чрез статии, реклама на уебсайт",
  openGraph: {
    title: "ReklamiRai.net - Публикуване на статии и реклама чрез статии",
    description:
      "Професионална рекламна платформа за публикуване на статии. SEO статии, платено публикуване и онлайн реклама за българските бизнеси. Започнете днес!",
    url: "https://reklamirai.net",
    siteName: "ReklamiRai.net",
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReklamiRai.net - Публикуване на статии и реклама чрез статии",
    description:
      "Професионална рекламна платформа за публикуване на статии. SEO статии, платено публикуване и онлайн реклама за българските бизнеси. Започнете днес!",
  },
  alternates: {
    canonical: "https://reklamirai.net",
    languages: {
      "bg-BG": "https://reklamirai.net",
    },
  },
}

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ReklamiRai.net",
    description: "Професионална рекламна платформа за публикуване на статии в България",
    url: "https://reklamirai.net",
    inLanguage: "bg-BG",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://reklamirai.net/blog?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturedPosts />
      </main>
      <Footer />
    </div>
  )
}
