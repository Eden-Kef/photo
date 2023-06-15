import React, {useContext} from 'react';
//import images

import PhotographerImg from '../img/home/me.JPG';
//import Link
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div className='min-h-screen w-full px-8 text-white bg-gradient-to-br from-indigo-950 via-slate-950 to-black'>
      {/*<img src = {PhotographerImg} className='mix-blend-overlay object-cover'/>*/}

{/*Text and Image wrapper*/}
    <div className='max-w-screen-lg min-h-screen m-auto flex flex-col
       items-center justify-between px-2 pb-10 md:flex-row'
   >

{/*text*/}
<motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.9 }}
      variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
      }}

    className='flex flex-col justify-center'>
          <h1 className='h1 text-white sm:text-7xl max-md:mt-40 items-center font-bold tracking-normal'> 
          Freelance Photographer  
          </h1>
          <p className='text-[26px] lg:text-[20px] font-primary mb-4 lg:mb-12 lg:mt-4'>
          Based in Addis Ababa, Ethiopia
          </p>
          <Link to={'/portfolio'} 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='rounded mb-[30px] py-3 lg:mx-0 self-start w-fit px-10 flex items-center bg-sky-900 cursor-pointer to-blur-900'>
              Portfolio
          </Link>
    </motion.div>

{/*image*/}
<motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.4 }}
        variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
}}className='flex justify-end max-h-96 lg:max-h-max'> 
  <div className='relative lg:-right-20 overflow-hidden max-sm:rounded-bl-3xl max-sm:rounded-br-3xl '> 
    <img
    src={ PhotographerImg } 
    alt =''

/>
  </div>
 </motion.div>
 </div>
 <Footer/>
</div>
  );
};

export default Home;