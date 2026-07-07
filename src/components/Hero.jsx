import heroImg from '../assets/hero-central.jpeg'

export default function Hero() {
  return (
    <section id="top" className="hero-wrap">
      <div className="hero">
      <div className="hero__content">
        <h1>Organiza el trabajo. Protege el descanso.</h1>
        <p className="hero__lead">
          ViveBien centraliza las tareas de tu equipo, prioriza con la Matriz de
          Eisenhower y organiza el día con Time Blocking, en una sola
          plataforma formal de comunicación y seguimiento.
        </p>
        <div className="hero__actions">
          <a href="#contacto" className="btn btn--primary">
            Comienza el Cambio
          </a>
          <a href="#servicio" className="btn btn--ghost">
            Conocer el servicio
          </a>
        </div>
      </div>

      <img
        src={heroImg}
        alt="Profesional en equilibrio entre el trabajo y el bienestar personal"
        className="hero__image"
      />
      </div>
    </section>
  )
}
