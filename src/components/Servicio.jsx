import { LayoutGrid, Grid2x2, CalendarClock } from 'lucide-react'

const BOARD = {
  'Por hacer': ['Revisar presupuesto del proyecto', 'Coordinar visita de campo'],
  'En curso': ['Informe mensual de actividades'],
  Hecho: ['Reunión de planificación semanal'],
}

const CUADRANTES = [
  {
    title: 'Hacer ahora',
    tag: 'Urgente + importante',
    tone: 'q1',
    desc: 'Se resuelve dentro del bloque de trabajo enfocado del día.',
  },
  {
    title: 'Planificar',
    tag: 'Importante, no urgente',
    tone: 'q2',
    desc: 'Se agenda en un bloque de tiempo dedicado, sin presión inmediata.',
  },
  {
    title: 'Delegar',
    tag: 'Urgente, no importante',
    tone: 'q3',
    desc: 'Se asigna al equipo desde el tablero compartido.',
  },
  {
    title: 'Eliminar',
    tag: 'Ni urgente ni importante',
    tone: 'q4',
    desc: 'Se archiva o se descarta para reducir la carga de trabajo.',
  },
]

export default function Servicio() {
  return (
    <section id="servicio" className="section section--alt">
      <p className="eyebrow">Nuestro servicio</p>
      <h2>Una plataforma, tres herramientas de gestión del tiempo</h2>
      <p className="section__lead">
        Ritmo combina un espacio formal de comunicación y tareas con dos
        métodos reconocidos de gestión del tiempo: la Matriz de Eisenhower y
        el Time Blocking.
      </p>

      <div className="pillar">
        <div className="pillar__text">
          <LayoutGrid className="pillar__icon" size={26} strokeWidth={1.6} />
          <h3>Plataforma centralizada de tareas</h3>
          <p>
            Todas las solicitudes de trabajo se organizan en un tablero
            compartido, con columnas de estado y responsables asignados. La
            comunicación del equipo queda documentada en un solo lugar.
          </p>
        </div>
        <div className="board">
          {Object.entries(BOARD).map(([col, cards]) => (
            <div className="board__col" key={col}>
              <span className="board__col-title">{col}</span>
              {cards.map((c) => (
                <div className="board__card" key={c}>
                  {c}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="pillar pillar--reverse">
        <div className="pillar__text">
          <Grid2x2 className="pillar__icon" size={26} strokeWidth={1.6} />
          <h3>Matriz de Eisenhower</h3>
          <p>
            Cada tarea se clasifica por urgencia e importancia. Esta
            priorización permite decidir qué hacer, planificar, delegar o
            eliminar, en lugar de atender lo que llega primero.
          </p>
        </div>
        <div className="matrix">
          {CUADRANTES.map((c) => (
            <div className={`matrix__cell matrix__cell--${c.tone}`} key={c.title}>
              <span className="matrix__tag">{c.tag}</span>
              <strong>{c.title}</strong>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pillar">
        <div className="pillar__text">
          <CalendarClock className="pillar__icon" size={26} strokeWidth={1.6} />
          <h3>Time Blocking</h3>
          <p>
            Las tareas priorizadas se convierten en bloques de tiempo dentro
            del calendario, incluyendo un bloque fijo de desconexión digital
            que respeta el horario de descanso del equipo.
          </p>
        </div>
        <div className="pillar__note">
          <p>
            El resultado: menos mensajes informales fuera de horario y más
            claridad sobre qué se está trabajando y cuándo.
          </p>
        </div>
      </div>
    </section>
  )
}
