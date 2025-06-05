import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, expertise, education, institution, projectInterests, message } = body;

    // Validate required fields
    if (!name || !email || !expertise || !education) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Prepare Airtable API call
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_NETWORK_TABLE_ID = process.env.AIRTABLE_NETWORK_TABLE_ID;

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_NETWORK_TABLE_ID) {
      return NextResponse.json({ error: 'Airtable environment variables not set.' }, { status: 500 });
    }

    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_NETWORK_TABLE_ID}`;

    // Map form fields to Airtable fields
    const fields: Record<string, any> = {
      'Name': name,
      'Email': email,
      'Expertise': expertise,
      'Level of Education': education,
      'Your Workplace': institution || '',
      'Project Interests': projectInterests || '',
      'Additional Information': message || '',
    };

    // Send to Airtable
    const airtableRes = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields }),
    });

    if (!airtableRes.ok) {
      return NextResponse.json({ error: 'Failed to submit to Airtable.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}

// Only allow POST
export const dynamic = 'force-dynamic'; 