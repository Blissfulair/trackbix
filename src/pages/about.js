import React, { useEffect } from "react";
import "./../css/about.css";
import { isInViewport } from "../helper/helper";
import about from "./../images/about.png"
import PhotoCard from "../component/photocard";

const About = ()=>{
    useEffect(()=>{
        const about = document.querySelector('.about-us');
        if(about !== null &&  isInViewport(about)){
            const brand = document.querySelector('.brand');
            brand.classList.remove('brown')
            brand.classList.remove('default')
            brand.classList.add('blue')
        }
    })
    return(
        <>
            <div className="about-us">
                <div className="about-us-inner">
                    <h3>About Us</h3>
                    <div className="about-us-content">
                        <div className="image">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="about-text">
                            <p>We're small team of creatives who teamed up to create a solution to small market enterprises. We understand the important of productivity in business We see the relevance in keeping records updated and in hand.</p>
                            <h4>We're just like you!</h4>
                            <a href="#team">
                                <div className="seeus">
                                    <small>See us.</small>
                                    <div className="arrows">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </a>
                            <div className="icons"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team" id="team">
                <h3>Development Team</h3>
                <h5>Get to know the amazing individual that put TrackBiz together.</h5>
                <div className="team-gallery">
                    <PhotoCard image={about} name={'Jeremy Lovre'} position={'User Interface Designer'} />
                    <PhotoCard image={about} name={'Jeremy Lovre'} position={'User Interface Designer'} />
                    <PhotoCard image={about} name={'Jeremy Lovre'} position={'User Interface Designer'} />
                    <PhotoCard image={about} name={'Jeremy Lovre'} position={'User Interface Designer'} />
                    <PhotoCard image={about} name={'Jeremy Lovre'} position={'User Interface Designer'} />
                    <PhotoCard image={about} name={'Jeremy Lovre'} position={'User Interface Designer'} />
                </div>
            </div>
        </>
    )
}
export default About;