import ButtonOnDark from '../buttons/ButtonOnDark';
import smallCircle from '../../assets/shared/desktop/bg-pattern-small-circle.svg';

export default function Banner(props) {
    let smallCirclePath = '../../assets/shared/desktop/bg-pattern-small-circle.svg';
    let circleWidth = 292;
    let styles = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/shared/desktop/bg-pattern-small-circle.svg), url(${process.env.PUBLIC_URL}/assets/shared/desktop/bg-pattern-small-circle.svg), url(${process.env.PUBLIC_URL}/assets/shared/desktop/bg-pattern-small-circle.svg)`,
        backgroundPosition: `65px -80px, 65px 207px`,
        backgroundSize: "292px auto, 292px auto",
        backgroundRepeat: "no-repeat",
    }
    return (
        <div className="footer-banner-container banner spacer-margin" style={styles}>
            <h2 className="banner-heading h2">Let’s talk about your project</h2>
            <p className="banner-text p">
                Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
            </p>
            <ButtonOnDark text="GET IN TOUCH" />
        </div>
    )
}