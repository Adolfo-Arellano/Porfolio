import './App.css'
import UserProfile from './components/UserProfile'
import Stack from './components/Skills'
import Projects from './components/Projects/Projects'
import ChefWithRealImage from './components/ChefWithRealImage'
import ContactMe from './components/ContactMe'

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-violet-950 to-indigo-900">
      <div className="mx-auto"> {/* max-w-3xl px-4*/} 
        <UserProfile />
        <Stack />
        <Projects />
        <ChefWithRealImage />
        <ContactMe />
      </div>
    </div>
  )
}

export default App