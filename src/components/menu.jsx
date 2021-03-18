import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
const Menu = () => {
    return ( < >

        <
        div className = "container" >
        <
        ul className = "nav" >
        <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "/login"> Login < /Link> < /
        li > 
        <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "/register"> Register < /Link> < /
        li > 
        <
        /ul>    < /
        div >
        <
        />

    );
}


export default Menu;