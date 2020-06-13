import React, { useEffect } from "react"
import "./../css/support.css"
import play from  "./../images/playstore.svg"
import Search from "../component/search";
import Topics from "../component/topics";
import JoinUs from "../component/joinus";
import {Link} from "react-router-dom"
import {topics} from "./../data/topics.js";
import {faqs} from "./../data/faq.js"
import Tab from "../component/tab";
const Support =()=>{
    useEffect(()=>{
        if(document.querySelector('.pricing') === null){
            const brand = document.querySelector('.brand');
            brand.classList.remove('brown')
            brand.classList.add('default')
        }
    })
    return(
        <>
            <div className="support-search">
                <div className="support-top">
                    <h4>Support Centre</h4>
                    <h5>Hey there, how can we help you?</h5>
                    <p>Search a related problem, lets find the best help</p>
                    <Search/>
                </div>
            </div>
            <div className="help-topics">
                <div className="help-inner">
                    <h3>Help Topics</h3>
                    <div className="topics">
                        {
                            topics.map((topic,i)=>{
                                return(
                                    <Topics
                                    key={i}
                                    icon={play}
                                    topic={topic.topic}
                                    excerpt={topic.excerpt}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="faq">
                <div className="faq-inner">
                    <h3>Frequently asked Questions</h3>
                    <div className="answers">
                        {
                            faqs.map((faq,i)=>{
                                return(
                                    <Tab key={i} toggle={i===0?true:false}> 
                                        <div className="tab-title">
                                            <h5>{faq.title}</h5>
                                        </div>
                                        <div className="tab-body">
                                            <p>{faq.body}</p>
                                        </div>
                                    </Tab>
                                )
                            })
                        }
                    </div>
                    <div className="get-join">
                        <JoinUs/>
                        <div className="btn">
                            <Link to="/">Get Started for free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Support