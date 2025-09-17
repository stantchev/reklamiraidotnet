import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Контакт - Публикуване на статии и онлайн реклама | ReklamiRai.net",
  description:
    "Свържете се с нас за публикуване на статии, SEO статии и платено публикуване. Професионална рекламна платформа за българските бизнеси.",
  keywords: "публикуване на статии, контакт, онлайн реклама, SEO статии, платено публикуване, рекламна платформа",
  openGraph: {
    title: "Контакт - Публикуване на статии и онлайн реклама | ReklamiRai.net",
    description:
      "Свържете се с нас за публикуване на статии, SEO статии и платено публикуване. Професионална рекламна платформа за българските бизнеси.",
    url: "https://reklamirai.net/kontakt",
    siteName: "ReklamiRai.net",
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакт - Публикуване на статии и онлайн реклама | ReklamiRai.net",
    description:
      "Свържете се с нас за публикуване на статии, SEO статии и платено публикуване. Професионална рекламна платформа за българските бизнеси.",
  },
  alternates: {
    canonical: "https://reklamirai.net/kontakt",
    languages: {
      "bg-BG": "https://reklamirai.net/kontakt",
    },
  },
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Контакт - ReklamiRai.net",
    description:
      "Свържете се с нас за публикуване на статии, SEO статии и платено публикуване. Професионална рекламна платформа за българските бизнеси.",
    url: "https://reklamirai.net/kontakt",
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
            Контакт за публикуване на статии
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Имате въпроси или искате да научите повече за нашите услуги за реклама чрез статии? Свържете се с нас - ще
            се радваме да ви помогнем с онлайн реклама!
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black font-montserrat">
                  Изпратете ни съобщение за SEO статии
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-black font-medium">
                      Име *
                    </Label>
                    <Input id="firstName" placeholder="Вашето име" className="border-gray-300 focus:border-black" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-black font-medium">
                      Фамилия *
                    </Label>
                    <Input id="lastName" placeholder="Вашата фамилия" className="border-gray-300 focus:border-black" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black font-medium">
                    Имейл адрес *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="border-gray-300 focus:border-black"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-black font-medium">
                    Телефон
                  </Label>
                  <Input id="phone" type="tel" placeholder="+359 ..." className="border-gray-300 focus:border-black" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-black font-medium">
                    Компания
                  </Label>
                  <Input id="company" placeholder="Име на компанията" className="border-gray-300 focus:border-black" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-black font-medium">
                    Тема на запитването *
                  </Label>
                  <Select>
                    <SelectTrigger className="border-gray-300 focus:border-black">
                      <SelectValue placeholder="Изберете тема" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Общи въпроси</SelectItem>
                      <SelectItem value="pricing">Въпроси за цени</SelectItem>
                      <SelectItem value="article">Публикуване на статия</SelectItem>
                      <SelectItem value="partnership">Партньорство</SelectItem>
                      <SelectItem value="technical">Техническа поддръжка</SelectItem>
                      <SelectItem value="other">Друго</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-black font-medium">
                    Съобщение *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Опишете вашето запитване подробно..."
                    rows={6}
                    className="border-gray-300 focus:border-black resize-none"
                  />
                </div>

                <Button className="w-full bg-black hover:bg-gray-800 text-white py-3">Изпрати съобщение</Button>

                <p className="text-sm text-gray-500 text-center">* Задължителни полета</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black font-montserrat">
                  Информация за контакт - Рекламна платформа
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-bold text-black mb-2">Имейл</h3>
                  <p className="text-gray-700">info@reklamirai.net</p>
                  <p className="text-gray-700">support@reklamirai.net</p>
                </div>

                <div>
                  <h3 className="font-bold text-black mb-2">Телефон</h3>
                  <p className="text-gray-700">+359 2 XXX XXXX</p>
                </div>

                <div>
                  <h3 className="font-bold text-black mb-2">Адрес</h3>
                  <p className="text-gray-700">
                    бул. "Витоша" 1<br />
                    София 1000
                    <br />
                    България
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-black mb-2">Работно време</h3>
                  <p className="text-gray-700">
                    Понеделник - Петък: 9:00 - 18:00
                    <br />
                    Събота - Неделя: Почивни дни
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black font-montserrat">
                  Често задавани въпроси за платено публикуване
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-bold text-black mb-2">Колко време отнема публикуването на статия?</h4>
                  <p className="text-gray-700 text-sm">
                    Обикновено процесът отнема 3-5 работни дни след потвърждение на плащането за рекламни публикации.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-black mb-2">Мога ли да редактирам статията след публикуване?</h4>
                  <p className="text-gray-700 text-sm">
                    Да, можете да поискате промени в рамките на 7 дни след публикуване на статии за бизнес.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-black mb-2">Предлагате ли отстъпки за множество статии?</h4>
                  <p className="text-gray-700 text-sm">
                    Да, имаме специални пакети за компании, които искат да публикуват редовно чрез линк билдинг чрез
                    статии.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-black mb-2">Как мога да проследя резултатите от статията?</h4>
                  <p className="text-gray-700 text-sm">
                    Предоставяме месечни отчети с данни за посещения и взаимодействие за реклама на уебсайт.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-sm bg-gray-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-black mb-4 font-montserrat">Бързи действия</h3>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                    <a href="/publikuvay-statiya">Публикувай статия сега</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-black text-black hover:bg-black hover:text-white bg-transparent"
                  >
                    <a href="/uslugi">Виж цените</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-black text-black hover:bg-black hover:text-white bg-transparent"
                  >
                    <a href="/blog">Прочети примери</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
