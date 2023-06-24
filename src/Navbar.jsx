import { useState } from "react"
import { Link } from "react-router-dom";

const Navbar = ()=>{
    const [search, setSearch] = useState(""); 
    return(
        <div>
            <form>
                <input type="text" name="search" value={search} onChange={(e) => {setSearch(e.target.value)}} />
                <input type="submit" value="search"/>
            </form>

            <ul>
          <li>
            <Link to="/">Listing</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>
        </div>
    )
}

export default Navbar ;