import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Услуги за публикуване на статии и SEO оптимизация | ReklamiRai.net",
  description:
    "Професионални услуги за публикуване на статии, SEO оптимизация и онлайн реклама за българските бизнеси. Увеличете видимостта си онлайн.",
  keywords:
    "услуги за публикуване, SEO статии, онлайн реклама, рекламна платформа, статии за бизнес, линк билдинг чрез статии, реклама на уебсайт",
  openGraph: {
    title: "Услуги за публикуване на статии и SEO оптимизация | ReklamiRai.net",
    description:
      "Професионални услуги за публикуване на статии, SEO оптимизация и онлайн реклама за българските бизнеси. Увеличете видимостта си онлайн.",
    url: "https://reklamirai.net/uslugi",
    siteName: "ReklamiRai.net",
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Услуги за публикуване на статии и SEO оптимизация | ReklamiRai.net",
    description:
      "Професионални услуги за публикуване на статии, SEO оптимизация и онлайн реклама за българските бизнеси. Увеличете видимостта си онлайн.",
  },
  alternates: {
    canonical: "https://reklamirai.net/uslugi",
    languages: {
      "bg-BG": "https://reklamirai.net/uslugi",
    },
  },
}

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Публикуване на статии",
    description: "Професионални услуги за публикуване на статии и онлайн реклама за българските бизнеси",
    provider: {
      "@type": "Organization",
      name: "ReklamiRai.net",
    },
    areaServed: "България",
    availableLanguage: "bg-BG",
    serviceType: "Публикуване на статии и SEO статии",
    url: "https://reklamirai.net/uslugi",
  }

  const packages = [
    {
      name: "Единична публикация",
      price: "49",
      description: "Идеално за тестване на платформата",
      features: [
        "1 статия до 800 думи",
        "Основно SEO оптимизиране",
        "Публикуване в рамките на 48 часа",
        "Споделяне в социални мрежи",
        "Базова статистика за четенията",
      ],
      popular: false,
    },
    {
      name: "Месечен пакет",
      price: "149",
      description: "Най-популярният избор за малки бизнеси",
      features: [
        "4 статии до 800 думи всеки месец",
        "Разширено SEO оптимизиране",
        "Приоритетно публикуване",
        "Активно споделяне в социални мрежи",
        "Подробна статистика и анализи",
        "Консултация с маркетинг експерт",
        "Персонализирани заглавия",
      ],
      popular: true,
    },
    {
      name: "Агенционен пакет",
      price: "399",
      description: "За агенции и големи компании",
      features: [
        "12 статии до 1200 думи всеки месец",
        "Професионално SEO оптимизиране",
        "Незабавно публикуване",
        "Пълна кампания в социални мрежи",
        "Детайлни анализи и отчети",
        "Персонален акаунт мениджър",
        "Брандинг и персонализация",
        "Приоритетна поддръжка 24/7",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6 text-balance">
              Професионални услуги за публикуване на статии
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto text-pretty">
              Увеличете видимостта на вашия бизнес с нашите SEO оптимизирани статии и професионални услуги за онлайн
              реклама.
            </p>
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
              <Link href="/ceni">Вижте цените</Link>
            </Button>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif text-3xl font-bold text-black text-center mb-16">
              Какво предлагаме за вашия бизнес
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader>
                  <CardTitle className="font-serif text-xl font-bold text-black">SEO оптимизирани статии</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Създаваме статии, оптимизирани за търсачки, които подобряват позициите ви в Google и привличат
                    повече клиенти.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-black mr-2" />
                      <span className="text-sm text-gray-700">Ключови думи анализ</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-black mr-2" />
                      <span className="text-sm text-gray-700">Meta описания</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-black mr-2" />
                      <span className="text-sm text-gray-700">Структурирани данни</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader>
                  <CardTitle className="font-serif text-xl font-bold text-black">Линк билдинг чрез статии</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Изграждаме качествени връзки към вашия уебсайт чрез стратегически поставени линкове в статиите.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-black mr-2" />
                      <span className="text-sm text-gray-700">Естествени линкове</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-black mr-2" />
                      <span className="text-sm text-gray-700">Релевантен контекст</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-black mr-2" />
                      <span className="text-sm text-gray-700">Доверени домейни</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-black transition-colors">
                <CardHeader>
                  <CardTitle className="font-serif text-xl font-bold text-black">Реклама на уебсайт</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Промотираме вашия уебсайт и услуги чрез качествено съдържание, което привлича вашата целева
                    аудитория.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-black mr-2" />
                      <span className="text-sm text-gray-700">Целева аудитория</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-black mr-2" />
                      <span className="text-sm text-gray-700">Брандинг</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-black mr-2" />
                      <span className="text-sm text-gray-700">Конверсии</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className={`relative border-2 ${
                    pkg.popular ? "border-black shadow-lg" : "border-gray-200"
                  } hover:shadow-lg transition-shadow`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-black text-white px-4 py-1 text-sm font-medium rounded-full">
                        Най-популярен
                      </span>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8 pt-8">
                    <CardTitle className="font-serif text-xl font-bold text-black mb-2">{pkg.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-black">{pkg.price}</span>
                      <span className="text-gray-600 ml-1">лв</span>
                    </div>
                    <p className="text-gray-600 text-sm">{pkg.description}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className={`w-full ${
                        pkg.popular
                          ? "bg-black text-white hover:bg-gray-800"
                          : "bg-white text-black border-2 border-black hover:bg-gray-50"
                      }`}
                    >
                      <Link href="/publikuvay-statiya">Изберете пакет</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-black text-center mb-16">Как работи процесът</h2>
            <div className="space-y-12">
              <div className="flex items-start">
                <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-black mb-2">Консултация и планиране</h3>
                  <p className="text-gray-600">
                    Анализираме вашия бизнес, целева аудитория и конкуренция, за да създадем персонализирана стратегия
                    за статии за бизнес.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-black mb-2">Създаване на съдържание</h3>
                  <p className="text-gray-600">
                    Нашият екип от експерти създава качествени, SEO оптимизирани статии, които отговарят на нуждите на
                    вашата аудитория.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-black mb-2">Публикуване и промоция</h3>
                  <p className="text-gray-600">
                    Публикуваме статиите на нашата рекламна платформа и ги промотираме в социални мрежи за максимален
                    обхват.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-6 mt-1 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-black mb-2">Анализ и отчети</h3>
                  <p className="text-gray-600">
                    Предоставяме детайлни анализи за ефективността на статиите и препоръки за бъдещи рекламни
                    публикации.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">
              Готови да започнете с професионални услуги за публикуване?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Свържете се с нас днес за безплатна консултация и персонализирана оферта за вашия бизнес.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link href="/ceni">Вижте цените</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Link href="/kontakt">Свържете се с нас</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
