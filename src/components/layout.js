function Layout({ children }) {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li></li>
                </ul>
                <hr />
            </div>
            <main>
                {children}
            </main>
        </>
    )
}
export default Layout;