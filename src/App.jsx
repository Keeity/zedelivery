// import { useAuth } from './context/AuthContext.jsx'

import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from "./components/Sidebar/Sidebar"
import Header from "./components/Header/Header"
import './App.css'
import RoutesComponent from './routes/Routes'
import Footer from './components/Footer/Footer'

Footer
function App() {
  // const { isAuthenticated } = useAuth()
  const isAuthenticated = true;

  return (
    <>
      <Router>
        {isAuthenticated ? 
        (
          <div className='grid-container'>
            {/* A sintaxe <Header /> é equivalente a chamar React.createElement(Header). Nao tem abertura porque nao precisa escrever nada dentro e nao tem*/}
            <Header />  
            <Sidebar />
            <RoutesComponent />
            <Footer />
          </div>
        ) 
        : (
          <RoutesComponent />
        )}
      </Router>  
    </>
  )
}
export default App