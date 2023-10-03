import { useState } from "react"
import PortfolioCard from "../portfolio-card/PortfolioCard"

let imgPathBase = '../../assets/'
const imagesData = {
    timBrown: {
        imgPath: `${imgPathBase}graphic-design/desktop/image-boxed-water.jpg`,
        category: 'graphicDesign',
        order: 1,
        title: 'TIM BROWN',
        text: "A book cover designed for Tim Brown\’s new release, \‘Change\’"
    },
    boxedWater: {
        imgPath: `${imgPathBase}graphic-design/desktop/image-boxed-water.jpg`,
        category: 'graphicDesign',
        order: 2,
        title: 'BOXED WATER',
        text: 'A simple packaging concept made for Boxed Water'
    },
    science: {
        imgPath: `${imgPathBase}graphic-design/desktop/image-boxed-water.jpg`,
        category: 'graphicDesign',
        order: 3,
        title: 'SCIENCE',
        text: 'A poster made in collaboration with the Federal Art Project'
    }     
}

function getCardComponents(category) {
    let arr = []

    for(let img in imagesData) {
        if(imagesData[img].category === category) {
            arr.push(<PortfolioCard imgPath={img.imgPath} heading={img.title} text={img.text} />)
        }
    }

    return arr
}

function PortfolioCardsContainer(props) {
    // const [images, setImages] = useState()
    // let arr = getCardComponents(props.category)
    // console.log(arr.length)
    // setImages(arr)
    // console.log(images)
    return (
        <div className="portfolio-cards-container">
            {
                getCardComponents(props.category)
            }
        </div>
    );
}

export default PortfolioCardsContainer;