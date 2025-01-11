import fetch from "node-fetch";
require('dotenv').config();

let cachedToken = null;
let tokenExpiry = null;

const id = process.env.CLIENT_ID
const secret = process.env.CLIENT_SECRET



async function fetchSpotifyToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: id,
      client_secret: secret,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch token: ${response.statusText}`);
  }

  const data = await response.json();
  return {
    accessToken: data.access_token,
    expiresIn: data.expires_in,
  };
}

export default async function handler(req, res) {
  try {
    // Check if the token is still valid
    const now = Date.now();
    if (cachedToken && tokenExpiry && now < tokenExpiry) {
      return res.status(200).json({ access_token: cachedToken });
    }

    // Fetch a new token
    const { accessToken, expiresIn } = await fetchSpotifyToken();
    cachedToken = accessToken;
    tokenExpiry = Date.now() + expiresIn * 1000; // expiresIn is in seconds

    res.status(200).json({ access_token: cachedToken });
  } catch (error) {
    console.error("Error fetching token:", error);
    res.status(500).json({ error: "Failed to fetch token" });
  }
}
