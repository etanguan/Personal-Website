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
  const [top2, setTop2] = useState(0);
  const [top3, setTop3] = useState(0);

  const top2ref = useRef('');
  const top1ref = useRef('');
  const top3ref = useRef('');

  useEffect(() => {
    setTop1(top1ref.current.getBoundingClientRect().top);
    setTop2(top2ref.current.getBoundingClientRect().top);
    setTop3(top3ref.current.getBoundingClientRect().top);

  }, [])
  
  
  const {scrollYProgress} = useScroll();
  const {scrollY} = useScroll();


  const y1 = useTransform(scrollY, [top1-1000, top1 + 600], ["-25%", "25%"]);
  const y2 = useTransform(scrollY, [top2-1000, top2 + 600], ["-25%", "25%"]);
  const y3 = useTransform(scrollY, [top3-1000, top3 + 600], ["-25%", "25%"]);
  

  


  return (
    <> 

      
      <div className='home-title-section'>
      

        <div className="home-title-introduction" >
          <Fade cascade duration={1000}>
          <h1 className='home-title-text-1'>Hi,</h1>
          </Fade>
          <Fade cascade delay={1000} duration={1500}>
          <h1>I'm Ethan.</h1>
          </Fade>
        </div>
        
        
      </div>
      

      
      <div className='home-body-intro'>
        <Fade cascade duration={1000}>
        <h1>This is what I do.</h1>
        </Fade>
      </div>

      
      <div className='home-body-section'>

          

      
        <div className="spacer-250 wave-black-purple">

        </div>

        <motion.div ref={top1ref} className='home-body-content purple' style={{y: y1, zIndex: 3}}>
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
        <motion.div ref={top2ref} className='home-body-content green' style={{y:y2, zIndex: 2}}>
          
          <Bounce top cascade>
          <div className="home-body-content-graphic">
            <img className='fit' src="/images/robotics1.png" alt="temp" />
          </div>
        
          <div className='home-body-content-description'>
              <img className="bg-blob-p"src="/images/purpleBlob1.png" alt="blob"/>
              <img className="bg-blob-3-p"src="/images/purpleBlob5.png" alt="blob"/>
              <img className="bg-blob-2-p"src="/images/purpleBlob4.png" alt="blob"/>
            <h1 className='black-text'>I build.</h1>
            <p className='black-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet non tellus vel faucibus. Sed dolor magna, iaculis sit amet luctus sit amet, maximus id elit. </p>
            </div>
          </Bounce>

        </motion.div>
        <div className="spacer-200 wave-green-purple"></div>
        <motion.div ref= {top3ref} className='home-body-content purple down' style={{y:y3, zIndex: 1}}>
          <Bounce top cascade>
          <div className='home-body-content-description'>
            <img className="bg-blob"src="/images/greenBlob1.png" alt="blob"/>
            <img className="bg-blob-3"src="/images/greenBlob3.png" alt="blob"/>
            <img className="bg-blob-2"src="/images/greenBlob2.png" alt="blob"/>
            <h1 className='black-text'>I teach.</h1>
            <p className='black-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet non tellus vel faucibus. Sed dolor magna, iaculis sit amet luctus sit amet, maximus id elit. </p>
            
            
          </div>

          <div className="home-body-content-graphic rel">
            <span>
              <img className='teach-image onhover' src="/images/problemSolving.png" alt="nothing" />
            </span>
            <span>
              <img className='teach-image onhover' src="/images/git.png" alt="nothing" />
            </span>
            <span>
              <img className='teach-image onhover' src="/images/binarySearch.png" alt="nothing" />
            </span>
            <span>
              <img className='teach-image onhover' src="/images/timeComplexity.png" alt="nothing" />
            </span>
            <span>
              <img className='teach-image onhover' src="/images/dynamicProgramming.png" alt="nothing" />
            </span>
            <span>
              <img className='teach-image onhover' src="/images/dataStructures.png" alt="nothing" />
            </span>
          </div>
          </Bounce>
        </motion.div>
        <div className='spacer-250 wave-purple-black'></div>
        <div className='conclusion-body'>
          <div className='conclusion-description'>
            <Fade cascade>
            <h1>Contact me through: </h1>
            </Fade>
          </div>
            
          <div className='conclusion-contacts'>
            <img className='contact-logo' src='/images/github-mark-white.svg' alt='/'></img>
            <img className='contact-logo linkedin' src='/images/linkedin.png'></img>
            <img className='contact-logo' src='/images/instagram.png'></img>
            <img className='contact-logo gmail' src='/images/Gmail_Logo.svg'></img>
          </div>
          
        </div>

      </div>

      
    </>
  
  )
}

export default Home