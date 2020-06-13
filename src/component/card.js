import React from "react"
import "./../css/card.css"
const Card =({title,body})=>{
    return(
        <div className="card">
            <div className="icon"></div>
            <div className="card-inner">
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
        </div>
    )
}
export default Card