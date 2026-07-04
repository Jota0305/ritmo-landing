import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

// Servicio gratuito, sin registro ni API key: cada clave es un contador público.
// Si en el futuro este servicio deja de estar disponible, se puede reemplazar
// BASE_URL por cualquier otro con la misma forma de API (hit/get) o por un
// endpoint propio (ver README.md).
const BASE_URL = 'https://countapi.mileshilliard.com/api/v1'
const COUNTER_KEY = 'ritmo-landing-comision-regantes-chocope'

export default function VisitCounter() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    // Evita que React StrictMode (desarrollo) duplique el conteo.
    const alreadyHit = sessionStorage.getItem('ritmo_visit_counted')

    const url = alreadyHit
      ? `${BASE_URL}/get/${COUNTER_KEY}`
      : `${BASE_URL}/hit/${COUNTER_KEY}`

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.value !== 'undefined') {
          setCount(data.value)
          sessionStorage.setItem('ritmo_visit_counted', '1')
        }
      })
      .catch(() => {
        // Si el servicio falla o no hay conexión, simplemente no se muestra.
        setCount(null)
      })
  }, [])

  if (count === null) return null

  return (
    <div className="visit-counter" title="Visitas registradas en esta página">
      <Eye size={15} strokeWidth={1.8} />
      <span>{Number(count).toLocaleString('es-PE')} visitas</span>
    </div>
  )
}
