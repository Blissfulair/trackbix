import React from "react"
import "./../css/aboutfront.css"
import Card from "./card";
import phone from "./../images/phone.png"
import calendar from "./../images/calendar.png"
import Dot from "./dot";
import {Link} from "react-router-dom"
import PhotoFrame from "./photoframe";
import Carousel from "./carousel";
import Apple from "./apple";
import Android from "./android";
import JoinUs from "./joinus";
import iyobosa from "./../images/about.png"
import slider from "./../images/slider.png"
import slider1 from "./../images/slider1.png"
import slider2 from "./../images/slider2.png"
const About =()=>{
    return(
        <div className="about">
            <div id="how" className="inner-about">
                <h3>How it works</h3>
                <div className="row">
                    <Card 
                    title="Register"
                    body ={`Download and install the application from play store or app store. Register and setup you user account.`}
                    />
                    <Card 
                    title="Select Subscription Method"
                    body ={`Select a subscription package that best fits your prestige and business scale.  Setup your business account, customize your messages and receipts.`}
                    />
                    <Card 
                    title="Begin Usage and Enjoy"
                    body ="Enjoy our unlimited service of keeping you in track with your records."
                    />
                </div>
            </div>
            <div id="about" className="how-it-works">
                <h3>About the app</h3>
                <div className="content about-row">
                    <div className="cal-text">
                        <div className="inner">
                            <h5>{`Product Catalogue`}</h5>
                            <p>
                                {`Keep records of products available for sale, in the products catalogue and share with potential customers in a click.`}
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
                        <div className="ribbon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="222.078" height="96.129" viewBox="0 0 222.078 96.129">
                            <g id="Landing_page_section_Design" transform="translate(-1255.72 -3472.617)">
                                <path id="Path_542" data-name="Path 542" d="M8504.708,3497.1s46.074-29.813,88.534,10.841,85.824-32.523,85.824-32.523" transform="translate(-7246)" fill="none" stroke="#28c2ff" strokeWidth="11"/>
                                <path id="Path_543" data-name="Path 543" d="M8504.708,3497.1s46.074-29.813,88.534,10.841,85.824-32.523,85.824-32.523" transform="translate(-7206 43)" fill="none" stroke="#ecc308" strokeWidth="11"/>
                            </g>
                        </svg>
                        </div>
                        <h5>{`Receipts`}</h5>
                        <p>
                            {`Tired of having to post customer reviews? We have you covered with sales receipts showing cost of items, item image and customer details customized to your taste.`}
                        </p>
                    </div>
                </div>
            </div>

            <div className="slant-2">
                <div className="col">
                    <div>
                        <h5>{`Service Catalogue`}</h5>
                        <p>
                            {`Setup breakdowns of service costs for customers and share with a click.`}
                        </p>
                        <p>And many more. <Link to="/features">Explore to find out</Link></p>
                    </div>
                </div>
                <div className="col">
                    <PhotoFrame>
                        <div className="item actives" ><img src={calendar} alt="TrackBiz Front screen" /></div>
                    </PhotoFrame>
                </div>
            </div>

            <div className="about-row">
                <div className="provider">
                    <div className="col">
                        <img src={phone} alt=""/>
                    </div>
                    <div className="col">
                        <h5>{`Busy Service Provider?`}</h5>
                        <p>{`We got your back, Setup and check your schedule in few clicks, stay organized and up to date.`}</p>
                    </div>
                </div>

                <div className="owner">
                    <div className="col">
                        <h5>{`Busy Business Owner?`}</h5>
                        <p>{`You can now watch your business progress from whatever you are, home or abroad.`}</p>
                    </div>
                    <div className="col">
                        <img src={phone} alt="TrackBiz back" />
                        <div className="curve">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 600.346 559.135">
                            <path id="Path_555" data-name="Path 555" d="M256.234-21.367C371.7-173.2,512.469,93.353,512.469,234.868S397.749,491.1,256.234,491.1,0,376.382,0,234.868,140.773,130.467,256.234-21.367Z" transform="matrix(0.087, -0.996, 0.996, 0.087, 66.448, 516.333)" fill="#41e59e"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="customers">
                    <div className="col">
                    <img src={phone} alt="" />
                    </div>
                    <div className="col">
                        <h5>{`Not Keeping Customers?`}</h5>
                        <p>{`Let us help you maintain your customer base by sending thank you see you soon notes to your customers.`}</p>
                    </div>
                </div>
            </div>

            <div className="slant-3">
                <div className="slant-3-inner">
                    <h3>Client Review</h3>
                    <Carousel arrows auto={5000}>
                        <div className="item active">
                            <div className="item-image">
                                <img src={iyobosa} alt="" />
                            </div>
                            <div className="item-content">
                                <p><span id="left-q">&ldquo;</span>Spend less time worrying about your business and more time more time managing your stock.Spend less time worrying about your business and more time more time managing your stock.<span id="right-q">&rdquo;</span></p>
                                <small>- Steve Jobs</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                            <img src={slider} alt="" />
                            </div>
                            <div className="item-content">
                                <p><span id="left-q">&ldquo;</span>Spend less time worrying about your business and more time more time managing your stock.<span id="right-q">&rdquo;</span></p>
                                <small>- Iyobosa</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src={slider1} alt="" />
                            </div>
                            <div className="item-content">
                                <p><span id="left-q">&ldquo;</span>Spend less time worrying about your business and more time more time managing your stock.<span id="right-q">&rdquo;</span></p>
                                <small>- Delight</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-image">
                                <img src={slider2} alt="" />
                            </div>
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
                        <Android color="light" />
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