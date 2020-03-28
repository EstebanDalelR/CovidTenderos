interface Props {
  title: string;
}

const StoreCard = ({ title }: Props) => {
  let categories = ["Abarrotes", "Golosinas", "Hielo", "Licores"]

  return (<div className="border border-gray-200 p-4">
    <h3 className="text-2xl">Super mercado 'El Cedral'</h3>
    <p className="text-lg text-right">Calle 161 # 8g - 84</p>
    <ul>
      {categories.map((category, index) =>
        <li className="inline mx-1">
          {category}
        </li>
      )}
    </ul>
  </div>)
}

export default StoreCard