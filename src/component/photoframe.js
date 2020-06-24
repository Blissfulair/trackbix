import React, { Component } from "react";
import "./../css/photoframe.css"
class PhotoFrame extends Component{
    render(){
        return (
            <div id="side-carousel" className="container">
            {this.props.children}
            </div>
        )
    }
}
export default PhotoFrame;