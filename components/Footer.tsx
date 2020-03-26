import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav(props: any) {
  const router = useRouter()
  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/employees', label: 'Empleados' },
    { href: "/teams", label: "Equipos" },
    { href: '/commissionPlan', label: 'Planes' },
    { href: '/KPIs', label: 'Indicadores' },
    { href: '/paymentCurve', label: 'Escalas' },
    { href: '/', label: 'Carga' },
    { href: '/', label: 'Cálculo' },
    { href: '/', label: 'Reportes' },
    { href: '/', label: 'Administración' },
  ]
  let username = ""
  if (typeof window !== 'undefined') {
    if (window.localStorage.getItem("commisio-username")) {
      username = window.localStorage.getItem("commisio-username")
    }
  }
  return (
    <nav className="border border-gray-300 bg-orange-200">
      <ul className="flex justify-between items-center p-6">
        {username
          ? <>
            <li>
              {links.map((link, index) =>
                <Link href={link.href} key={index}>
                  <a
                    className="text-blue-500 no-underline border-r-2 border-blue-400 px-2"
                  >
                    {link.label}
                  </a>
                </Link>
              )}

            </li>

            <ul className="flex justify-between items-center">
              <li className="ml-4 flex flex-col">
                <Link href={`/myAccount`}>
                  <a className="text-xl">
                    {username}
                  </a>
                </Link>
                <p className="text-xs text-right text-gray-500">
                  Tu Empresa
               </p>
                <button
                  className="text-xs text-yellow-700"
                  onClick={() => {
                    window.localStorage.clear()
                    router.push("/")
                  }}
                >
                  Salir
               </button>
              </li>
            </ul>
          </>
          : <li>
            <Link href="/login">
              <a
                className="text-blue-500 no-underline border-r-2 border-blue-400 px-2"
              >
                Entrar
              </a>
            </Link>
          </li>
        }
      </ul>

    </nav >
  )
}