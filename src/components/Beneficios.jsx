import {
  ShieldCheck,
  ListChecks,
  MessagesSquare,
  Moon,
  Focus,
  HeartHandshake,
} from 'lucide-react'

const BENEFICIOS = [
  {
    icon: ShieldCheck,
    title: 'Límites de horario definidos',
    desc: 'El horario de descanso queda fuera de alcance para nuevas solicitudes de trabajo.',
  },
  {
    icon: ListChecks,
    title: 'Prioridades claras',
    desc: 'La Matriz de Eisenhower ordena las tareas según su urgencia e importancia real.',
  },
  {
    icon: MessagesSquare,
    title: 'Comunicación formal',
    desc: 'Un solo canal de tareas reemplaza los mensajes dispersos y sin registro.',
  },
  {
    icon: Focus,
    title: 'Bloques de trabajo enfocado',
    desc: 'El Time Blocking protege espacios de trabajo sin interrupciones constantes.',
  },
  {
    icon: Moon,
    title: 'Desconexión digital',
    desc: 'El descanso del equipo deja de depender de acuerdos informales.',
  },
  {
    icon: HeartHandshake,
    title: 'Menor carga operativa',
    desc: 'Menos tareas dispersas por recordar se traduce en un equipo más eficiente.',
  },
]

export default function Beneficios() {
  return (
    <section id="beneficios" className="section">
      <p className="eyebrow">Beneficios de la oferta</p>
      <h2>Lo que obtiene tu equipo con Ritmo</h2>

      <div className="grid grid--3">
        {BENEFICIOS.map(({ icon: Icon, title, desc }) => (
          <div className="card card--simple" key={title}>
            <Icon className="card__icon" size={26} strokeWidth={1.6} />
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
