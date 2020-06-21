import React, { Component } from "react";
import "./../css/slider.css"
class Slider extends Component{
    constructor(props){
        super(props)
        this.state ={
            count:0,
            clone:false,
            time:0
        }
    }
    componentDidMount(){
        const active = document.querySelector('#side-carousel').querySelector('.active')
        if(active !== null)
        active.classList.remove('active');
        const time =     setInterval(()=>{
                this.slider(this.state.count)
                this.setState({count:this.state.count+1})
            },7000)
            this.setState({time:time})
            
    }
    componentWillUnmount(){
        clearInterval(this.state.time)
    }
    slider = n=>{
        const slide = document.querySelector('#side-carousel');
       if(slide !== null){
        const items = slide.querySelectorAll('.item')
        const active = slide.querySelector('.active')
        if(active !== null){
            active.classList.remove('active');
        }

        if(n > items.length -1)
            n = 0
        this.setState({count:n})
        const {count} = this.state

        let next = count - 1 < 0? items.length-1: (count-1 === 0?0:count-1);
        let first = next - 1 < 0? items.length-1: (next-1 === 0?0:next-1);
        let second = first - 1 < 0? items.length-1: (first-1 === 0?0:first-1);
        let third = second - 1 < 0? items.length-1: (second-1 === 0?0:second-1);
        let prev = third - 1 < 0? items.length-1: (third-1 === 0?0:third-1);
        if(items[prev]){
                items[prev].style.opacity=`0` 
                setTimeout(()=>{
                    items[prev].style.transform=`translateX(${596}px)` 
                },1000)
        }
        items[second].classList.remove('slide-image')
        items[first].classList.add('slide-image')
        items[third].classList.add('slide-image')
        items[first].style.border=`none`;
        items[third].style.border=`none`;
        items[first].style.padding = "0";
        items[third].style.padding = "0";
        items[third].style.opacity=`1` 
        items[first].style.opacity=`1` 
        items[second].style.opacity=`1` 
        items[first].style.transform=`translateX(${0}px)`
        items[second].style.transform=`translateX(${75}%) scale(1.2)`
        items[second].style.padding = "30px 10px";
        items[second].style.border=`5px solid #E9EDF7`;
        items[third].style.transform=`translateX(${200}%)`
        if(items[next]){
            
            items[next].style.opacity=`0` 
            setTimeout(()=>{
                items[next].style.transform=`translateX(${-100}%)` 
            },1000)
        }
       }
        
    }
    render(){
        return (
            <div id="side-carousel" className="container">
            {this.props.children}
            </div>
        )
    }
}
export default Slider;