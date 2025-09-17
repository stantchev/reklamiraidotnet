import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "За нас - Публикуване на статии и реклама чрез статии | ReklamiRai.net",
  description:
    "Научете повече за нашия екип от маркетинг специалисти. Предлагаме качествено публикуване на статии и SEO статии за българските бизнеси.",
  keywords: "публикуване на статии, реклама чрез статии, SEO статии, рекламна платформа, онлайн реклама",
  openGraph: {
    title: "За нас - Публикуване на статии и реклама чрез статии | ReklamiRai.net",
    description:
      "Научете повече за нашия екип от маркетинг специалисти. Предлагаме качествено публикуване на статии и SEO статии за българските бизнеси.",
    url: "https://reklamirai.net/za-nas",
    siteName: "ReklamiRai.net",
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "За нас - Публикуване на статии и реклама чрез статии | ReklamiRai.net",
    description:
      "Научете повече за нашия екип от маркетинг специалисти. Предлагаме качествено публикуване на статии и SEO статии за българските бизнеси.",
  },
  alternates: {
    canonical: "https://reklamirai.net/za-nas",
    languages: {
      "bg-BG": "https://reklamirai.net/za-nas",
    },
  },
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "За нас - ReklamiRai.net",
    description:
      "Научете повече за нашия екип от маркетинг специалисти. Предлагаме качествено публикуване на статии и SEO статии за българските бизнеси.",
    url: "https://reklamirai.net/za-nas",
    inLanguage: "bg-BG",
    isPartOf: {
      "@type": "WebSite",
      name: "ReklamiRai.net",
      url: "https://reklamirai.net",
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-montserrat">
            За нас - Публикуване на статии
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ние сме екип от маркетинг специалисти, които вярват в силата на качественото съдържание за изграждане на
            успешни бизнеси в България чрез реклама чрез статии.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6 font-montserrat">Нашата мисия за онлайн реклама</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Създадохме ReklamiRai.net с цел да помогнем на българските бизнеси да достигнат до своите клиенти чрез
                автентични и полезни статии. Вярваме, че всяка компания има уникална история, която заслужава да бъде
                разказана чрез качествено публикуване на статии.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Нашата рекламна платформа свързва бизнесите с техните потенциални клиенти чрез качествено съдържание,
                което информира, вдъхновява и мотивира към действие. Специализираме се в SEO статии и платено
                публикуване.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-black mb-4 font-montserrat">Защо избрахме този подход?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Автентичността създава доверие
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Полезното съдържание привлича правилните клиенти
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Историите остават в паметта по-дълго от рекламите
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Качественото съдържание се споделя естествено
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black text-center mb-12 font-montserrat">
            Нашите ценности за статии за бизнес
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">К</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 font-montserrat">Качество</h3>
                <p className="text-gray-600 leading-relaxed">
                  Всяка статия преминава през строг редакторски процес, за да гарантираме високо качество на
                  съдържанието и ефективни рекламни публикации.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">П</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 font-montserrat">Прозрачност</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ясни цени, прозрачен процес и честна комуникация с всички наши клиенти и читатели.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">Р</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 font-montserrat">Резултати</h3>
                <p className="text-gray-600 leading-relaxed">
                  Фокусираме се върху създаване на съдържание, което носи реални резултати за бизнесите чрез линк
                  билдинг чрез статии.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-8 font-montserrat">Нашият екип</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Работим с опитни журналисти, маркетинг специалисти и редактори, които разбират българския пазар и знаят как
            да създадат съдържание, което резонира с местната аудитория чрез реклама на уебсайт.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-black mb-4 font-montserrat">Експертиза в:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-2 text-gray-700">
                <li>• Дигитален маркетинг</li>
                <li>• SEO оптимизация</li>
                <li>• Съдържателен маркетинг</li>
                <li>• Социални медии</li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>• Брандинг и позициониране</li>
                <li>• Копирайтинг</li>
                <li>• Анализ на конкуренцията</li>
                <li>• Потребителско изживяване</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6 font-montserrat">Готови да разкажете вашата история?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Нека заедно създадем съдържание, което ще направи вашия бизнес по-видим и успешен.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3">
              <Link href="/publikuvay-statiya">Публикувай статия</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white px-8 py-3 bg-transparent"
            >
              <Link href="/kontakt">Свържи се с нас</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
