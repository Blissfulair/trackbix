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
            const tab=e.target.parentElement;
            const toggle = tab.querySelector('.toggle');
            if(tab.className.includes('close')){
               tab.classList.remove('close')
               tab.classList.add('open')
               toggle.classList.remove('down')
               toggle.classList.add('up')
            }
            else{
               tab.classList.remove('open')
               tab.classList.add('close')
               toggle.classList.remove('up')
               toggle.classList.add('down')
            }
        }
        else if(e.target.parentElement.parentElement.className.includes('tab ')){
            const tab = e.target.parentElement.parentElement;
            const toggle = tab.querySelector('.toggle');
            if(tab.className.includes('close')){
               tab.classList.remove('close')
               tab.classList.add('open')
               toggle.classList.remove('down')
               toggle.classList.add('up')
            }
            else{
               tab.classList.remove('open')
               tab.classList.add('close')
               toggle.classList.remove('up')
               toggle.classList.add('down')
            }
        }
        else if(e.target.className.includes('tab ')){
            const tab = e.target;
            const toggle = tab.querySelector('.toggle');
            if(tab.className.includes('close')){
               tab.classList.remove('close')
               tab.classList.add('open')
               toggle.classList.remove('down')
               toggle.classList.add('up')
            }
            else{
               tab.classList.remove('open')
               tab.classList.add('close')
               toggle.classList.remove('up')
               toggle.classList.add('down')
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