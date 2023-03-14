import React, {useState} from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'

function Home() {
    /*const [isUp, setIsUp] = useState(false);
    const bringUp = () => {
        const p1 = document.getElementById("slide1");
        p1.style.color = "black"
        setIsUp(!isUp)
    }

    const bringDown = () => {
        const p1 = document.getElementById("slide1")
        setIsUp(!isUp)
    }*/

    return (
        <>  
            <div className='home-title-section'>
                <div className='home-title-background'>
                
                </div>
                <div className='home-title-introduction'>
                    <h1 className='home-title-text-1'>Hi,</h1>
                    <h1>I'm Ethan.</h1>
                </div>
                
            </div>
            
            <div className='home-body-section'>
                <h1 className='home-body-intro'>This is what I do.</h1>
                <div className="spacer-250 wave-1">

                </div>
                <div className='home-body-content purple'>
                    <div className='home-body-content-description '>
                        <img className="bg-blob"src="/images/greenBlob.png" alt="blob"/>
                        <h1 className='black-text'>I code.</h1>
                        <p className='black-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet non tellus vel faucibus. Sed dolor magna, iaculis sit amet luctus sit amet, maximus id elit. In erat ipsum, venenatis nec volutpat cursus, mattis id lorem. Ut ultricies velit elit, sed ultrices nibh aliquet sagittis.</p>
                    </div>
                    <div className="home-body-content-graphic grid">
                        
                        <div className='code-grid-item'>
                            <img className="code-image" src="images/uniHealth.png" alt="uniHealth" />
                        </div>
                        <div className='code-grid-item'>2</div>
                        <div className='code-grid-item'>3</div>
                        <div className='code-grid-item'>4</div>
                    </div>

                </div>
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
                <div className='home-body-content purple'>
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