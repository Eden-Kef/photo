import React, {useContext} from 'react';
//import images
import Image1 from '../img/about/abtme.png';
//import Link
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
      <div className='min-h-screen bg-slate-300 w-full px-8 text-white bg-gradient-to-br from-indigo-950 via-slate-950 to-black'>
      <div className='max-w-screen-lg m-auto flex flex-col
       items-center justify-between min-h-screen px-8 md:flex-row'>
       {/* text */}
       <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.9 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className='flex flex-col md:w-[500px] md:ml-10 md:mr-10 ' >
      <h1 className='h1 text-white sm:text-7xl font-bold mt-40'>About Me</h1>
      <p className='mb-10 mt-5 text-[17px]'>
                    Hi, I'm Eden. I am a portrait photographer based in   
                    Addis Ababa, Ethiopia.
                    <br/>  <br/> I have been doing portrait photography for over 4 years.
                    I like capturing images that evoke emotion.<br />
                   
                  
      </p>
      {/* link */}
        <Link to = {'/contact'} 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='rounded mb-[30px] py-3 my-5 mx-auto lg:mx-0 w-fit px-10 flex items-center text-white bg-sky-900 cursor-pointer to-blur-900'>
        HIRE ME
        </Link>
        </motion.div>  
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.4 }}
        variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        }}>
    <img src={ Image1 } alt ='' className='w-[40rem] h-[-30rem] rounded-bl-3xl rounded-tr-3xl md:ml-20 md:mt-20'/>
 </motion.div>
            </div>
          <Footer/>
         </div>
      
        );
      };
      
      export default About;