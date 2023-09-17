import {useState} from 'react';
import logo from "../../assets/shared/desktop/logo-dark.png"
import hamburgerMenuIcon from "../../assets/shared/mobile/icon-hamburger.svg";
import closeMenuIcon from "../../assets/shared/mobile/icon-close.svg";

function MenuItem(props) {
    return (
        <li className="menu-item">
            <a href={props.href}>{props.text}</a>
        </li>
    )
}

export default function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let menuClassName = isMenuOpen ? ' menu-open' : ' menu-closed';
    // let menuIconChangeClick = isMenuOpen ? <img src={closeMenuIcon} alt="" /> : <img src={hamburgerMenuIcon} alt="" />

    function menuClick() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <header className="header spacer-margin">
                <img src={logo} className="logo" alt="" />
                <button onClick={menuClick} className='menu-button'>
                    <img src={isMenuOpen ? closeMenuIcon : hamburgerMenuIcon} alt="" />
                </button>
                <nav className="header-nav-menu-container nav-ul-menu">
                    <ul>
                        <MenuItem text="Our company" href="/about" />
                        <MenuItem text="Our Locations" />
                        <MenuItem text="Our Contact" />
                    </ul>
                </nav>
            </header>

            <div className={"menu-dropdown-container"+menuClassName} id='menu-dropdown-container'>
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