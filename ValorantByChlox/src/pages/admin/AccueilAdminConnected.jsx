import HeaderAccueilAdmin from "../../components/headers/HeaderAccueilAdmin";
import React from 'react';


function AccueilDisconnected() {
  return (
    <section className="AcceuilPage">
      <video autoPlay muted loop id="myVideo">
        <source src="./src/assets/video/videodesktop.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <HeaderAccueilAdmin/>
        <section className="Logosection">
          <img className="LogoAccueil" src="./src/assets/images/logo/logoValo.png" alt="logo Valorant" />
        </section>
      </div>
    </section>
  );
}

export default AccueilDisconnected;
