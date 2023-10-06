import Card from "../card/Card";

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

export default function ThreeCard(props) {
    return (
        <div className="three-card-container spacer-margin">
            <Card text="web design" className="tall" imgPath={images.webDesign} href="web-design" />
            <Card text="app design" imgPath={images.appDesign} href="app-design" />
            <Card text="graphic design" imgPath={images.graphicDesign} href="graphic-design" />
        </div>
    )
}