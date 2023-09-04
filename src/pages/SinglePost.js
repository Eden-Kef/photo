import { useState, useEffect, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { client } from "../client"
import BlockContent from "@sanity/block-content-to-react"
import Footer from "../components/Footer"
import { CursorContext } from '../context/CursorContext';

export default function SinglePost() {   
  const [singlePost, setSinglePost] = useState([])
  const { slug } = useParams()
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
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
      )
      .then((data) => setSinglePost(data[0]))
    
  }, [slug])

  return (

    <div className="h-full max-w-full text-white bg-gradient-to-br from-indigo-950 via-slate-950 to-black">
     <div className='bg-gray-900 flex flex-col pt-24 px-4 items-center md:m-auto md:flex-col md:w-[70rem]'>
 {/* title */}
          <h1 className="h1 text-white sm:text-7xl items-center font-bold md:mt-20 md:mb-0 text-center ">
            {singlePost.title}
          </h1> 
          
          {singlePost.mainImage && singlePost.mainImage.asset && (//checks whether or not the author has an image before rendering the image tag. 
            <img className="lg:blog__image rounded-t mt-11"
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              loading="lazy"
           
            />
          )} 
           <div className="block__content md:px-6 ">
          <p className='text-white sm:mb-4 mt-1'>By {singlePost.name}</p>
          <BlockContent className='md:w-[70rem] mt-5'
                        blocks={singlePost.body}
                        projectId="lr5lcgfp"
                        dataset="production"

          />
          <button className="mt-10 ">
            <Link
             onMouseEnter={mouseEnterHandler}
             onMouseLeave={mouseLeaveHandler}
              to="/blog"
              className="py-2 px-6 rounded shadow text-white bg-black hover:bg-white border-2 border-slate-200 transition-all duration-500 hover:text-black font-bold"
            >
              Read more articles
            </Link>
        
          </button> </div>
          </div> 
          {/* link */}
  <Link to = {'/contact'} 
   onMouseEnter={mouseEnterHandler}
   onMouseLeave={mouseLeaveHandler}
   className='rounded mb-[30px] py-3 my-20 mx-auto lg:mx-auto w-fit px-10 flex items-center bg-sky-900 cursor-pointer to-blur-900'>
    HIRE ME
  </Link>

 
  <Footer/>
        </div> 
       

  )
}