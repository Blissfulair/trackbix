import React from "react"
import "./../css/android.css"
import play from "./../images/playstore.svg"
const Android =()=>{
    return(
        <div className="android">
            <div className="android-inner">
                <div>
                    <p>Get it on</p>
                    <p>Playstore</p>
                </div>
                <img src={play} alt="playstore"/>
            </div>
        </div>
    )
}
export default Android