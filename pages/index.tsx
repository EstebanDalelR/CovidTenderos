import { NextPage } from 'next';
import StoreCard from '../components/index/StoreCard';
import tiendas from "../public/tiendas1.json"

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  console.log(tiendas)
  return (
    <div className="flex flex-col md:flex-row justify-around items-center">
      <div>
        MAPA
    </div>
      <div>
        {tiendas.map((tienda, index) =>
          <StoreCard
            key={index}
            title={tienda["Nombre de la tienda"]}
            direccion={tienda["Dirección (aproximada sirve)"]}
            categorias={tienda["Categorías"].split(",")}
          />
        )}
      </div>
    </div>
  )
};

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;
