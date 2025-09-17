import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
})

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ReklamiRai.net - Публикуване на статии и реклама чрез статии",
  description:
    "Професионална рекламна платформа за публикуване на статии. SEO статии, платено публикуване и онлайн реклама за българските бизнеси.",
  keywords:
    "публикуване на статии, реклама чрез статии, SEO статии, платено публикуване, онлайн реклама, рекламна платформа, статии за бизнес, рекламни публикации, линк билдинг чрез статии, реклама на уебсайт",
  authors: [{ name: "ReklamiRai.net" }],
  creator: "ReklamiRai.net",
  publisher: "ReklamiRai.net",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://reklamirai.net"),
  alternates: {
    canonical: "/",
    languages: {
      "bg-BG": "/",
    },
  },
  openGraph: {
    title: "ReklamiRai.net - Публикуване на статии и реклама чрез статии",
    description:
      "Професионална рекламна платформа за публикуване на статии. SEO статии, платено публикуване и онлайн реклама за българските бизнеси.",
    url: "https://reklamirai.net",
    siteName: "ReklamiRai.net",
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReklamiRai.net - Публикуване на статии и реклама чрез статии",
    description:
      "Професионална рекламна платформа за публикуване на статии. SEO статии, платено публикуване и онлайн реклама за българските бизнеси.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ReklamiRai.net",
    description: "Професионална рекламна платформа за публикуване на статии в България",
    url: "https://reklamirai.net",
    logo: "https://reklamirai.net/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+359-2-XXX-XXXX",
      contactType: "customer service",
      availableLanguage: "Bulgarian",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "бул. Витоша 1",
      addressLocality: "София",
      postalCode: "1000",
      addressCountry: "BG",
    },
    sameAs: ["https://facebook.com/reklamirai", "https://linkedin.com/company/reklamirai"],
  }

  return (
    <html lang="bg" hrefLang="bg-BG">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={`font-sans ${montserrat.variable} ${roboto.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
