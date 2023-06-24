import { useState } from "react"

const Navbar = ()=>{
    const [search, setSearch] = useState(""); 
    return(
        <div>
            <form>
                <input type="text" name="search" value={search} onChange={(e) => {setSearch(e.target.value)}} />
                <input type="submit" value="search"/>
            </form>
        </div>
    )
}

export default Navbar ;