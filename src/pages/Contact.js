import React, {useContext} from 'react';
//import images
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';

const Contact = () => {
  
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div className='h-full w-full text-white bg-gradient-to-br from-indigo-950 via-slate-950 to-black'>
    <div className='max-w-screen-lg m-auto flex flex-col
       items-center justify-between h-screen px-8 md:flex-row'>

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
        <form action='https://t.me/share/url?url=Hi,How Are You ?' 
               method='POST' className='flex flex-col gap-y-4'>
              <div
              className='flex gap-x-10'>
                <input
                  className='outline-none border-b border-b-white h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-white'
                  type='text'
                  name='name'
                  required
                  placeholder='Your name'
                />
                <input
                  className='outline-none border-b border-b-white h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-white'
                  type='email'
                  name='email' 
                  pattern="([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]"
                  required
                  placeholder='Your email'
                />
              </div>
              <input
                  className='outline-none border-b border-b-white h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-white'
                  type='text'
                  name='message'
                  required
                  placeholder='Your message'
                  rows = "10"
                  minlength="10" 
                  maxlength="100" 
              />
              <button 
               onMouseEnter={mouseEnterHandler}
               onMouseLeave={mouseLeaveHandler}
               className='rounded mb-[30px] py-3 my-11 mx-auto lg:mx-0  w-fit px-10 flex items-center bg-sky-900 cursor-pointer to-blur-900'
               type='submit' 
               >
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