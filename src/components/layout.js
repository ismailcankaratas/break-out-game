import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/breakout'}>Breakout</Link></li>
                </ul>
            </div>
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default Layout;