import React from "react"
import "./../css/widget.css"
const Widget =({title,children})=>{
    return(
        <div className="widget">
            <h4>{title}</h4>
                {children}
        </div>
    )
}
export default Widget