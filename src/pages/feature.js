import React, { useEffect } from "react"
import {Link} from "react-router-dom";
import "./../css/pricing.css";
import { isInViewport } from "../helper/helper";
const Feature =()=>{
    useEffect(()=>{
        const pricing = document.querySelector('.pricing');
        if(pricing !== null && isInViewport(pricing)){
            const brand = document.querySelector('.brand');
            brand.classList.remove('default')
            brand.classList.remove('blue')
            brand.classList.add('brown')
        }
    })
    return(
        <>
        <div className="pricing">
            <div className="pricing-inner">
                <div className="col">
                    <h5>Basic</h5>
                    <p>
                        <sup>$</sup>
                        <span>30</span>
                        <sub>/ month</sub>
                    </p>
                    <div className="badge">
                        <small>1 user</small>
                    </div>
                    <ul>
                        <li>Access on all devices</li>
                        <li>One-to-one sharing</li>
                        <li>Password generator</li>
                    </ul>
                    <Link to="/">Subscribe</Link>
                </div>
                <div className="col">
                    <h5>Premium</h5>
                    <p>
                        <sup>$</sup>
                        <span>50</span>
                        <sub>/ month</sub>
                    </p>
                    <div className="badge">
                        <small>3 user</small>
                    </div>
                    <ul>
                        <li>Access on all devices</li>
                        <li>One-to-one sharing</li>
                        <li>Password generator</li>
                        <li>Secure notes</li>
                    </ul>
                    <Link to="/">Subscribe</Link>
                </div>
                <div className="col">
                    <h5>Pro</h5>
                    <p>
                        <sup>$</sup>
                        <span>100</span>
                        <sub>/ month</sub>
                    </p>
                    <div className="badge">
                        <small>5 user</small>
                    </div>
                    <ul>
                        <li>Access on all devices</li>
                        <li>One-to-one sharing</li>
                        <li>Password generator</li>
                        <li>Secure notes</li>
                        <li>Security challenge</li>
                        <li>Multi-factor authentification</li>
                    </ul>
                    <Link to="/">Subscribe</Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default Feature