import React from "react"
import "./../css/topics.css"
const Topics =({icon,topic, excerpt})=>{
    return(
        <div className="topic">
            <div className="topic-box">
                <img src={icon} alt={topic} />
                <h5>{topic}</h5>
            </div>
            <p>{excerpt}</p>
        </div>
    )
}
export default Topics