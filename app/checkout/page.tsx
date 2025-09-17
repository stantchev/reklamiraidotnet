"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { CreditCard, Lock, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: "",
    city: "",
    postalCode: "",
    country: "България",
  })

  // Get package info from URL params
  const packageId = searchParams.get("package") || "single"
  const packageInfo = {
    single: { name: "Единична публикация", price: 49 },
    monthly: { name: "Месечен пакет", price: 149 },
    agency: { name: "Агенционен пакет", price: 399 },
  }

  const selectedPackage = packageInfo[packageId as keyof typeof packageInfo]

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Create payment intent
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageId,
          amount: selectedPackage.price,
          currency: "bgn",
        }),
      })

      const { paymentIntent } = await response.json()

      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Confirm payment
      const confirmResponse = await fetch("/api/confirm-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentIntentId: paymentIntent.id,
          articleData: {
            package: packageId,
            amount: selectedPackage.price,
          },
        }),
      })

      const result = await confirmResponse.json()

      if (result.success) {
        router.push(`/success?articleId=${result.articleId}`)
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      console.error("Payment failed:", error)
      alert("Възникна грешка при плащането. Моля, опитайте отново.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link href="/publikuvay-statiya" className="inline-flex items-center text-gray-600 hover:text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад към формата
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-black">Обобщение на поръчката</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-black">{selectedPackage.name}</h3>
                      <p className="text-sm text-gray-600">Публикуване на статия</p>
                    </div>
                    <span className="font-bold text-black">{selectedPackage.price} лв</span>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Междинна сума:</span>
                      <span className="text-black">{selectedPackage.price} лв</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ДДС (20%):</span>
                      <span className="text-black">{(selectedPackage.price * 0.2).toFixed(2)} лв</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center font-bold text-lg">
                    <span className="text-black">Общо:</span>
                    <span className="text-black">{(selectedPackage.price * 1.2).toFixed(2)} лв</span>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-black mb-2 flex items-center">
                      <Check className="w-4 h-4 mr-2" />
                      Включено в пакета:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Професионално редактиране</li>
                      <li>• SEO оптимизация</li>
                      <li>• Споделяне в социални мрежи</li>
                      <li>• Детайлна статистика</li>
                      <li>• Публикуване в рамките на 48 часа</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-black flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Данни за плащане
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-600">
                    <Lock className="w-4 h-4 mr-1" />
                    Сигурно плащане с SSL криптиране
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePayment} className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber" className="text-black font-medium">
                        Номер на картата *
                      </Label>
                      <Input
                        id="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                        placeholder="1234 5678 9012 3456"
                        className="mt-1"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate" className="text-black font-medium">
                          Валидност *
                        </Label>
                        <Input
                          id="expiryDate"
                          value={paymentData.expiryDate}
                          onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
                          placeholder="MM/YY"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="text-black font-medium">
                          CVV *
                        </Label>
                        <Input
                          id="cvv"
                          value={paymentData.cvv}
                          onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                          placeholder="123"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cardholderName" className="text-black font-medium">
                        Име на картодържателя *
                      </Label>
                      <Input
                        id="cardholderName"
                        value={paymentData.cardholderName}
                        onChange={(e) => setPaymentData({ ...paymentData, cardholderName: e.target.value })}
                        placeholder="Иван Петров"
                        className="mt-1"
                        required
                      />
                    </div>

                    <Separator className="my-6" />

                    <h3 className="font-medium text-black mb-4">Адрес за фактуриране</h3>

                    <div>
                      <Label htmlFor="billingAddress" className="text-black font-medium">
                        Адрес *
                      </Label>
                      <Input
                        id="billingAddress"
                        value={paymentData.billingAddress}
                        onChange={(e) => setPaymentData({ ...paymentData, billingAddress: e.target.value })}
                        placeholder="ул. Витоша 1"
                        className="mt-1"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-black font-medium">
                          Град *
                        </Label>
                        <Input
                          id="city"
                          value={paymentData.city}
                          onChange={(e) => setPaymentData({ ...paymentData, city: e.target.value })}
                          placeholder="София"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode" className="text-black font-medium">
                          Пощенски код *
                        </Label>
                        <Input
                          id="postalCode"
                          value={paymentData.postalCode}
                          onChange={(e) => setPaymentData({ ...paymentData, postalCode: e.target.value })}
                          placeholder="1000"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-black text-white hover:bg-gray-800 mt-6"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Обработва се...
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4 mr-2" />
                          Плати {(selectedPackage.price * 1.2).toFixed(2)} лв
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      Като натиснете "Плати", вие се съгласявате с нашите общи условия и политика за поверителност.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
