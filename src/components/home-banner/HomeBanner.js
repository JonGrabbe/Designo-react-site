import ButtonOnDark from "../buttons/ButtonOnDark";
import PhoneImg from "../../assets/home/desktop/image-hero-phone.png";

export default function HomeBanner(props) {
    return (
        <div className="home-banner-container banner" style={{backgroundImage: `url(${process.env.PUBLIC_URL+'/bg-pattern-small-circle.svg'})`}} >
            <div className="top-container spacer">
                <h2 className="banner-heading h2">
                    Award-winning custom designs and digital branding solutions
                </h2>
                <p className="banner-text p">
                    With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, 
                    and engaging brand experiences. Find out more about our services.
                </p>
                <ButtonOnDark text="learn more" />
            </div>
            <div className="bottom-container" style={{backgroundImage: `url(${process.env.PUBLIC_URL+'/image-hero-phone.png'})`}}>
                
            </div>
        </div>
    )
}