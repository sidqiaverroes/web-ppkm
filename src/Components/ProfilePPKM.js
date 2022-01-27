import React from 'react';
import "./ProfilePPKM.css";
import '../App.css';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from './Images/logoppkm.svg';

const Image = styled(motion.img)`
  max-width: 500px;
`;

const ProfilePPKM = () => {
    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
      };
    
      return(
          <section>
                <div class="container">
                    <div class= "circle1"></div>
                    <div class= "circle2"></div>
                        <div class= "content">
                            <h2>PENGEMBANGAN POTENSI DAN KARYA MAHASISWA</h2>
                            <p>Kementerian Pengembangan Potensi dan Karya Mahasiswa (PPKM) merupakan sebuah kementerian yang bergerak di dalam struktur Kementerian Koordinator Kemahasiswaan yang berperan sebagai eskalator dan mediator dalam penyaluran potensi, bakat, dan karya dari mahasiswa melalui kegiatan-kegiatan di dalamnya.</p>
                            <a href='#'> Read More</a>
                        </div>
                        <Image
                            src={logo}
                            alt='logo'
                            initial={{ opacity: 0, y: 0 }}
                            whileHover={{ scale: 1.2 }}
                            animate={{ opacity: 1, y: 0, scale:1.1, transition: { duration: 1 } }}
                        />
                    </div>
                </section>
      )
}

export default ProfilePPKM;