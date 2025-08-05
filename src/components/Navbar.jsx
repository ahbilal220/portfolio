import './Navbar.css';
function Navbar() {
    return (
        <nav className="nav-bar">
            <h1 className="logo">Ahmad Bilal</h1>
            <ul className="links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;