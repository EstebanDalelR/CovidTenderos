interface Props {
  title: string;
  direccion: string;
  categorias: string[]
}

const StoreCard = ({ title, direccion, categorias }: Props) => {

  return (
    <div className="border border-gray-200 p-4 flex">
      <div className="h-20">
        {/* reemplazar open por uc */}
        <img className="h-20" src="https://drive.google.com/uc?id=1H9AveJrJkUjAaC_l1i8nqS-o2Wguwqf0" alt="Foto iman ${title}" />
      </div>
      <div>
        <h3 className="text-2xl">{title}</h3>
        <p className="text-lg text-right">{direccion}</p>
        <ul>
          {categorias.map((category, index) =>
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