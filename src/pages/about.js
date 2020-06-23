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
                            <div className="icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="380.502" height="323.452" viewBox="0 0 380.502 323.452">
                                    <g id="Teamillustration_abstract" transform="translate(-1461.332 -658.442)">
                                        <g id="Group_125" data-name="Group 125" transform="translate(1184.125 598.107)">
                                        <path id="Polygon_2" data-name="Polygon 2" d="M137.62,0,275.24,238.54H0Z" transform="translate(330.867 70.121) rotate(13)" fill="#274dad"/>
                                        <g id="Polygon_3" data-name="Polygon 3" transform="translate(389.524 60.335) rotate(13)" fill="none">
                                            <path d="M137.62,0,275.24,238.54H0Z" stroke="none"/>
                                            <path d="M 137.6197967529297 28.01554870605469 L 24.23979187011719 224.5404052734375 L 250.9998016357422 224.5404052734375 L 137.6197967529297 28.01554870605469 M 137.6197967529297 1.52587890625e-05 L 275.2395935058594 238.5404052734375 L 0 238.5404052734375 L 137.6197967529297 1.52587890625e-05 Z" stroke="none" fill="#ecc308"/>
                                        </g>
                                        </g>
                                        <g id="Group_123" data-name="Group 123" transform="translate(-62.984 -409)">
                                        <path id="Path_547" data-name="Path 547" d="M8504.708,3493.765s38.981-25.223,74.905,9.172,72.612-27.516,72.612-27.516" transform="translate(-7172.917 -1179.451) rotate(-7)" fill="none" stroke="#13688a" strokeWidth="11"/>
                                        <rect id="Rectangle_810" data-name="Rectangle 810" width="148.906" height="148.906" rx="22" transform="translate(1539.922 1255.94) rotate(-25)" fill="#b3001b"/>
                                        <ellipse id="Ellipse_122" data-name="Ellipse 122" cx="24.959" cy="24.959" rx="24.959" ry="24.959" transform="translate(1625.234 1236.696) rotate(-25)" fill="#ecc308" style={{mixBlendMode: `overlay`,isolation: `isolate`}}/>
                                        <path id="Path_546" data-name="Path 546" d="M8504.708,3493.765s38.981-25.223,74.905,9.172,72.612-27.516,72.612-27.516" transform="translate(-7197.917 -1128.451) rotate(-7)" fill="none" stroke="#28c2ff" strokeWidth="11"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
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