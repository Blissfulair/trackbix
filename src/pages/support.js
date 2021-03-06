import React, { Component } from "react"
import "./../css/support.css"
import Search from "../component/search";
import Topics from "../component/topics";
import JoinUs from "../component/joinus";
import {Link} from "react-router-dom"
import {topics} from "./../data/topics.js";
import {faqs} from "./../data/faq.js"
import Tab from "../component/tab";
class Support extends Component{
    constructor(props){
        super(props)
        this.state={
            search:'',
            FAQ:[]
        }
    }
    componentDidMount(){
        if(document.querySelector('.pricing') === null){
            const brand = document.querySelector('.brand');
            brand.classList.remove('brown')
            brand.classList.add('default')
        }
        this.setState({FAQ:faqs})
    }
    componentWillUnmount(){
       
    }
    onSearch = (e)=>{
        const value = e.target.value;
        const faq = faqs.filter(data=>data.title.toLowerCase().includes(value.toLowerCase()));
        this.setState({FAQ:faq})
    }
render(){
    const {FAQ} =this.state
    return(
        <>
            <div className="support-search">
                <div className="support-top">
                    <h4>Support Centre</h4>
                    <h5>Hey there, how can we help you?</h5>
                    <p>Search a related problem, lets find the best help</p>
                    <Search onSearch={this.onSearch}/>
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
                                    icon={topic.icon}
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
                          FAQ.length > 0? FAQ.map((faq,i)=>{
                                return(
                                    <Tab key={i}  show={i===0?true:false}> 
                                        <div className="tab-title">
                                            <h5>{faq.title}</h5>
                                        </div>
                                        <div className="tab-body">
                                            <p>{faq.body}</p>
                                        </div>
                                    </Tab>
                                )
                            }):
                            (
                                <p>No Record matches your search</p>
                            )
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
}
export default Support