import React from "react";
import "./../css/about.css";
import {Link} from "react-router-dom"

const About = ()=>{
    return(
        <>
            <div className="about-us">
                <div className="about-us-inner">
                    <h3>About Us</h3>
                    <div className="about-us-content">
                        <div className="image">

                        </div>
                        <div className="about-text">
                            <p>We're small team of creatives who teamed up to create a solution to small market enterprises. We understand the important of productivity in business We see the relevance in keeping records updated and in hand.</p>
                            <h4>We're just like you!</h4>
                            <Link to="/#">
                                <div className="seeus">
                                    <small>See us.</small>
                                    <div className="arrows">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team">
                <h3>Development Team</h3>
                <h5>Get to know the amazing individual that put TrackBiz together.</h5>
                <div className="team-gallery">

                </div>
            </div>
        </>
    )
}
export default About;