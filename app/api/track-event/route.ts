import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { eventName, eventCategory, eventLabel } = body

    // Track event in analytics (GA4)
    // This is a placeholder - in production, you would send to GA4 Measurement Protocol
    // or use Google Tag Manager server-side tracking

    console.log('Event tracked:', { eventName, eventCategory, eventLabel })

    return NextResponse.json(
      { message: 'Event tracked successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Event tracking error:', error)
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 500 }
    )
  }
}

