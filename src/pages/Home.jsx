// import { Link } from "react-router-dom"
// import SidebarComponent from "../../components/SideBar/SideBar"
import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import AgeModal from '../components/AgeModal/AgeModal';
import {useState, useEffect } from "react"
import './Pages.css'



function HomePage() {
  const [showModal, setShowModal] = useState(false); // Começa fechado, mas é aberto pelo useEffect no primeiro carregamento

  useEffect(() => {
    setShowModal(true); // Exibe o modal apenas uma vez no primeiro carregamento
  }, []);

    return (
        <div className='grid-container'>
        {/* A sintaxe <Header /> é equivalente a chamar React.createElement(Header). Nao tem abertura porque nao precisa escrever nada dentro e nao tem*/}
        <Header />
        {showModal && <AgeModal closeModal={() => setShowModal(false)} />} {/* Renderiza o modal se showModal for true */}
      <Hero />
      <Footer />    
      </div>
    )
}


export default HomePage