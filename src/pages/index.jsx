import Head from 'next/head';
import Home from './Home';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Datafield</title>
        <meta name='description' content='Datafield' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}
