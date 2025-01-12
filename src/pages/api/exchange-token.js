import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' }); // Handle non-POST requests
  }

  const { code } = req.body;
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID; // Use server-side environment variables
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  const redirectUri = 'http://localhost:3001/login';

  if (!code) {
    return res.status(400).json({ error: 'Missing authorization code' });
  }

  if (!clientId || !clientSecret) {
    return res.status(500).json({ error: 'Missing Spotify client credentials' });
  }

  const encodedCredentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${encodedCredentials}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
      }),
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      return res.status(response.status).json({ error: errorDetails });
    }

    const data = await response.json();
    return res.status(200).json(data); // Send token data back to the client
  } catch (error) {
    console.error('Token exchange error:', error);
    return res.status(500).json({ error: 'Failed to exchange token' });
  }
}
