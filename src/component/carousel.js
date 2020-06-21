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
    sliderShow = () =>{
        const carousel = document.querySelector('.slant-3-slider')
        const {count} = this.state
        if(carousel !== null){
            const countDom = carousel.querySelectorAll('.item');
            const cont = countDom.length;
            let slideIndex = Number(count);
            if(slideIndex < 0)
                slideIndex = cont -1;
            else if(slideIndex > cont-1)
                slideIndex = 0
            this.setState({count:slideIndex},()=>{
                this.changeSlide(countDom)
            })  
        }
    }
    componentWillUnmount(){
        clearInterval(this.state.time)
    }

    //change the image of the slider
    changeSlide = (countDom)=>{
        const items = countDom;
        const {count} = this.state
        const active = document.querySelector('.slant-3-slider').querySelector('.active');
        let next = count> 0?count-1:(count=== 0?items.length-1:0) ;
        let prev = count>= items.length-1?0:count+ 1;
        const current = items[count];
        const last = items[next];
        const newone = items[prev];
        if(active !== null)
        active.classList.remove('active')
        last.style.transform = 'translateX(100%)';
    
        current.style.visibility = 'visible';
        current.style.transform = 'translateX(0)';
        current.classList.add('active')
        newone.style.transform = 'translateX(-100%)';
        newone.style.visibility = 'hidden';
        last.style.visibility = 'hidden';


    }

    //if the auto attribute is set
    autoSlide =(speed=0)=>{
        let len = this.props.children !== undefined? this.props.children.length:1
        let slideIndex = this.state.count;
       let time =  setInterval(()=>{
        slideIndex++
        if(slideIndex >= len)
         slideIndex = 0;
        if(slideIndex < 0)
        slideIndex = len -1
           this.setState({count:slideIndex}, ()=>{this.sliderShow()})
           
        },speed)
        this.setState({time:time})
    }

    //pause the slider on mouse enter on the nav
    onHover =()=>{
            clearInterval(this.state.time)
    }

    prevSlide = ()=>{
        const carousel = document.querySelector('.slant-3-slider')
        if(carousel !== null){
        const items = carousel.querySelectorAll('.item')
        let num = Number(this.state.count-1)
        if(num<0)
        num = items.length -1;
        this.sliderShow()
        this.setState({count:num})
        }
    }



    nextSlide = ()=>{
        const carousel = document.querySelector('.slant-3-slider')
        if(carousel !== null){
        const items = carousel.querySelectorAll('.item')
        let num =Number(this.state.count + 1);
        if(num > items.length -1)
        num = 0;
        this.sliderShow()
        this.setState({count:num})
        }
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
                                // onMouseEnter={()=>this.onHover()} 
                                // onMouseLeave={()=>this.autoSlide(auto)} 
                                onPointerLeave={()=>this.autoSlide(auto)}
                                onPointerEnter={()=>this.onHover()}  
                                className="left">
                                    <span className="icon-back"></span>    
                                </div>
                                <div className="items">{children}</div>
                                <div 
                                onClick={this.nextSlide} 
                                onPointerLeave={()=>this.autoSlide(auto)} 
                                onPointerEnter={()=>this.onHover()} 
                                // onMouseEnter={()=>this.onHover()} 
                                // onMouseLeave={()=>this.autoSlide(auto)} 
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