import { useRouter } from 'next/router';
import ServicePage from '../components/ServicePage';
import { services } from '../data/services';
const Service = () => {
  const router = useRouter();
  const { sid } = router.query;

  const service = services.find((service) => service.path === sid);
console.log('service', sid);
  if (!service) {
    return null;
  } else {
    return <ServicePage {...service} />;
  }
};

export default Service;
