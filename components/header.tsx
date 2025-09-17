import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-serif text-xl font-bold text-black">
          reklamirai.net
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
            Начало
          </Link>
          <Link href="/za-nas" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
            За нас
          </Link>
          <Link href="/uslugi" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
            Услуги
          </Link>
          <Link href="/ceni" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
            Цени
          </Link>
          <Link href="/blog" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
            Блог
          </Link>
          <Link href="/kontakt" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
            Контакт
          </Link>
        </nav>

        <Button asChild className="bg-black text-white hover:bg-gray-800">
          <Link href="/publikuvay-statiya">Публикувай статия</Link>
        </Button>
      </div>
    </header>
  )
}

export default Header
