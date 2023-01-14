import { Link, Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
            <ul>
                <li><Link to={ '/' }>Breakout</Link></li>
            </ul>
            <Outlet></Outlet>
        </>
    )
}
export default Layout;