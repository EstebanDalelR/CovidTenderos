interface Props {
  title: string;
}

const StoreCard = ({ title }: Props) => {
  let categories = ["Abarrotes", "Golosinas", "Hielo", "Licores"]

  return (
    <div className="border border-gray-200 p-4 flex">
      <div className="h-20">
        <img className="h-20" src="https://drive.google.com/uc?id=1H9AveJrJkUjAaC_l1i8nqS-o2Wguwqf0" alt="Foto iman ${title}" />
      </div>
      <div>
        <h3 className="text-2xl">Super mercado 'El Cedral'</h3>
        <p className="text-lg text-right">Calle 161 # 8g - 84</p>
        <ul>
          {categories.map((category, index) =>
            <li className="inline mx-1" key={category}>
              {category}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default StoreCard