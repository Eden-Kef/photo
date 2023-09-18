import React, { useState, useEffect, useContext} from 'react';
import { client } from '../client';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { CursorContext } from '../context/CursorContext';
import { motion } from 'framer-motion';
import BlockContent from "@sanity/block-content-to-react"
//import { format } from 'date-fns/fp';


export default function Blog() {
const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

 const [posts, setPosts] = useState([]);

  useEffect(()=>{client.fetch(`*[_type == "post"] {
      title,
      slug,
      body,
        mainImage {
        asset -> {
          _id,
          url 
        },
        alt,
      }, 
      "name": author -> name,
    } | order(publishedAt desc)`
    ).then((data) => setPosts(data)).catch(console.error)
  },[]);

return (
  <>
  {!posts ? <h2> Loading...</h2> : <>
  <div className='max-w-full text-white bg-gradient-to-br from-indigo-950 via-slate-950 to-black'>
   <div className='flex flex-col pt-40 items-center justify-between md:flex-row '>
 {/* title */}
    
<motion.div  
initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ duration: 1.9 }}
     variants={{
       hidden: { opacity: 0, x: 50 },
       visible: { opacity: 1, x: 0 },
     }} className='md:mx-auto'>
<h1 className='h1 text-white sm:text-7xl items-center font-bold text-center '>Blog</h1> 


</motion.div>      

   </div>
<div className='grid grid-col-1 gap-3 md:grid-cols-2 lg:grid-cols-3 my-11 '>
    {posts.map((post) => (
            <article className='border-2 border-slate-700 mx-10 hover:scale-110 transition-all'
            key={post.slug.current}> 
              <img 
              src={post.mainImage.asset.url} alt={post.title} loading="lazy"/>
              <h4 className="text-[26px] lg:text-[20px] font-primary lg:mb-5 mt-5 mb-10 text-center ">
                {post.title}
              </h4>
              <p className='text-center font-primary'> By {post.name}
              </p> 
               <p>
                <BlockContent className='md:w-[70rem] md:px-6'
                        blocks={`{post.body.children.substring(0,200)}...`}
                        

          /></p> 
    <div className='flex flex-col items-center justify-center'>
    <button className="mt-5 mb-10 ">
                <Link
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                  to={`/blog/${post.slug.current}`}
                  className="py-2 px-6 rounded shadow text-white bg-black hover:bg-white border-2 border-slate-200 transition-all duration-500 hover:text-black font-bold"
                >
                  Read Full Article
                </Link>
              </button>
        </div>
</article>

))}</div>  
  <Footer/></div>
 </>}

   </>
  )}
  
