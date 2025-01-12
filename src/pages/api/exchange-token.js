import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { code } = req.body;
  const id = process.env.NEXT_PUBLIC_CLIENT_ID;
  const secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  const redirectUri = 'http://localhost:3001/login';

  if (!code) {
    return res.status(400).json({ error: 'Missing authorization code' });
  }

  const encodedCredentials = Buffer.from(`${id}:${secret}`).toString('base64');

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
      throw new Error('Failed to exchange token');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to exchange token' });
  }
}
