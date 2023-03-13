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
                <div className="spacer wave-1">

                </div>
                <div className='home-body-content'>
                    <div className='home-body-content-description'>
                        <h1 className='black-text'>I code.</h1>
                    </div>
                    <div className="home-body-content-graphic grid">
                        <div className='code-grid-item'>1</div>
                        <div className='code-grid-item'>2</div>
                        <div className='code-grid-item'>3</div>
                        <div className='code-grid-item'>4</div>
                    </div>

                </div>
                <div className='home-body-content'>
                    <div className="home-body-content-graphic">
                        <img src="/images/logo512.png" alt="temp" />
                    </div>
                    <div className='home-body-content-description'>
                        <h1 className='black-text'>I build.</h1>
                    </div>

                </div>
                <div className='home-body-content'>
                    <div className='home-body-content-description'>
                        <h1 className='black-text'>I teach.</h1>
                    </div>
                    <div className="home-body-content-graphic rel">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>


                    </div>

                </div>
            </div>
        </>
    
    )
}

export default Home