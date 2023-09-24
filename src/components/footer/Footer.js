import logo from "../../assets/shared/desktop/logo-light.png";
import facebook from '../../assets/shared/desktop/icon-facebook.svg'
import instagram from '../../assets/shared/desktop/icon-instagram.svg'
import pinterest from '../../assets/shared/desktop/icon-pinterest.svg'
import twitter from '../../assets/shared/desktop/icon-twitter.svg'
import youtube from '../../assets/shared/desktop/icon-youtube.svg'

export default function Footer(props) {
    return (
        <footer className="footer">
            <img src={logo} alt="" className="logo item" />
            <hr className="hr" />
            <div className="item links-container">
                <a href="" className="link">Our company</a>
                <a href="" className="link">Locations</a>
                <a href="" className="link">Contact</a>
            </div>
            <div className="item info-container">
                <h2 className="h2 heading item">Designo Central Office</h2>
                <p className="text-item item">3886 Wellington Street</p>
                <p className="text-item item">Toronto, Ontario M9C 3J5</p>
                
            </div>
            <div className="item info-container">
                <h2 className="h2 heading item">
                    Contact Us (Central Office)
                </h2>
                <p className="text-item item">
                    P : +1 253-863-8967
                </p>
                <p className="text-item item">
                    M : contact@designo.co
                </p>
            </div>
            <div className="social-media-icons-container">
                <img src={facebook} alt="" className="icon-img" />
                <img src={youtube} alt="" className="icon-img" />
                <img src={twitter} alt="" className="icon-img" />
                <img src={pinterest} alt="" className="icon-img" />
                <img src={instagram} alt="" className="icon-img" />
            </div>
        </footer>
    )
}