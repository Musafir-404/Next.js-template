import { useRouter } from 'next/router';
import ServicePage from '../components/ServicePage';
import { services } from '../data/services';
import Head from 'next/head';
const Service = () => {
  const router = useRouter();
  const { sid } = router.query;

  const service = services.find((service) => service.path === sid);

  if (!service) {
    return null;
  } else {
    return (
      <>
        <Head>
          <title>{service.title}</title>
          <meta name='description' content={service.desc} />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          <ServicePage {...service} />
        </main>
      </>
    );
  }
};

export default Service;
