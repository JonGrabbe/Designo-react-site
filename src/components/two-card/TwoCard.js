import Card from "../card/Card";
import { images } from "../../data/three-card-images/three-card-images";

export default function TwoCard(props) {
    let cardData = {
        graphicDesign: {
            firstElm: {
                text: 'web design',
                href: '/web-design',
                image: 'webDesign'
            },
            secondElm: {
                text: 'app design',
                href: '/app-design',
                image: 'appDesign'
            }
        },
        webDesign: {
            firstElm: {
                text: 'app design',
                href: '/app-design',
                image: 'appDesign'
            },
            secondElm: {
                text: 'graphic design',
                href: '/graphic-design',
                image: 'graphicDesign'
            }
        },
        appDesign: {
            firstElm: {
                text: 'web design',
                href: '/web-design',
                image: 'webDesign'
            },
            secondElm: {
                text: 'graphic design',
                href: '/graphic-design',
                image: 'graphicDesign'
            }
        }
    }
    
    let currentData = cardData[props.category]
    console.log(currentData)

    let secondImage = images[currentData.secondElm.image]

    return (
        <div className="two-card-container spacer-margin">
            <Card text={currentData.firstElm.text} imgPath={images[props.category]} href={currentData.firstElm.href} />
            <Card text={currentData.secondElm.text} imgPath={secondImage} href={currentData.secondElm.href} />
        </div>
    )
}