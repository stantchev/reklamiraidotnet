import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function FeaturedPosts() {
  // Mock data for featured blog posts in Bulgarian
  const posts = [
    {
      id: 1,
      title: "Как да увеличите продажбите с качествен маркетинг",
      excerpt: "Научете най-ефективните стратегии за привличане на клиенти чрез съдържание.",
      image: "/business-marketing-bulgarian.jpg",
      date: "15 Декември 2024",
    },
    {
      id: 2,
      title: "Дигиталният маркетинг в България - тенденции 2025",
      excerpt: "Какво очакват българските потребители от брандовете в новата година.",
      image: "/digital-marketing-trends-bulgaria.jpg",
      date: "12 Декември 2024",
    },
    {
      id: 3,
      title: "Успешни примери за малки бизнеси в София",
      excerpt: "Истории за успех от местни предприемачи, които са постигнали растеж.",
      image: "/small-business-success-sofia-bulgaria.jpg",
      date: "10 Декември 2024",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-black mb-16">Препоръчани статии</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <CardTitle className="font-serif text-lg font-bold text-black mb-3 line-clamp-2">
                  {post.title}
                </CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-black font-medium hover:text-gray-600 transition-colors text-sm"
                >
                  Прочети повече →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
