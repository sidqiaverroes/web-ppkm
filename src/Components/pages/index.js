import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from '../HeroSection';
import CardSection from '../CardSection';
import ProfilePPKM from '../ProfilePPKM';
import Infologomaskot from '../Infologomaskot';
import logo from '../Images/logoppkm.svg';
import maskot from '../Images/Frame 4.svg';
import "../Infologomaskot.css";

const PPKM = () => {
  return (
      <>
            <HeroSection/>
            <ProfilePPKM/>
            <div className='Container'>
                <h1>Logo & Mascot</h1>
            <div className='wrapper'>
            <Infologomaskot
                img={logo}
                title={"Logo PPKM"}/>
            <Infologomaskot
                img={maskot}
                title={"Maskot PPKM"}/>
                </div>
                </div>
            <CardSection/>

      </>
    /* <body>
        <div class="home-container">
            <div class="container">
                <div class="row">
                    <div class="col">
                        test
                    </div>
                    <div class="col">
                        Column 2
                    </div>
                    <div class="col">
                        Column 3
                    </div>
                </div>
            </div>
        </div>
    </body>
    // <div class='home-container'>
    //   <h1>KEMENTERIAN PENGEMBANGAN POTENSI DAN KARYA MAHASISWA UNIVERSITAS GADJAH MADA</h1>
    // </div>
    */
  );
}

export default PPKM
