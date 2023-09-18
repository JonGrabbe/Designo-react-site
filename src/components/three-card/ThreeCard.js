import Card from "../card/Card";
import webDesignImgMobile from '../../assets/home/mobile/image-web-design.jpg';
import appDesignImgMobile from '../../assets/home/mobile/image-app-design.jpg';
import graphicDesignImgMobile from '../../assets/home/mobile/image-graphic-design.jpg';

const images = {
    webDesign: {
        mobile: '../../assets/home/mobile/image-web-design.jpg',
        tablet: '../../assets/home/tablet/image-web-design.jpg',
        desktop: '../../assets/home/desktop/image-web-design-large.jpg'
    },
    appDesign: {
        mobile: '../../assets/home/mobile/image-app-design.jpg',
        tablet: '../../assets/home/tablet/image-app-design.jpg',
        desktop: '../../assets/home/desktop/image-app-design.jpg'
    },
    graphicDesign: {
        mobile: '../../assets/home/mobile/image-graphic-design.jpg',
        tablet: '../../assets/home/tablet/image-graphic-design.jpg',
        desktop: '../../assets/home/desktop/image-graphic-design.jpg'
    }
    
}

const webDesign = 'assets/home/mobile/image-web-design.jpg'
const appDesign = 'assets/home/mobile/image-app-design.jpg';
const graphicDesign = 'assets/home/mobile/image-graphic-design.jpg';

export default function ThreeCard(props) {
    return (
        <div className="three-card-container spacer-margin">
            <Card text="web design" className="tall" imgPath={images.webDesign} />
            <Card text="app design" imgPath={images.appDesign} />
            <Card text="graphic design" imgPath={images.graphicDesign} />
        </div>
    )
}