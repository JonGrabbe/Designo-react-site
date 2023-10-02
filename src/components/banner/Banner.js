import ButtonOnDark from '../buttons/ButtonOnDark';

export default function Banner(props) {
    let imgUrl = `url(${process.env.PUBLIC_URL}/assets/shared/desktop/bg-pattern-small-circle-flipped-1801.svg)`;
    let backgroundImage = `${imgUrl}, ${imgUrl}, ${imgUrl}`;
    let xPosition = '130%'
    let styles = {
        backgroundImage: backgroundImage,
        backgroundPosition: `${xPosition} -80px, ${xPosition} 208px, -240px 178px`,
        backgroundSize: "292px auto, 292px auto",
        backgroundRepeat: "no-repeat",
    }
    return (
        <div className="footer-banner-container banner spacer-margin" >
            <h2 className="banner-heading h2">Let’s talk about your project</h2>
            <p className="banner-text p">
                Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
            </p>
            <ButtonOnDark text="GET IN TOUCH" />
        </div>
    )
}