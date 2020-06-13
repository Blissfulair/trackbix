import React from "react"
import "./../css/photocard.css"
const PhotoCard =({image,name,position})=>{
    return(
        <div className="photo-card">
            <img src={image} alt={name}/>
            <div className="photo-inner">
                <h4>{name}</h4>
                <p>{position}</p>
            </div>
        </div>
    )
}
export default PhotoCard