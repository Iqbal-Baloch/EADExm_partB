import { useState } from "react"

const Listing = ({recepies})=>{

    return(
        <div>
            {
                recepies.map((item) =>(
                    <div key={item._id}>
                        <div>Titile: {item.title}</div><br/>
                        <div>Description: {item.description}</div><br/>
                    </div>
                ))
            }
        </div>
    )
}

export default Listing ;