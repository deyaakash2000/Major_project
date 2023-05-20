import React,{useEffect} from 'react'
// import vid from '../videos/event.mp4';
import styleCarousel from '../css/styleCarousel.css'
// import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect'
function Backvideo() {

    return (
        <>
              <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
                <ol className="carousel-indicators">
                 
                   
                </ol>


                <div className="carousel-inner">
                    <div className="item slides active">
                        <div className="slide-1">
                            <div className="overlay"></div>
                        </div>
                        <div className="hero">
                            <hgroup>
                                <h1>Your Event Our Priority...</h1>
                                    <h4>
                                    <Typewriter
                                        options={{autoStart:true,
                                        loop:true,
                                         delay : 40, 
                                         strings: [ '', 'Reminds important events' ,'we notify you', 'Dont miss your important events','']}}
                                        
                                            
                                         
                                        />
                                    </h4>
                                    <div>
                              
                                    </div>
                                    <h3></h3>
                            </hgroup>
                            <button className="btn btn-hero btn-lg" role="button"><NavLink to='/login' className="btn" >Explore more</NavLink> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Backvideo