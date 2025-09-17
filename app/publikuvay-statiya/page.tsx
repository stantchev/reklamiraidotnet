"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { Upload, FileText, CreditCard, Check } from "lucide-react"

export default function PublishArticlePage() {
  const [selectedPackage, setSelectedPackage] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    authorName: "",
    authorEmail: "",
    companyName: "",
    companyWebsite: "",
    image: null as File | null,
    agreeTerms: false,
    agreeMarketing: false,
  })

  const packages = [
    { id: "single", name: "Единична публикация", price: "49 лв" },
    { id: "monthly", name: "Месечен пакет", price: "149 лв" },
    { id: "agency", name: "Агенционен пакет", price: "399 лв" },
  ]

  const categories = [
    "Маркетинг",
    "SEO",
    "Социални мрежи",
    "Брандинг",
    "Тенденции",
    "Email маркетинг",
    "Анализ",
    "Съдържание",
    "Друго",
  ]

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, image: file })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPackage || !formData.agreeTerms) {
      alert("Моля, изберете пакет и се съгласете с общите условия.")
      return
    }

    // Store form data in sessionStorage for checkout
    sessionStorage.setItem("articleFormData", JSON.stringify(formData))

    // Redirect to checkout with selected package
    window.location.href = `/checkout?package=${selectedPackage}`
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6 text-balance">
              Публикувайте вашата статия
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
              Споделете вашия опит и знания с хиляди читатели. Изберете пакет и започнете сега.
            </p>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-4 pb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Package Selection */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-black">Изберете пакет</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedPackage === pkg.id ? "border-black bg-gray-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-black">{pkg.name}</h3>
                          <p className="text-sm text-gray-600">{pkg.price}</p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedPackage === pkg.id ? "border-black bg-black" : "border-gray-300"
                          }`}
                        >
                          {selectedPackage === pkg.id && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </div>
                    </div>
                  ))}

                  {selectedPackage && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-black mb-2">Включено в пакета:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Професионално редактиране</li>
                        <li>• SEO оптимизация</li>
                        <li>• Споделяне в социални мрежи</li>
                        <li>• Детайлна статистика</li>
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Article Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-black flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Детайли за статията
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Article Details */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title" className="text-black font-medium">
                          Заглавие на статията *
                        </Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          placeholder="Въведете заглавието на вашата статия"
                          className="mt-1"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="category" className="text-black font-medium">
                          Категория *
                        </Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => setFormData({ ...formData, category: value })}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Изберете категория" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="content" className="text-black font-medium">
                          Съдържание на статията *
                        </Label>
                        <Textarea
                          id="content"
                          value={formData.content}
                          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                          placeholder="Напишете съдържанието на вашата статия тук..."
                          className="mt-1 min-h-[300px]"
                          required
                        />
                        <p className="text-sm text-gray-500 mt-1">Минимум 300 думи, максимум 1200 думи</p>
                      </div>

                      <div>
                        <Label htmlFor="image" className="text-black font-medium">
                          Основна картинка
                        </Label>
                        <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                          <input
                            type="file"
                            id="image"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                          <label htmlFor="image" className="cursor-pointer">
                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">
                              {formData.image ? formData.image.name : "Кликнете за качване на картинка"}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">PNG, JPG до 5MB</p>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Author Information */}
                    <div className="border-t pt-6">
                      <h3 className="font-serif text-lg font-bold text-black mb-4">Информация за автора</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="authorName" className="text-black font-medium">
                            Име на автора *
                          </Label>
                          <Input
                            id="authorName"
                            value={formData.authorName}
                            onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                            placeholder="Вашето име"
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="authorEmail" className="text-black font-medium">
                            Email адрес *
                          </Label>
                          <Input
                            id="authorEmail"
                            type="email"
                            value={formData.authorEmail}
                            onChange={(e) => setFormData({ ...formData, authorEmail: e.target.value })}
                            placeholder="your@email.com"
                            className="mt-1"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company Information */}
                    <div className="border-t pt-6">
                      <h3 className="font-serif text-lg font-bold text-black mb-4">Информация за компанията</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="companyName" className="text-black font-medium">
                            Име на компанията
                          </Label>
                          <Input
                            id="companyName"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            placeholder="Име на вашата компания"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="companyWebsite" className="text-black font-medium">
                            Уебсайт на компанията
                          </Label>
                          <Input
                            id="companyWebsite"
                            type="url"
                            value={formData.companyWebsite}
                            onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                            placeholder="https://yourwebsite.com"
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="border-t pt-6 space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="agreeTerms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                          className="mt-1"
                        />
                        <Label htmlFor="agreeTerms" className="text-sm text-gray-700 leading-relaxed">
                          Съгласен съм с{" "}
                          <a href="/terms" className="text-black underline hover:no-underline">
                            общите условия
                          </a>{" "}
                          и{" "}
                          <a href="/privacy" className="text-black underline hover:no-underline">
                            политиката за поверителност
                          </a>
                          . *
                        </Label>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="agreeMarketing"
                          checked={formData.agreeMarketing}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, agreeMarketing: checked as boolean })
                          }
                          className="mt-1"
                        />
                        <Label htmlFor="agreeMarketing" className="text-sm text-gray-700 leading-relaxed">
                          Желая да получавам маркетингови съобщения и новини от reklamirai.net
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="border-t pt-6">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-black text-white hover:bg-gray-800"
                        disabled={!selectedPackage || !formData.agreeTerms}
                      >
                        <CreditCard className="w-5 h-5 mr-2" />
                        Продължи към плащане
                      </Button>
                      <p className="text-sm text-gray-500 text-center mt-2">
                        Ще бъдете пренасочени към сигурна страница за плащане
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-center text-black mb-12">Често задавани въпроси</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-black mb-2">Колко време отнема публикуването?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Статиите се публикуват в рамките на 24-48 часа след одобрение и плащане.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-black mb-2">Мога ли да редактирам статията след публикуване?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Да, можете да поискате промени в рамките на 7 дни след публикуване.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-black mb-2">Какви формати на картинки се поддържат?</h3>
                <p className="text-gray-600 text-sm mb-4">Поддържаме JPG, PNG и WebP формати до 5MB размер.</p>
              </div>
              <div>
                <h3 className="font-medium text-black mb-2">Получавам ли статистики за четенията?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Да, всички пакети включват детайлна статистика за четенията и ангажираността.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
