import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import About from '../components/About';
import Services from '../components/Services';
import About2 from '../components/About2';
import Stats from '../components/Stats';
import Membership from '../components/Membership';
import InterestForm from '../components/InterestForm';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import Poster from '../components/Poster';

const bannerImages = [
  // {
  //   url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kQvucdrE0dRZAq-OiLBUGvmr_vZfuIlTwA&s',
  //   title: 'Empowering Student Affairs',
  // },
  {
    url: 'https://hapakenya.com/wp-content/uploads/2013/05/Graduates.jpg',
    title: 'Building Tomorrow\'s Leaders',
  },
  // {
  //   url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3',
  //   title: 'Fostering Excellence',
  // },
];

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-screen"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
              <div 
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `url('${image.url}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.3
                }}
              />
              
              <div className="z-10 text-center px-4">
                <motion.h1
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-6xl font-bold mb-6"
                >
                  {image.title}
                </motion.h1>
                
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
                >
                  Kenya Universities Dean of Students Association
                </motion.p>
                
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  onClick={() => setShowForm(true)}
                  className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Join KUDSA
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Poster />
      <About2 />
     
      {/* <Services /> */}
      <Stats />
      <About />
      <Membership />
      <InterestForm showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
};

export default Home;