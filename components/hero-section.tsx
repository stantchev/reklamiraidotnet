import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-black mb-6 text-balance">
          Рекламирайте бизнеса си чрез статии
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
          Вашата публикация достига правилната аудитория.
        </p>
        <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-3">
          <Link href="/publikuvay-statiya">Започни сега</Link>
        </Button>
      </div>
    </section>
  )
}
