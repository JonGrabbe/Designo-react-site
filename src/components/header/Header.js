import logo from "../../assets/shared/desktop/logo-dark.png"
import hamburgerMenuIcon from "../../assets/shared/mobile/icon-hamburger.svg";

function MenuItem(props) {
    return (
        <li className="menu-item">
            <a href={props.href}>{props.text}</a>
        </li>
    )
}

export default function Header(props) {
    return (
        <>
            <header className="header spacer">
                <img src={logo} className="logo" alt="" />
                <img src={hamburgerMenuIcon} alt="" />
            </header>

            <div className="menu-dropdown-container">
                <nav className="spacer menu-items-container nav-ul-menu">
                    <ul>
                        <MenuItem text="Our company" href="/about" />
                        <MenuItem text="Our Locations" />
                        <MenuItem text="Our Contact" />
                    </ul>
                </nav>
            </div>
        </>
    )
}