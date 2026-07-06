import { useState } from 'react'

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError(false)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contacto', ...form }),
    })
      .then(() => setSent(true))
      .catch(() => setError(true))
  }

  return (
    <section id="contacto" className="section">
      <p className="eyebrow">Formulario de contacto</p>
      <h2>Solicita información sobre ViveBien</h2>
      <p className="section__lead">
        Completa el formulario y nuestro equipo se comunicará contigo dentro
        de un horario laboral formal.
      </p>

      <div className="contact-layout">
        {sent ? (
          <div className="cta__success">
            <p>
              Recibimos tu solicitud correctamente. Te contactaremos a la
              brevedad.
            </p>
          </div>
        ) : (
          <form
            name="contacto"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="cta__form"
          >
            {/* Requerido por Netlify Forms */}
            <input type="hidden" name="form-name" value="contacto" />
            {/* Campo trampa contra spam, oculto para personas */}
            <p className="visually-hidden">
              <label>
                No completar si eres humano: <input name="bot-field" />
              </label>
            </p>

            <label>
              Nombre
              <input
                type="text"
                name="nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                placeholder="Nombre completo"
              />
            </label>
            <label>
              Correo
              <input
                type="email"
                name="correo"
                required
                value={form.correo}
                onChange={handleChange}
                placeholder="correo@empresa.com"
              />
            </label>
            <label>
              Mensaje
              <textarea
                name="mensaje"
                rows="4"
                required
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu equipo y qué necesitas organizar"
              />
            </label>
            <button type="submit" className="btn btn--primary">
              Comienza el Cambio
            </button>
            {error && (
              <p className="form-error">
                No se pudo enviar el formulario. Verifica tu conexión e
                inténtalo nuevamente.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
