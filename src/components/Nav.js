import {Link} from 'react-router-dom';
import React from "react"


const Nav = (props) =>{
    return(

        <div className="nav">

<Link to="/">
    <div> iStocks </div>
</Link>

<Link to="/stocks">
<div> Stocks </div>
</Link>


<Link to="/prices">
<div>Prices </div>
</Link>

        </div>
    )
}

export default Nav;