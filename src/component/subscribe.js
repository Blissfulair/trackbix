import React, {Component} from "react"
import "./../css/subscribe.css"
class Subscribe extends Component{
    constructor(){
        super();
        this.state ={
            email:''
        }
    }
    onSubscribe = (e)=>{
        const form = e.target;
        const {email} =this.state
        e.preventDefault();
        if(email.includes('@') && email.includes('.')){
            form.reset()
            alert(`Dear ${email}, you have sucessfully subscribed on Trackbiz.`)
        }
        else
        alert(`Sorry the email address is invalid`)

    }
    email=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return(
            <form onSubmit={e=>this.onSubscribe(e)} className="subscribe">
                <input type="text" name="email" onChange={this.email} placeholder="Enter your email address" />
                <button>Subscribe</button>
            </form>
        )
    }
}
export default Subscribe