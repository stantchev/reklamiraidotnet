import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Mail, Calendar, FileText } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h1 className="font-serif text-4xl font-bold text-black mb-4">Плащането е успешно!</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Благодарим ви за доверието! Вашата статия ще бъде публикувана в рамките на 24-48 часа.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl text-black flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Следващи стъпки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-black">Редакторски преглед</h3>
                    <p className="text-sm text-gray-600">Нашият екип ще прегледа статията в рамките на 12 часа</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-black">SEO оптимизация</h3>
                    <p className="text-sm text-gray-600">Статията ще бъде оптимизирана за търсачки</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-black">Публикуване</h3>
                    <p className="text-sm text-gray-600">Статията ще бъде публикувана и споделена</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl text-black flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Какво да очаквате
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-black">Email потвърждение</h3>
                    <p className="text-sm text-gray-600">Ще получите потвърждение на вашия email адрес</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-black">Линк към статията</h3>
                    <p className="text-sm text-gray-600">След публикуване ще получите линк към статията</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-black">Статистики</h3>
                    <p className="text-sm text-gray-600">Ще имате достъп до детайлни статистики за четенията</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-4">
            <h2 className="font-serif text-2xl font-bold text-black">Имате въпроси?</h2>
            <p className="text-gray-600">Нашият екип е на разположение да отговори на всички ваши въпроси.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link href="/kontakt">Свържете се с нас</Link>
              </Button>
              <Button asChild>
                <Link href="/blog">Разгледайте блога</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
