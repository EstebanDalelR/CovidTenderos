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
            <a href="https://docs.google.com/document/d/1-KF-Pt3p47VELPP-Sh2Ds32aM_vnkngRNxiFm3VUyx4/edit?usp=sharing">
              Términos y Condiciones
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1KNsPfdVCF8BuOmVOIYPsVsGVe5OjVXycJzTwCoiLUdE/edit?usp=sharing">
              <a>
                Política de Privacidad
              </a>
            </a>
          </li>
          <li>
            <a href="https://forms.gle/zRViLcroLKy5dUW86">
              Contáctenos
            </a>
          </li>
        </ul>
      </div>
    </footer >
  )
}