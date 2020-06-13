import React, { useEffect } from "react"
import "./../css/home.css"
import Front from "../component/front";
import About from "../component/about";
const Home =()=>{
    useEffect(()=>{
        if(document.querySelector('.pricing') === null){
            const brand = document.querySelector('.brand');
            brand.classList.remove('brown')
            brand.classList.add('default')
        }
    })
    return(
        <>
            <Front/>
            <About/>
        </>
    )
}
export default Home