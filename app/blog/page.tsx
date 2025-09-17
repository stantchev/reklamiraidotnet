import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function BlogPage() {
  // Mock data for blog articles in Bulgarian
  const articles = [
    {
      id: 1,
      title: "Как да увеличите продажбите с качествен маркетинг",
      excerpt:
        "Научете най-ефективните стратегии за привличане на клиенти чрез съдържание и изградете силна връзка с вашата аудитория.",
      image: "/business-marketing-bulgarian.jpg",
      date: "15 Декември 2024",
      category: "Маркетинг",
      readTime: "5 мин четене",
    },
    {
      id: 2,
      title: "Дигиталният маркетинг в България - тенденции 2025",
      excerpt:
        "Какво очакват българските потребители от брандовете в новата година и как да се адаптирате към промените.",
      image: "/digital-marketing-trends-bulgaria.jpg",
      date: "12 Декември 2024",
      category: "Тенденции",
      readTime: "7 мин четене",
    },
    {
      id: 3,
      title: "Успешни примери за малки бизнеси в София",
      excerpt:
        "Истории за успех от местни предприемачи, които са постигнали растеж чрез иновативни маркетингови стратегии.",
      image: "/small-business-success-sofia-bulgaria.jpg",
      date: "10 Декември 2024",
      category: "Успех",
      readTime: "6 мин четене",
    },
    {
      id: 4,
      title: "SEO оптимизация за български сайтове",
      excerpt:
        "Практически съвети за подобряване на позициите в Google за българския пазар и увеличаване на органичния трафик.",
      image: "/seo-optimization-bulgarian-websites.jpg",
      date: "8 Декември 2024",
      category: "SEO",
      readTime: "8 мин четене",
    },
    {
      id: 5,
      title: "Социални мрежи за бизнес в България",
      excerpt: "Как да използвате Facebook, Instagram и LinkedIn за развитие на вашия бизнес на българския пазар.",
      image: "/social-media-business-bulgaria.jpg",
      date: "5 Декември 2024",
      category: "Социални мрежи",
      readTime: "4 мин четене",
    },
    {
      id: 6,
      title: "Email маркетинг стратегии за 2025",
      excerpt: "Модерни подходи за email кампании, които генерират резултати и изграждат лоялност сред клиентите.",
      image: "/email-marketing-strategies-2025.jpg",
      date: "3 Декември 2024",
      category: "Email маркетинг",
      readTime: "6 мин четене",
    },
    {
      id: 7,
      title: "Брандинг за стартъпи в България",
      excerpt: "Как да изградите силен бранд от самото начало и да се отличите на конкурентния български пазар.",
      image: "/branding-startups-bulgaria.jpg",
      date: "1 Декември 2024",
      category: "Брандинг",
      readTime: "5 мин четене",
    },
    {
      id: 8,
      title: "Анализ на конкуренцията в дигиталната среда",
      excerpt: "Инструменти и методи за проучване на конкуренцията и намиране на възможности за растеж.",
      image: "/competitor-analysis-digital.jpg",
      date: "28 Ноември 2024",
      category: "Анализ",
      readTime: "7 мин четене",
    },
    {
      id: 9,
      title: "Съдържание, което продава",
      excerpt: "Как да създавате съдържание, което не само информира, но и мотивира клиентите да предприемат действие.",
      image: "/content-that-sells.jpg",
      date: "25 Ноември 2024",
      category: "Съдържание",
      readTime: "6 мин четене",
    },
  ]

  const categories = ["Всички", "Маркетинг", "SEO", "Социални мрежи", "Брандинг", "Тенденции"]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6 text-balance">
              Блог за маркетинг и бизнес
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
              Полезни съвети, стратегии и анализи за развитие на вашия бизнес в дигиталната среда.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 border-b">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "Всички" ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 ${
                    category === "Всички"
                      ? "bg-black text-white hover:bg-gray-800"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="border border-gray-200 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-black text-white">{article.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <CardTitle className="font-serif text-lg font-bold text-black mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                      {article.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                    <Link
                      href={`/blog/${article.id}`}
                      className="text-black font-medium hover:text-gray-600 transition-colors text-sm inline-flex items-center"
                    >
                      Прочети повече
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-white text-black border-2 border-black px-8 py-3 font-medium hover:bg-gray-50 transition-colors">
                Зареди още статии
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-bold text-black mb-4">Абонирайте се за нашия бюлетин</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Получавайте най-новите статии и съвети за маркетинг директно в пощенската си кутия.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Вашият email адрес"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Абонирай се
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
