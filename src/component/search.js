import React from "react"
import "./../css/search.css"
const Search =({onSearch})=>{
    return(
        <div id="search">
            <input name="search" onChange={e=>onSearch(e)} type="text"  />
            <button type="button" className="icon-search"></button>
        </div>
    )
}
export default Search