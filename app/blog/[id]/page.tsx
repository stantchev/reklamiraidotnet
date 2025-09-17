import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"

// This would typically come from a CMS or database
async function getArticle(id: string) {
  // Mock article data
  const articles = {
    "1": {
      id: 1,
      title: "Как да увеличите продажбите с качествен маркетинг",
      content: `
        <p>Качественият маркетинг е основата на всеки успешен бизнес. В днешната конкурентна среда не е достатъчно просто да имате добър продукт или услуга - трябва да знаете как да го представите пред правилната аудитория.</p>
        
        <h2>Разберете вашата аудитория</h2>
        <p>Първата стъпка към успешен маркетинг е дълбокото разбиране на вашите клиенти. Кои са те? Какви са техните нужди и проблеми? Къде прекарват времето си онлайн?</p>
        
        <h2>Създайте стойностно съдържание</h2>
        <p>Съдържанието, което създавате, трябва да решава реални проблеми на вашите клиенти. Не се фокусирайте само върху продажбите - предоставете стойност и доверието ще дойде естествено.</p>
        
        <h2>Използвайте данните за оптимизация</h2>
        <p>Всяка маркетингова кампания трябва да бъде измерима. Следете ключовите показатели и непрекъснато оптимизирайте вашия подход въз основа на резултатите.</p>
      `,
      image: "/business-marketing-bulgarian.jpg",
      date: "15 Декември 2024",
      category: "Маркетинг",
      readTime: "5 мин четене",
      author: "Мария Петрова",
    },
  }

  return articles[id as keyof typeof articles] || null
}

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await getArticle(params.id)

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-3xl font-bold text-black mb-4">Статията не е намерена</h1>
            <p className="text-gray-600 mb-8">Статията, която търсите, не съществува или е била премахната.</p>
            <Button asChild>
              <Link href="/blog">Върни се към блога</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Back to Blog */}
        <section className="py-8 px-4 border-b">
          <div className="container mx-auto max-w-4xl">
            <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад към блога
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <Badge className="bg-black text-white mb-4">{article.category}</Badge>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-black mb-6 text-balance">{article.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {article.readTime}
              </div>
              <div className="flex items-center">
                <span>Автор: {article.author}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Споделете
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-4 mb-12">
          <div className="container mx-auto max-w-4xl">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="px-4 pb-16">
          <div className="container mx-auto max-w-4xl">
            <div
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-black prose-p:text-gray-700 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-2xl font-bold text-black mb-4">Готови да рекламирате вашия бизнес?</h2>
            <p className="text-gray-600 mb-8">Публикувайте вашата статия и достигнете до хиляди потенциални клиенти.</p>
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800">
              <Link href="/publikuvay-statiya">Публикувай статия</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
