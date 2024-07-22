import { useState } from "react";
import "./AgeModal.css";

function AgeModal() {
    
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
         <div className={`modal ${isOpen ? "open" : ""}`}>
        <div className="modal-content">
            <img
            className="logoModal"
              src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fsmall-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D83%26h%3D83%26dpr%3D2%26fm%3Dpng&w=96&q=75"
              width="83"
              height="83"
           ></img>
          <h2>Você tem 18 anos ou mais?</h2>
          <div className='btns'>
          <button className="btnYes" onClick={closeModal}>Sim</button>
          <button className="btnNo" onClick={closeModal}>Não</button>
          </div>
        </div>
      </div>
      )}
    </>
  );
}

export default AgeModal;
