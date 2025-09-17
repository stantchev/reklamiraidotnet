import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Цени за публикуване на статии - Прозрачни пакети | ReklamiRai.net",
  description:
    "Прозрачни цени за публикуване на статии и платено публикуване. Изберете от нашите пакети за онлайн реклама без скрити такси.",
  keywords:
    "цени публикуване статии, платено публикуване, цени SEO статии, пакети онлайн реклама, цени рекламни публикации, месечни пакети статии",
  openGraph: {
    title: "Цени за публикуване на статии - Прозрачни пакети | ReklamiRai.net",
    description:
      "Прозрачни цени за публикуване на статии и платено публикуване. Изберете от нашите пакети за онлайн реклама без скрити такси.",
    url: "https://reklamirai.net/ceni",
    siteName: "ReklamiRai.net",
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Цени за публикуване на статии - Прозрачни пакети | ReklamiRai.net",
    description:
      "Прозрачни цени за публикуване на статии и платено публикуване. Изберете от нашите пакети за онлайн реклама без скрити такси.",
  },
  alternates: {
    canonical: "https://reklamirai.net/ceni",
    languages: {
      "bg-BG": "https://reklamirai.net/ceni",
    },
  },
}

export default function PricingPage() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    name: "Цени за публикуване на статии",
    description: "Прозрачни цени за публикуване на статии и SEO оптимизация",
    priceCurrency: "BGN",
    url: "https://reklamirai.net/ceni",
  }

  const packages = [
    {
      name: "Единична публикация",
      price: "49",
      period: "еднократно",
      description: "Идеално за тестване на платформата",
      features: [
        "1 статия до 800 думи",
        "Основно SEO оптимизиране",
        "Публикуване в рамките на 48 часа",
        "Споделяне в социални мрежи",
        "Базова статистика за четенията",
      ],
      popular: false,
      savings: null,
    },
    {
      name: "Месечен пакет",
      price: "149",
      period: "месечно",
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
      savings: "Спестявате 47 лв месечно",
    },
    {
      name: "Агенционен пакет",
      price: "399",
      period: "месечно",
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
      savings: "Спестявате 189 лв месечно",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />

      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6 text-balance">
              Прозрачни цени за публикуване на статии
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto text-pretty">
              Без скрити такси, без дългосрочни договори. Изберете пакета, който отговаря на вашите нужди за платено
              публикуване и онлайн реклама.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className={`relative border-2 ${
                    pkg.popular ? "border-black shadow-lg scale-105" : "border-gray-200"
                  } hover:shadow-lg transition-all duration-300`}
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
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-black">{pkg.price}</span>
                      <span className="text-gray-600 ml-1">лв</span>
                      <div className="text-sm text-gray-500 mt-1">{pkg.period}</div>
                    </div>
                    {pkg.savings && <div className="text-sm text-green-600 font-medium mb-2">{pkg.savings}</div>}
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

        {/* Price Comparison */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-black text-center mb-12">Сравнение на цените</h2>
            <div className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-medium text-black">Характеристика</th>
                      <th className="px-6 py-4 text-center font-medium text-black">Единична</th>
                      <th className="px-6 py-4 text-center font-medium text-black">Месечен</th>
                      <th className="px-6 py-4 text-center font-medium text-black">Агенционен</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Брой статии</td>
                      <td className="px-6 py-4 text-center">1</td>
                      <td className="px-6 py-4 text-center">4</td>
                      <td className="px-6 py-4 text-center">12</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Дължина на статия</td>
                      <td className="px-6 py-4 text-center">800 думи</td>
                      <td className="px-6 py-4 text-center">800 думи</td>
                      <td className="px-6 py-4 text-center">1200 думи</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">SEO оптимизация</td>
                      <td className="px-6 py-4 text-center">Основна</td>
                      <td className="px-6 py-4 text-center">Разширена</td>
                      <td className="px-6 py-4 text-center">Професионална</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Време за публикуване</td>
                      <td className="px-6 py-4 text-center">48 часа</td>
                      <td className="px-6 py-4 text-center">24 часа</td>
                      <td className="px-6 py-4 text-center">Незабавно</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Персонален мениджър</td>
                      <td className="px-6 py-4 text-center">-</td>
                      <td className="px-6 py-4 text-center">-</td>
                      <td className="px-6 py-4 text-center">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-black text-center mb-12">
              Често задавани въпроси за цените
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-black mb-2">Има ли скрити такси?</h3>
                  <p className="text-gray-600 text-sm">
                    Не, всички наши цени са прозрачни. Няма допълнителни такси за настройка, обработка или други услуги.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-black mb-2">Мога ли да отменя по всяко време?</h3>
                  <p className="text-gray-600 text-sm">
                    Да, можете да отмените абонамента си по всяко време без допълнителни такси или неустойки.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-black mb-2">Предлагате ли отстъпки за годишно плащане?</h3>
                  <p className="text-gray-600 text-sm">
                    Да, предлагаме 15% отстъпка при годишно плащане. Свържете се с нас за повече информация.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-black mb-2">Какво включва SEO оптимизацията?</h3>
                  <p className="text-gray-600 text-sm">
                    Включва анализ на ключови думи, мета описания, структурирани данни и оптимизация за търсачки.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-black mb-2">Мога ли да сменя пакета си?</h3>
                  <p className="text-gray-600 text-sm">
                    Да, можете да повишите или понижите пакета си по всяко време. Промените влизат в сила от следващия
                    цикъл.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-black mb-2">Как се извършва плащането?</h3>
                  <p className="text-gray-600 text-sm">
                    Приемаме всички основни кредитни карти и банкови преводи. Плащането е сигурно и защитено.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Готови да започнете?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Изберете пакета, който отговаря на вашите нужди, и започнете да увеличавате видимостта на вашия бизнес още
              днес.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link href="/publikuvay-statiya">Започнете сега</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Link href="/kontakt">Имате въпроси?</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
