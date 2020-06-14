import React, { useEffect, useState } from "react"
import "./../css/tab.css"
import { openTab } from "../helper/helper";
const Tab =({children,open=false,show})=>{
    const [toggle, setToggle]=useState(true)
    useEffect(()=>{
        window.addEventListener('click', (e)=>{
            openTab(e);
            setToggle(!open && !show ?false:true)
            
        })
    },[open,toggle,show])
    return(
        <div className={`tab${open? ` open`:' close'}${show?` display`:''}`}>
            <span className="toggle down"></span>
        {children}
        </div>
    )
}
export default Tab