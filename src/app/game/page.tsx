import Head from 'next/head';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Guess the Song Game</title>
        <meta name="description" content="Test your music knowledge in the ultimate Guess the Song game!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <HeroSection />
        <Footer />
      </div>
    </>
  );
}
