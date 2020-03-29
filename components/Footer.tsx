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
    <footer >
      <div className="w-full relative bottom-0 bg-gray-300">
        <ul className="flex justify-between items-center p-6 flex-col md:flex-row">
          <li>
            <Link href="/terminosycondiciones">
              <a>
                Términos y condiciones
              </a>
            </Link>
          </li>
          <li>
            <Link href="/politicadeprivacidad">
              <a>
                Política de Privacidad
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contactenos">
              <a>
                Contáctenos
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer >
  )
}