import ButtonOnDark from "../buttons/ButtonOnDark";
import PhoneImg from "../../assets/home/desktop/image-hero-phone.png";

export default function HomeBanner(props) {
    return (
        <div className="home-banner-container banner spacer">
            <div className="top-container">
                <h2 className="banner-heading h2">
                    Award-winning custom designs and digital branding solutions
                </h2>
                <p className="banner-text p">
                    With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, 
                    and engaging brand experiences. Find out more about our services.
                </p>
                <ButtonOnDark text="learn more" />
            </div>
            <div className="bottom-container">
                <img src={PhoneImg} alt="" className="botton-container-img" />
            </div>
        </div>
    )
}