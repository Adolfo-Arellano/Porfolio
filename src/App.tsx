import './App.css'
import UserProfile from './components/UserProfile'
import Skills from './components/Skills'
import Projects from './components/Projects/Projects'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'

const Nav = () => (
  <nav
    className="sticky top-0 z-50 flex justify-between items-center px-6 sm:px-12 py-4"
    style={{
      background: 'rgba(14,11,9,0.75)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--line)',
    }}
  >
    <div className="font-mono text-sm tracking-wide" style={{ color: 'var(--cream)' }}>
      A<span style={{ color: 'var(--ember)' }}>.</span>ARELLANO
    </div>
    <ul className="hidden sm:flex gap-8 font-mono text-[13px]" style={{ color: 'var(--cream-dim)' }}>
      <li><a href="#inicio" className="hover:text-[var(--ember)] transition-colors">Inicio</a></li>
      <li><a href="#stack" className="hover:text-[var(--ember)] transition-colors">Stack</a></li>
      <li><a href="#sobremi" className="hover:text-[var(--ember)] transition-colors">Sobre mí</a></li>
      <li><a href="#proyectos" className="hover:text-[var(--ember)] transition-colors">Proyectos</a></li>
      <li><a href="#contacto" className="hover:text-[var(--ember)] transition-colors">Contacto</a></li>
    </ul>
  </nav>
);

const App = () => {
  return (
    <div className="w-full min-h-screen" style={{ background: 'var(--bg-void)' }}>
      <Nav />
      <UserProfile />
      <div className="divider max-w-[1180px] mx-auto" />
      <Skills />
      <div className="divider max-w-[1180px] mx-auto" />
      <AboutMe />
      <div className="divider max-w-[1180px] mx-auto" />
      <Projects />
      <div className="divider max-w-[1180px] mx-auto" />
      <ContactMe />
    </div>
  )
}

export default App