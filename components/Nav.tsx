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
    <nav className="border border-gray-300" style={{ backgroundColor: "#21bf73" }}>
      <ul className="flex justify-end items-center p-4">
        <li className="mx-2">
          <a href="https://docs.google.com/document/d/1-vwGQsLfJyT_Um77dpmJe5znfgHInMpXosJiMPrUF14/edit?usp=sharing">
            Por qué
              </a>
        </li>
        <li className="mx-2">
          <a href="https://forms.gle/3aF1ysP9NK6RKasV9">
            Agregar Tienda
          </a>
        </li>
      </ul>

    </nav >
  )
}