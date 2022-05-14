import React, {useContext} from "react";

import PageContext from "../contexts/PageContext";

export default () => {
    const {username} = useContext(PageContext);
    // return <div className="navbar">Hi {username}</div>;
    return (
        <ul className="navbar">
        <li className="nav_item"><a className="nav_link" href="#">Home</a></li>
        <li className="nav_item"><a className="nav_link" href="#">View Prices</a></li> 
        <li className="nav_login"><a className="nav_link" href="#">Hi {username}</a></li> 
        </ul>
    )
}