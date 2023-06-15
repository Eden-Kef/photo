import React, {useContext} from 'react';
//import images
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div className='h-screen w-full text-white bg-gradient-to-br from-indigo-950 via-slate-950 to-black'>
        <div className='max-w-screen-lg m-auto flex flex-col
       items-center justify-between h-full px-8 md:flex-row'>
      
{/*bg     <div className='hidden lg:flex bg-[#eef7f] absolute bottom-0 left-0 right-0 top-72 -z-10'></div>*/}

{/*text form */}
        <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.9 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
         className='lg:flex-1 px-4'>
        <h1 className='h1 text-white sm:text-7xl items-center font-bold lg:mt-20 mt-40'>Contact me</h1>
        <p className='mb-10 mt-5 text-[17px] text-white'> Get in touch using the form. </p>
        <form  action='https://getform.io/f/bbba1146-4c69-4aec-9271-ab15f5bf4eec' method='POST' className='flex flex-col gap-y-4'>
              <div
              className='flex gap-x-10'>
                <input
                  className='outline-none border-b border-b-white h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-white'
                  type='text'
                  name='name'
                  placeholder='Your name'
                />
                <input
                  className='outline-none border-b border-b-white h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-white'
                  type='text'
                  name='email'
                  placeholder='Your email address'
                />
              </div>
              <input
                className='outline-none border-b border-b-white h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-white'
                type='text'
                name='message'
                placeholder='Your message'
              />
              <button 
               onMouseEnter={mouseEnterHandler}
               onMouseLeave={mouseLeaveHandler}
               className='rounded mb-[30px] py-3 my-5 mx-auto lg:mx-0 self-start w-fit px-10 flex items-center bg-sky-900 cursor-pointer to-blur-900'
              type='submit'>
                Send it
              </button>
            </form>
          </motion.div>
        </div>
        
        <Footer/>
      </div>
  );
};

export default Contact;