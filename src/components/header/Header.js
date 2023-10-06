import {useState} from 'react';
import logo from "../../assets/shared/desktop/logo-dark.png"
import hamburgerMenuIcon from "../../assets/shared/mobile/icon-hamburger.svg";
import closeMenuIcon from "../../assets/shared/mobile/icon-close.svg";
import { Link } from 'react-router-dom';

function MenuItem(props) {
    return (
        <li className="menu-item">
            <Link to={props.href}>{props.text}</Link>
        </li>
    )
}

function Menu(props) {
    return (
        <>
            <MenuItem text="Our company" href="/about" />
            <MenuItem text="Our Locations" href='/locations' />
            <MenuItem text="Our Contact" href='/contact' />
        </>
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
                <Link to='/'><img src={logo} className="logo" alt="" /></Link>
                <button onClick={menuClick} className='menu-button'>
                    <img src={isMenuOpen ? closeMenuIcon : hamburgerMenuIcon} alt="" />
                </button>
                <nav className="header-nav-menu-container nav-ul-menu">
                    <ul>
                        <Menu />
                    </ul>
                </nav>
            </header>

            <div className={"menu-dropdown-container"+menuClassName} id='menu-dropdown-container'>
                <nav className="spacer menu-items-container nav-ul-menu">
                    <ul>
                        {/* <MenuItem text="Our company" href="/about" />
                        <MenuItem text="Our Locations" />
                        <MenuItem text="Our Contact" /> */}
                        <Menu />
                    </ul>
                </nav>
            </div>
        </>
    )
}