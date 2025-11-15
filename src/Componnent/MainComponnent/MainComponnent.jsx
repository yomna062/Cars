import React from 'react';
import { motion } from 'framer-motion'; 
import car from '../../assets/car1.png';
import './MainComponent.css';

export default function MainComponent() {
  return (
    <div className="container-fluid my-5 px-0 overflow-hidden ">
      <div className="row align-items-center mx-0">
        {/* النص على الشمال */}
        <div className="col-md-6 px-5">
          <h1 className="fw-bold">
            Find, book and rent a car <span className="text-primary">Easily</span>
          </h1>
          <h4 className="text-muted">
            Get a car wherever and whenever you need it with your IOS and Android device.
          </h4>
        </div>

        {/* الصورة على اليمين عريضة بدون قص + حركة من الجنب */}
        <div className="col-md-6 px-0 position-relative">
          <motion.img
            src={car}
            alt="Car"
            initial={{ x: 300, opacity: 0 }}   // 🚗 تبدأ من خارج الشاشة ناحية اليمين
            animate={{ x: 0, opacity: 1 }}     // ✅ تدخل تدريجيًا لمكانها
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              width: '160%',
              maxWidth: 'none',
              position: 'relative',
              right: '15%',
              display: 'block',
            }}
          />
        </div>
      </div>
    </div>
  );
}
