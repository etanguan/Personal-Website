import React, {useState, useEffect, useRef, useCallback} from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';
import Fade from "react-reveal/Fade"
import Bounce from "react-reveal/Bounce"
import {Parallax, PArallaxLayer} from '@react-spring/parallax'
import {motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";

function Home() {

  const [top1, setTop1] = useState(0);
  
  const top1ref = useRef('');
  useEffect(() => {
    setTop1(top1ref.current.getBoundingClientRect().top);
    console.log(top1);
  

  }, [])
  
  
  const {scrollYProgress} = useScroll();
  const {scrollY} = useScroll();


  const y = useTransform(scrollY, [top1-1000, top1 + 600], ["-25%", "25%"]);


  


  return (
    <> 

      
      <div className='home-title-section'>
      

        <div className="home-title-introduction" >
          <Fade cascade duration={2000}>
          <h1 className='home-title-text-1'>Hi,</h1>
          </Fade>
          <Fade cascade delay={2000} duration={3000}>
          <h1>I'm Ethan.</h1>
          </Fade>
        </div>
        
        
      </div>
      

      <h1 className='home-body-intro'>This is what I do.</h1>
      <div className='home-body-section'>

          

      
        <div className="spacer-250 wave-1">

        </div>

        <motion.div ref={top1ref} className='home-body-content purple' style={{y}}>
          <Bounce top cascade>
            <div className='home-body-content-description '>
              <img className="bg-blob"src="/images/greenBlob1.png" alt="blob"/>
              <img className="bg-blob-3"src="/images/greenBlob3.png" alt="blob"/>
              <img className="bg-blob-2"src="/images/greenBlob2.png" alt="blob"/>
              
              <h1 className='black-text'>I code.</h1>
              <p className='black-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet non tellus vel faucibus. Sed dolor magna, iaculis sit amet luctus sit amet, maximus id elit. </p>
            </div>
          </Bounce>
          <Bounce top delay={200}>
            <div className="home-body-content-graphic grid">
              
              <div className='code-grid-item'>
                <img className="code-image" src="images/uniHealth.png" alt="uniHealth" />
              </div>
              <div className='code-grid-item'>2</div>
              <div className='code-grid-item'>3</div>
              <div className='code-grid-item'>4</div>
            </div>
          </Bounce>

        </motion.div>

      
        <div className="spacer-200 wave-purple-green"></div>
        <div className='home-body-content green'>
          <div className="home-body-content-graphic">
            <img src="/images/logo512.png" alt="temp" />
          </div>
          <div className='home-body-content-description'>
            <h1 className='black-text'>I build.</h1>
          </div>

        </div>
        <div className="spacer-200 wave-green-purple"></div>
        <div className='home-body-content purple '>
          <div className='home-body-content-description'>
            <h1 className='black-text'>I teach.</h1>
          </div>
          <div className="home-body-content-graphic rel">
            <span>
              <img className='teach-image' src="/images/problemSolving.png" alt="nothing" />
            </span>
            <span>
              <img className='teach-image' src="/images/git.png" alt="nothing" />
            </span>
            <span>
              <img className='teach-image' src="/images/binarySearch.png" alt="nothing" />
            </span>
            <span>
              <img className='teach-image' src="/images/timeComplexity.png" alt="nothing" />
            </span>
            <span>
              <img className='teach-image' src="/images/dynamicProgramming.png" alt="nothing" />
            </span>
            <span>
              <img className='teach-image' src="/images/dataStructures.png" alt="nothing" />
            </span>
          </div>
        </div>

      </div>

      
    </>
  
  )
}

export default Home