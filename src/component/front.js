import React from "react"
import "./../css/front.css"
import Android from "./android";
import Apple from "./apple";
import phone from "./../images/phone.png"
const Front =()=>{
    return(
        <div className="home">
            <div className="home-inner">
                <div className="home-text">
                    <div className="text">
                        <h5>Managing your</h5>
                        <h4>BUSINESS</h4>
                        <h5>is easiest with us.</h5>
                        <h6>
                            we provide you with the best tools, all to manage, keep track and monitor your business growth.
                        </h6>
                    </div>
                    <div className="home-icons">
                        <Android/>
                        <div className="apples">
                            <Apple/>
                        </div>
                    </div>
                </div>
                <div className="home-image">
                    <img src={phone} alt="phone"/>
                </div>
            </div>
        </div>
    )
}
export default Front