import Card from "../card/Card";
import { images } from "../../data/three-card-images/three-card-images";
// const images = {
//     webDesign: {
//         mobile: '../../assets/home/mobile/image-web-design.jpg',
//         tablet: '../../assets/home/tablet/image-web-design.jpg',
//         desktop: '../../assets/home/desktop/image-web-design-large.jpg'
//     },
//     appDesign: {
//         mobile: '../../assets/home/mobile/image-app-design.jpg',
//         tablet: '../../assets/home/tablet/image-app-design.jpg',
//         desktop: '../../assets/home/desktop/image-app-design.jpg'
//     },
//     graphicDesign: {
//         mobile: '../../assets/home/mobile/image-graphic-design.jpg',
//         tablet: '../../assets/home/tablet/image-graphic-design.jpg',
//         desktop: '../../assets/home/desktop/image-graphic-design.jpg'
//     }
    
// }

export default function TwoCard(props) {
    let cardData = {
        graphicDesign: {
            firstElm: {
                text: 'web design',
                href: '/web-design'
            },
            secondElm: {
                text: 'app design',
                href: '/app-design'
            }
        },
        webDesign: {
            firstElm: {
                text: 'app design',
                href: '/app-design'
            },
            secondElm: {
                text: 'graphic design',
                href: '/graphic-design'
            }
        },
        appDesign: {
            firstElm: {
                text: 'web design',
                href: '/web-design'
            },
            secondElm: {
                text: 'graphic design',
                href: '/graphic-design'
            }
        }
    }
    // let firstElm;
    // let secondElm;
    // if(props.category === 'graphicDesign') {
    //     firstElm = <Card text={cardData[props.category].firstElm.text} imgPath={images.webDesign} href="/web-design" />
    //     secondElm= <Card text="app design" imgPath={images.appDesign} href="/app-design" />
    // }
    
    let currentData = cardData[props.category]
    console.log(currentData)

    return (
        <div className="two-card-container spacer-margin">
            <Card text={currentData.firstElm.text} imgPath={images[props.category]} href="/web-design" />
            <Card text="graphic design" imgPath={images.graphicDesign} href="/graphic-design" />
        </div>
    )
}