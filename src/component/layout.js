import React from "react";
import "./../css/layout.css"

const Layout = ({children})=>{
    return (
        <div className="site-layout">
            <main>{children}</main>
        </div>
    )
}
export default Layout;