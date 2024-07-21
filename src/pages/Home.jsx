// import { Link } from "react-router-dom"
// import SidebarComponent from "../../components/SideBar/SideBar"
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'

import './Pages.css'

function HomePage() {
    return (
        <div className='grid-container'>
        {/* A sintaxe <Header /> é equivalente a chamar React.createElement(Header). Nao tem abertura porque nao precisa escrever nada dentro e nao tem*/}
       <Header></Header> 
       <Hero></Hero>
        <Footer></Footer>       
      </div>
    )
}


export default HomePage