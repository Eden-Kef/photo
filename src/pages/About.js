import React, { useState, useEffect, useContext } from 'react';
//import images
//import Link
import { Link } from 'react-router-dom';
import { client } from "../client"
import BlockContent from "@sanity/block-content-to-react"
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CursorContext } from '../context/CursorContext';
import imageUrlBuilder from '@sanity/image-url'

const builder =  imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source)
}

export default function About() {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [author, setAuthor] = useState([]);
  
  useEffect(()=>{client.fetch(
    `*[_type == "author"] {
    name,
    bio,
    "authorImage": image.asset -> url
    }`
      ).then((data) => setAuthor(data[0]))
      .catch(console.error)
    }, []);
    if (!author) return <div>Loading...</div>
    return (
      <div className='max-w-full text-white bg-gradient-to-br from-indigo-950 via-slate-950 to-black'>
      <div className='max-w-screen-lg min-h-screen-lg m-auto flex flex-col
       items-center justify-between px-2 md:flex-row '>
       
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
        className='flex flex-col md:w-[500px] ' >
      <h1 className='h1 text-white sm:text-7xl font-bold mt-40 mb-7'>About Me</h1>
  
      <BlockContent
                        blocks={author.bio}
                        projectId="lr5lcgfp"
                        dataset="production" 
                        className='md:w-[30rem] font-primary text-justify tracking-wide'
                       
    />         
      {/* link */}
        <Link to = {'/contact'} 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='rounded mb-[30px] py-3 my-11 w-fit px-10 flex text-white bg-sky-900 cursor-pointer to-blur-900'>
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
        {author.authorImage && ( //checks whether or not the author has an image before rendering the image tag
    <img src={urlFor(author.authorImage).url()} alt={author.name}
    className='w-[30rem] h-[-20rem] md:mt-40'
    loading="lazy"/>
    )}
 </motion.div>
            </div>
            <br></br>
          <Footer/>
         </div>
      
        );
      };
      
