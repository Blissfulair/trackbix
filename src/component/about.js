import React from "react"
import "./../css/aboutfront.css"
import Card from "./card";
import phone from "./../images/phone.png"
import calendar from "./../images/calendar.png"
import Dot from "./dot";
import {Link} from "react-router-dom"
import Slider from "./slider";
import Carousel from "./carousel";
import Apple from "./apple";
import Android from "./android";
import JoinUs from "./joinus";
const About =()=>{
    return(
        <div className="about">
            <div className="inner-about">
                <h3>About the app</h3>
                <div className="row">
                    <Card 
                    title="Keep track of your budget"
                    body ="Trackbiz allow you keep track of your monthly spending"
                    />
                    <Card 
                    title="Keep track of your budget"
                    body ="Trackbiz allow you keep track of your monthly spending"
                    />
                    <Card 
                    title="Keep track of your budget"
                    body ="Trackbiz allow you keep track of your monthly spending"
                    />
                </div>
            </div>
            <div className="how-it-works">
                <h3>How it works</h3>
                <div className="content">
                    <div className="cal-text">
                        <div className="inner">
                            <h5>Calendar</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                                Ut wisi enim ad minim veniam,
                            </p>
                            <div className="content-img">
                                <img src={phone} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="hor-grid">
                        <div className="hor-row">
                            {[...Array(32)].map((val,i)=>{
                                return(
                                    <Dot key={i}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-slant">
                <div className="col">
                    <div className="circle">
                        <img src={phone} alt=""/>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <div className="ribbon"></div>
                        <h5>Calendar</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                            Ut wisi enim ad minim veniam,
                        </p>
                    </div>
                </div>
            </div>

            <div className="slant-2">
                <div className="col">
                    <div>
                        <h5>Calendar</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                            Ut wisi enim ad minim veniam,
                        </p>
                        <p>And many more. <Link to="/features">Explore to find out</Link></p>
                    </div>
                </div>
                <div className="col">
                    <Slider>
                        <div className="slide-image item"><img src={calendar} alt="" /></div>
                        <div className="item active" ><img src={phone} alt="" /></div>
                        <div className="slide-image item"><img src={calendar} alt="" /></div>
                        <div className="slide-image item"><img src={calendar} alt="" /></div>
                    </Slider>
                </div>
            </div>

            <div className="slant-3">
                <div className="slant-3-inner">
                    <h3>Client Review</h3>
                    <Carousel arrows auto={5000}>
                        <div className="item">
                            <div className="item-image"></div>
                            <div className="item-content">
                                <p><span id="left-q">&ldquo;</span>Spend less time worrying about your business and more time more time managing your stock.Spend less time worrying about your business and more time more time managing your stock.<span id="right-q">&rdquo;</span></p>
                                <small>- Steve Jobs</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image"></div>
                            <div className="item-content">
                                <p><span id="left-q">&ldquo;</span>Spend less time worrying about your business and more time more time managing your stock.<span id="right-q">&rdquo;</span></p>
                                <small>- Iyobosa</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image"></div>
                            <div className="item-content">
                                <p><span id="left-q">&ldquo;</span>Spend less time worrying about your business and more time more time managing your stock.<span id="right-q">&rdquo;</span></p>
                                <small>- Delight</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image"></div>
                            <div className="item-content">
                                <p><span id="left-q">&ldquo;</span>Spend less time worrying about your business and more time more time managing your stock.<span id="right-q">&rdquo;</span></p>
                                <small>- Godson</small>
                            </div>
                        </div>
                    </Carousel>
                    <div className="dot-right">
                        {[...Array(32)].map((val,i)=>{
                                    return(
                                        <Dot key={i}/>
                                    )
                                })}
                    </div>
                    <div className="dot-left">
                        {[...Array(32)].map((val,i)=>{
                                    return(
                                        <Dot key={i}/>
                                    )
                                })}
                    </div>
                </div>
            </div>
            <div className="join-us">
                <div className="join-us-inner">
                    <JoinUs/>
                    <div className="app-store">
                        <Android/>
                        <div className="apple">
                            <Apple/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About