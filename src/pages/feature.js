import React, { useEffect } from "react"
import {Link} from "react-router-dom";
import "./../css/pricing.css";
import { isInViewport } from "../helper/helper";
import {packages} from "./../data/topics.js"
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
                {
                    packages.map((pack,i)=>{
                        return (
                            <div key={i} className="col">
                            <h5>{pack.package}</h5>
                            <p>
                                <sup>$</sup>
                                <span>{pack.price}</span>
                                <sub>/ month</sub>
                            </p>
                            <div className="badge">
                                <small>{pack.user > 1? `${pack.user} users`: `${pack.user} user`}</small>
                            </div>
                            <ul>
                                {
                                    pack.content.map((content,j)=>{
                                        return <li key={j}>{content.list}</li>
                                    })
                                }
                            </ul>
                            <Link to="/">Subscribe</Link>
                        </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export default Feature