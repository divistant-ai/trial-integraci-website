import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // TODO: Replace with actual webhook URL (HubSpot/Salesforce)
    const webhookUrl = process.env.WEBHOOK_URL || 'https://hooks.example.com/integraci'

    // Send to webhook (HubSpot/Salesforce)
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        company: company || '',
        leadSource: 'Landing Page',
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error('Webhook request failed')
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}

