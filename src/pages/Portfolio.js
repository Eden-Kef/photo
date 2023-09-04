import React, { useState, useEffect, useContext} from 'react';
import { client } from '../client';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
import imageUrlBuilder from '@sanity/image-url'

const builder =  imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source)
}

export default function Portfolio() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [profile, setProfile] = useState([]);

  useEffect(()=>{client.fetch(
    `*[_type == "gallery"] {
    _id,
    _createdAt,
    
  }` ).then((data) => setProfile(data[0])).catch(console.error)
    }, []); 
    if (!profile) return <h2> Loading...</h2> 
  return (

<div className='max-w-full text-white bg-gradient-to-br from-indigo-950 via-slate-950 to-black'>
<div className='min-h-screen-lg flex flex-col lg:flex-col items-center justify-start gap-x-24 text-center lg:text-center pt-24 lg:pt-36 pb-8'>
 {/* title */}
 <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ duration: 1.9 }}
     variants={{
       hidden: { opacity: 0, x: 50 },
       visible: { opacity: 1, x: 0 },
     }}
   className='lg:flex-1 px-4' >
<h1 className='h1 text-white sm:text-7xl items-center font-bold mb-20'>Portfolio</h1>

  </motion.div>
     {/* image grid */}
  <motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }}
  className = 'md:columns-3 gap-3 md:w-[1200px] mx-auto space-y-3 pb-8 '>
   </motion.div>      
   <div className='grid grid-col-1 gap-3 md:grid-cols-2 lg:grid-cols-3 my-11 '>
   {profile.images && (
  <article className='border-2 border-slate-700 mx-10 hover:scale-110 transition-all'> 
    <img src={urlFor(profile.images).url()} alt='hey'
         className='w-[30rem] h-[-20rem] md:mt-40'
        loading="lazy"/>
  </article>
   )}
   </div>
    
  {/* link */}
  <Link to = {'/contact'} 
   onMouseEnter={mouseEnterHandler}
   onMouseLeave={mouseLeaveHandler}
   className='rounded mb-[30px] py-3 my-5 mx-auto lg:mx-0 w-fit px-10 flex items-center text-white bg-sky-900 cursor-pointer to-blur-900'>
    HIRE ME
  </Link>
   </div>      
   <Footer/>
   </div>

  );
};

