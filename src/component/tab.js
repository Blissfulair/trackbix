import React, {Component } from "react"
import "./../css/tab.css"
class Tab extends Component{
    constructor(props){
        super(props)
        this.state ={
            show:false,
            open:false
        }
    }
    onOpen =(e)=>{
        if(e.target.parentElement.className.includes('tab ')){
            if( e.target.parentElement.className.includes('close')){
                e.target.parentElement.classList.remove('close')
                e.target.parentElement.classList.add('open')
            }
            else{
                e.target.parentElement.classList.remove('open')
                e.target.parentElement.classList.add('close')
            }
        }
        else if(e.target.parentElement.parentElement.className.includes('tab ')){
            if( e.target.parentElement.parentElement.className.includes('close')){
                e.target.parentElement.parentElement.classList.remove('close')
                e.target.parentElement.parentElement.classList.add('open')
            }
            else{
                e.target.parentElement.parentElement.classList.remove('open')
                e.target.parentElement.parentElement.classList.add('close')
            }
        }
        else if(e.target.className.includes('tab ')){
            if( e.target.className.includes('close')){
                e.target.classList.remove('close')
                e.target.classList.add('open')
            }
            else{
                e.target.classList.remove('open')
                e.target.classList.add('close')
            }
        }
    }
    render(){
        const {open, show} = this.state
        const {children} = this.props
        return(
            <div onClick={this.onOpen} aria-hidden="true" className={`tab${open? ` open`:' close'}${show?` display`:''}`}>
                <span className="toggle down"></span>
            {children}
            </div>
        )
    }
}
export default Tab