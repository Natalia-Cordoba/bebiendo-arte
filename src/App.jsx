import { Contacto } from "./components/Contacto"
import { Experiencias } from "./components/Experiencias"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Intro } from "./components/Intro"
import { Nosotros } from "./components/Nosotros"
import { Opiniones } from "./components/Opiniones"

function App() {
  return (
    <main>
      <Header />
      <Intro />
      <Nosotros />
      <Experiencias />
      <Opiniones />
      <Contacto />
      <Footer />
    </main>
  )
}

export default App
