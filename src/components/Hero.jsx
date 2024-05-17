import React from 'react';
import { motion } from 'framer-motion';
import { ComputersCanvas } from './canvas';
import { styles } from '../styles';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className='relative w-full h-screen mx-auto'>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div style={{ marginTop: '-40px' }} className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div style={{ marginTop: '-40px' }}>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi I'm <span className='text-[#915eff]'>Anirban</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop the frontend of<br className='sm:block hidden'/> web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute bottom-2 w-full flex justify-center items-center'>
        <ScrollLink to="about" smooth={true} duration={500} className='w-[30px] h-[50px] cursor-pointer'>
          <div className='w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-2 h-1.5 rounded-full bg-secondary mb-1'
            />
          </div>
        </ScrollLink>
      </div>
    </section>
  );
}

export default Hero;
