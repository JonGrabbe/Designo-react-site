import {useState} from 'react';
import logo from "../../assets/shared/desktop/logo-dark.png"
import hamburgerMenuIcon from "../../assets/shared/mobile/icon-hamburger.svg";
import closeMenuIcon from "../../assets/shared/mobile/icon-close.svg";
import { Link } from 'react-router-dom';
import MenuButtonAnimation from './MenuButtonAnimation';


// $(document).ready(function(){
//     $(".hamburger").click(function(){
//       $(this).toggleClass("is-active");
//     });
//   });

// document.getElementById('hamburger-5').classList.toggle('is-active')
  

function MenuItem(props) {
    return (
        <li className="menu-item">
            <Link onClick={props.handleClick} to={props.href}>{props.text}</Link>
            <span className="hover-animation"></span>
        </li>
    )
}

function Menu(props) {
    return (
        <>
            <MenuItem text="Our company" href="/about" handleClick={props.handleClick} />
            <MenuItem text="Our Locations" href='/locations' handleClick={props.handleClick} />
            <MenuItem text="Our Contact" href='/contact' handleClick={props.handleClick} />
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

    function closeMenu() {
        setIsMenuOpen(false)
    }

    return (
        <>
            <header className="header spacer-margin">
                <Link onClick={closeMenu} to='/'><img src={logo} className="logo" alt="" /></Link>
                <button onClick={menuClick} className='menu-button'>
                    {/* <img src={isMenuOpen ? closeMenuIcon : hamburgerMenuIcon} alt="" /> */}
                    <MenuButtonAnimation />
                </button>
                <nav className="header-nav-menu-container nav-ul-menu">
                    <ul>
                        <Menu handleClick={menuClick} />
                    </ul>
                </nav>
            </header>

            <div className={"menu-dropdown-container"+menuClassName} id='menu-dropdown-container'>
                <nav className="spacer menu-items-container nav-ul-menu">
                    <ul>
                        {/* <MenuItem text="Our company" href="/about" />
                        <MenuItem text="Our Locations" />
                        <MenuItem text="Our Contact" /> */}
                        <Menu handleClick={menuClick} />
                    </ul>
                </nav>
                <div className="dark-background-cover" onClick={menuClick}></div>
            </div>
        </>
    )
}