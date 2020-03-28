import { NextPage } from 'next';
import StoreCard from '../components/index/StoreCard';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center">
      <div>
        MAPA
    </div>
      <div>
        <StoreCard title="Super mercado 'El Cedral'" />
        <StoreCard title="Super mercado 'El Cedral'" />
        <StoreCard title="Super mercado 'El Cedral'" />
        <StoreCard title="Super mercado 'El Cedral'" />
        <StoreCard title="Super mercado 'El Cedral'" />
        <StoreCard title="Super mercado 'El Cedral'" />
        <StoreCard title="Super mercado 'El Cedral'" />
        <StoreCard title="Super mercado 'El Cedral'" />
        <StoreCard title="Super mercado 'El Cedral'" />
        <StoreCard title="Super mercado 'El Cedral'" />
      </div>
    </div>
  )
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
