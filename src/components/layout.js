import { NavLink, Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li><NavLink className={({ isActive }) => (isActive) ? 'active' : ' '} to={'/'}>Home</NavLink></li>
                </ul>
                <hr />
            </div>
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default Layout;