'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code'); // Extract the code from the query parameters

    if (code) {
      fetch('/api/exchange-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error exchanging token: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Access Token:', data.access_token);

          // Save token in localStorage or handle it securely
          localStorage.setItem('spotify_access_token', data.access_token);

          // Redirect to a protected route (e.g., Profile page)
          router.push('/profile');
        })
        .catch((error) => {
          console.error('Error exchanging token:', error);
          alert('Failed to log in. Please try again.');
        });
    } else {
      console.error('Authorization code not found');
      alert('No authorization code found. Please log in again.');
    }
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-xl text-gray-700">Redirecting...</h1>
    </div>
  );
}
