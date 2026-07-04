const TESTIMONIOS = [
  {
    cita:
      'Centralizar las tareas en un solo tablero eliminó la mayoría de los mensajes fuera de horario en nuestro equipo.',
    nombre: 'Marco Salinas',
    cargo: 'Coordinador de Operaciones, Junta de Usuarios El Progreso',
  },
  {
    cita:
      'La Matriz de Eisenhower nos ayudó a distinguir lo urgente de lo importante desde la primera semana de uso.',
    nombre: 'Carla Núñez',
    cargo: 'Jefa de Proyectos, Constructora Andina S.A.C.',
  },
  {
    cita:
      'El Time Blocking ordenó nuestras jornadas y el equipo empezó a respetar los horarios de descanso.',
    nombre: 'Renzo Vidal',
    cargo: 'Administrador, Cooperativa de Servicios Múltiples Norte',
  },
]

export default function Testimonios() {
  return (
    <section id="testimonios" className="section section--alt">
      <p className="eyebrow">Testimonios</p>
      <h2>Equipos que ya organizan su trabajo con Ritmo</h2>

      <div className="grid grid--3">
        {TESTIMONIOS.map((t) => (
          <figure className="testimonio" key={t.nombre}>
            <blockquote>“{t.cita}”</blockquote>
            <figcaption>
              <strong>{t.nombre}</strong>
              <span>{t.cargo}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
