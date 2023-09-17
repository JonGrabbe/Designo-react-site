import Card from "../card/Card";
import webDesignImgMobile from '../../assets/home/mobile/image-web-design.jpg';
import appDesignImgMobile from '../../assets/home/mobile/image-app-design.jpg';
import graphicDesignImgMobile from '../../assets/home/mobile/image-graphic-design.jpg';

const webDesign = 'assets/home/mobile/image-web-design.jpg'
const appDesign = 'assets/home/mobile/image-app-design.jpg';
const graphicDesign = 'assets/home/mobile/image-graphic-design.jpg';

export default function ThreeCard(props) {
    return (
        <div className="three-card-container spacer-margin">
            <Card text="web design" imgPath={webDesign} />
            <Card text="app design" imgPath={appDesign} />
            <Card text="graphic design" imgPath={graphicDesign} />
        </div>
    )
}