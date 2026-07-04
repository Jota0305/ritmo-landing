import ProductVisual from './ProductVisual.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__content">
        <p className="eyebrow">Plataforma de organización del trabajo</p>
        <h1>Organiza el trabajo. Protege el descanso.</h1>
        <p className="hero__lead">
          Ritmo centraliza las tareas de tu equipo, prioriza con la Matriz de
          Eisenhower y organiza el día con Time Blocking, en una sola
          plataforma formal de comunicación y seguimiento.
        </p>
        <div className="hero__actions">
          <a href="#contacto" className="btn btn--primary">
            Solicitar demostración
          </a>
          <a href="#servicio" className="btn btn--ghost">
            Conocer el servicio
          </a>
        </div>
      </div>

      <ProductVisual />
    </section>
  )
}
