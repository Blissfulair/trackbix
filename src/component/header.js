import React, { useEffect } from "react"
import {Link } from "react-router-dom";
import "./../css/header.css"
import { isInViewport, openMobileMenu, closeMobileMenu } from "../helper/helper";
import Theme from "./theme";
const Header = ({title})=>{
    
    useEffect(()=>{
        let isOpen = false
        window.onscroll = (e)=>{
            let home = document.querySelector('.home');
            const pricing = document.querySelector('.pricing');
            const support = document.querySelector('.support-search');
            const about = document.querySelector('.about-us');
            if(home === null && pricing !== null)
                home = pricing
            if(home === null && support !== null)
            home= support;
            if(home === null && about !== null)
            home = about;

            if(home !== null){
                if(!isInViewport(home)){
                    const brand = document.querySelector('.brand');
                    brand.classList.remove('brown')
                    brand.classList.remove('blue')
                    brand.classList.add('default')
                    document.querySelector('.header').style.background = 'transparent linear-gradient(5deg, #28C2FF 0%, #142757 100%)';
                }
                else{
                 document.querySelector('.header').style.background = 'transparent';
                 if(document.querySelector('.pricing') !== null){
                    const brand = document.querySelector('.brand');
                    brand.classList.remove('default')
                    brand.classList.remove('blue')
                    brand.classList.add('brown')
                }
                else if(document.querySelector('.about-us') !== null){
                    const brand = document.querySelector('.brand');
                    brand.classList.remove('brown')
                    brand.classList.remove('default')
                    brand.classList.add('blue')
                }
                }
            }
       }

       window.addEventListener('click',(e)=>{
           if(!isOpen){
               isOpen = openMobileMenu(e,isOpen)
           }else{
                isOpen = closeMobileMenu(e,isOpen)
           }
       })
    })
    return (
        <div className="header">
            <header>
                <div className={`brand default`}>
                    <Link to="/"><h5>{title}</h5></Link>
                </div>
                <div className="menu">
                    <ul className="menu-items">
                        <li className="menu-item">Download</li>
                        <li className="menu-item"><a href="/#about">About the App</a></li>
                        <li className="menu-item"><Link to="pricing">Pricing</Link></li>
                        <li className="menu-item"><Link to="support">Support</Link></li>
                        <li className="menu-item">Try for free</li>
                        <li className="menu-item tbtn">
                            <Theme/>
                        </li>
                    </ul>
                </div>
                <div className="hambuger">
                    <div className="inner">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header;