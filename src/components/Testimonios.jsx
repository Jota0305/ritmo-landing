const TESTIMONIOS = [
  {
    cita:
      'Centralizar las tareas en un solo tablero eliminó la mayoría de los mensajes fuera de horario en nuestro equipo.',
    nombre: 'Marco Salinas',
    cargo: 'Coordinador de Operaciones, Junta de Usuarios El Progreso',
    foto: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    cita:
      'La Matriz de Eisenhower nos ayudó a distinguir lo urgente de lo importante desde la primera semana de uso.',
    nombre: 'Carla Núñez',
    cargo: 'Jefa de Proyectos, Constructora Andina S.A.C.',
    foto: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    cita:
      'El Time Blocking ordenó nuestras jornadas y el equipo empezó a respetar los horarios de descanso.',
    nombre: 'Renzo Vidal',
    cargo: 'Administrador, Cooperativa de Servicios Múltiples Norte',
    foto: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
]

export default function Testimonios() {
  return (
    <section id="testimonios" className="section section--alt">
      <p className="eyebrow">Testimonios</p>
      <h2>Equipos que ya organizan su trabajo con ViveBien</h2>

      <div className="grid grid--3">
        {TESTIMONIOS.map((t) => (
          <figure className="testimonio" key={t.nombre}>
            <blockquote>“{t.cita}”</blockquote>
            <figcaption>
              <img
                src={t.foto}
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
