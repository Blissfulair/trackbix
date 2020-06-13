import React, { useEffect } from "react"
import "./../css/tab.css"
import { openTab } from "../helper/helper";
const Tab =({children,open})=>{
    useEffect(()=>{
        window.addEventListener('click', (e)=>{
            openTab(e);
        })
    })
    return(
        <div className={`tab${open? ` open`:''}`}>
        {children}
        </div>
    )
}
export default Tab