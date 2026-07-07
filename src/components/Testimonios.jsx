function avatarUrl(nombre, bg) {
  const encoded = encodeURIComponent(nombre)
  return `https://ui-avatars.com/api/?name=${encoded}&background=${bg}&color=fff&size=128&bold=true&font-size=0.38`
}

const TESTIMONIOS = [
  {
    cita:
      'Centralizar las tareas en un solo tablero eliminó la mayoría de los mensajes fuera de horario en nuestro equipo.',
    nombre: 'Marco Salinas',
    cargo: 'Coordinador de Operaciones, Junta de Usuarios El Progreso',
    color: '4f6249',
  },
  {
    cita:
      'La Matriz de Eisenhower nos ayudó a distinguir lo urgente de lo importante desde la primera semana de uso.',
    nombre: 'Carla Núñez',
    cargo: 'Jefa de Proyectos, Constructora Andina S.A.C.',
    color: '8577a0',
  },
  {
    cita:
      'El Time Blocking ordenó nuestras jornadas y el equipo empezó a respetar los horarios de descanso.',
    nombre: 'Renzo Vidal',
    cargo: 'Administrador, Cooperativa de Servicios Múltiples Norte',
    color: 'e8a87c',
  },
]

export default function Testimonios() {
  return (
    <section id="testimonios" className="section section--alt">
      <h2>Equipos que ya organizan su trabajo con ViveBien</h2>

      <div className="grid grid--3">
        {TESTIMONIOS.map((t) => (
          <figure className="testimonio" key={t.nombre}>
            <blockquote>“{t.cita}”</blockquote>
            <figcaption>
              <img
                src={avatarUrl(t.nombre, t.color)}
                alt=""
                aria-hidden="true"
                className="testimonio__avatar"
              />
              <span className="testimonio__info">
                <strong>{t.nombre}</strong>
                <span>{t.cargo}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
