import React, {Component} from "react";
import "./../css/carousel.css"

class Carousel extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0,
            total:0,
            time:0,
        }
    }

    componentDidMount(){
        if(this.props.auto)
        this.autoSlide(this.props.auto)
        let len = this.props.children !== undefined? this.props.children.length:1
        this.setState({total:len})
    }

    //show slide
    sliderShow = (n) =>{
        const carousel = document.querySelector('.slant-3-slider')
        if(carousel !== null){
            const countDom = carousel.querySelectorAll('.item');
            const cont = countDom.length;
            let slideIndex = Number(n);
            if(slideIndex < 0)
                slideIndex = cont -1;
            else if(slideIndex > cont-1)
                slideIndex = 0
            this.setState({count:slideIndex},()=>{
                this.changeSlide(slideIndex,countDom)
            })  
        }
    }
    componentWillUnmount(){
        clearInterval(this.state.time)
    }

    //change the image of the slider
    changeSlide = (n,countDom)=>{
        const cont = countDom.length;
        const {count} = this.state
        let prev = n-1;
        let next = n+1;
        prev = count === 0? cont-1:prev
        next = count < cont-1 && next < cont? next:0
        countDom[prev].style.opacity = '0';
        countDom[next].style.opacity = '0';
        countDom[prev].style.transform=`translateX(${100}%)`
        countDom[n].style.opacity='1'
        countDom[n].style.transform=`translateX(${0}%)`
        countDom[next].style.transform=`translateX(${-100}%)`

    }

    //if the auto attribute is set
    autoSlide =(speed=0)=>{
        let len = this.props.children !== undefined? this.props.children.length:1
        let slideIndex = this.state.count +1;
       let time =  setInterval(()=>{
        if(slideIndex >= len)
         slideIndex = 0;
           this.sliderShow(slideIndex)
           slideIndex++
        },speed)
        this.setState({time:time})
    }

    //pause the slider on mouse enter on the nav
    onHover =()=>{
            clearInterval(this.state.time)
    }

    prevSlide = ()=>{
        this.sliderShow(Number(this.state.count - 1))
    }



    nextSlide = ()=>{
        this.sliderShow(Number(this.state.count + 1))
    }




    render(){
        //const {total} = this.state
        const {children,arrows,auto} = this.props
        return(
            <>
                    <div className="slant-3-slider">
                        {arrows?(
                            <>
                                <div 
                                onClick={this.prevSlide} 
                                onMouseEnter={this.onHover} 
                                onMouseOut={()=>this.autoSlide(auto)} 
                                className="left">
                                    <span className="icon-back"></span>    
                                </div>
                                <div className="items">{children}</div>
                                <div 
                                onClick={this.nextSlide} 
                                onMouseEnter={this.onHover} 
                                onMouseOut={()=>this.autoSlide(auto)} 
                                className="right">
                                    <span className="icon-next"></span>
                                </div>
                            </>
                        ):''}
                    </div>
            </>
        )
    }
}
export default Carousel;