import { type NextRequest, NextResponse } from "next/server"

// This would typically use the actual Stripe SDK
// For demo purposes, we'll simulate the payment intent creation
export async function POST(request: NextRequest) {
  try {
    const { packageId, amount, currency = "bgn" } = await request.json()

    // In a real implementation, you would:
    // 1. Validate the package and amount
    // 2. Create a Stripe payment intent
    // 3. Return the client secret

    // Mock payment intent response
    const paymentIntent = {
      id: `pi_${Math.random().toString(36).substr(2, 9)}`,
      client_secret: `pi_${Math.random().toString(36).substr(2, 9)}_secret_${Math.random().toString(36).substr(2, 9)}`,
      amount: amount * 100, // Stripe uses cents
      currency: currency.toLowerCase(),
      status: "requires_payment_method",
    }

    return NextResponse.json({
      success: true,
      paymentIntent,
    })
  } catch (error) {
    console.error("Error creating payment intent:", error)
    return NextResponse.json({ success: false, error: "Failed to create payment intent" }, { status: 500 })
  }
}
