import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import ContactForm from './components/ContactForm.jsx'
import CTABanner from './components/CTABanner.jsx'
import Servicio from './components/Servicio.jsx'
import Beneficios from './components/Beneficios.jsx'
import Testimonios from './components/Testimonios.jsx'
import Cierre from './components/Cierre.jsx'
import Footer from './components/Footer.jsx'

// Orden solicitado por el cliente:
// Título + subtítulo + imagen central (Hero) -> Formulario de contacto ->
// Botón de llamada a la acción -> Explicación del producto (Servicio) ->
// Beneficios -> Testimonios -> Argumento de cierre -> Redes sociales (Footer)
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ContactForm />
        <CTABanner />
        <Servicio />
        <Beneficios/>
        <Testimonios />
        <Cierre/>
      </main>
      <Footer />
    </>
  )
}
