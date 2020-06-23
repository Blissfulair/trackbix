import React, { Component } from "react";
import "./../css/slider.css"
class Slider extends Component{
    render(){
        return (
            <div id="side-carousel" className="container">
            {this.props.children}
            </div>
        )
    }
}
export default Slider;