// import { useAuth } from './context/AuthContext.jsx'

import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import RoutesComponent from './routes/Routes'



function App() {
  // const { isAuthenticated } = useAuth()
  const isAuthenticated = true;

  return (
    <>
      <Router>
           {isAuthenticated ? 
        (
          <RoutesComponent />
        ) 
        : (
          <RoutesComponent />
        )}
      </Router>  
    </>
  )
}
export default App