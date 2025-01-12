'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    const { searchParams } = new URL(window.location.href);
    const code = searchParams.get('code');

    if (code) {
      fetch('/api/exchange-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Access Token:', data.access_token);
          // Redirect or perform actions based on the token
        })
        .catch((error) => console.error('Error exchanging token:', error));
    }
  }, [router]);

  return <div>Redirecting...</div>;
}
