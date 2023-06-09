import Head from 'next/head';
import Home from './Home';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Datafield</title>
        <meta
          name='description'
          content='Datafield, a company that provides data services like tableau, power bi, data management, embedded analytics and staffing augmentation.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/assets/logo.png' />
        <link rel="apple-touch-icon image_src" href="/assets/logo.png" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}
