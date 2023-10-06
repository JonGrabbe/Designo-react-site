import { useState } from "react"
import PortfolioCard from "../portfolio-card/PortfolioCard"

let imgPathBase = '../../assets/'
const imagesData = {
    timBrown: {
        imgPath: `${imgPathBase}graphic-design/desktop/image-change.jpg`,
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
        imgPath: `${imgPathBase}graphic-design/desktop/image-science.jpg`,
        category: 'graphicDesign',
        order: 3,
        title: 'SCIENCE',
        text: 'A poster made in collaboration with the Federal Art Project'
    },
    express: {
        imgPath: `${imgPathBase}web-design/desktop/image-express.jpg`,
        category: 'webDesign',
        order: 1,
        title: 'express',
        text: 'A multi-carrier shipping website for ecommerce businesses'
    },
    transfer: {
        imgPath: `${imgPathBase}web-design/desktop/image-transfer.jpg`,
        category: 'webDesign',
        order: 2,
        title: 'TRANSFER',
        text: 'Site for low-cost money transfers and sending money within seconds'
    },
    photon: {
        imgPath: `${imgPathBase}web-design/desktop/image-photon.jpg`,
        category: 'webDesign',
        order: 3,
        title: 'PHOTON',
        text: 'A state-of-the-art music player with high-resolution audio and DSP effects'
    },
    builder: {
        imgPath: `${imgPathBase}web-design/desktop/image-builder.jpg`,
        category: 'webDesign',
        order: 4,
        title: 'BUILDER',
        text: 'Connects users with local contractors based on their location'
    },
    blogr: {
        imgPath: `${imgPathBase}web-design/desktop/image-blogr.jpg`,
        category: 'webDesign',
        order: 5,
        title: 'BLOGR',
        text: 'Blogr is a platform for creating an online blog or publication'
    },
    camp: {
        imgPath: `${imgPathBase}web-design/desktop/image-camp.jpg`,
        category: 'webDesign',
        order: 6,
        title: 'CAMP',
        text: 'Get expert training in coding, data, design, and digital marketing'
    },
    airfilter: {
        imgPath: `${imgPathBase}app-design/desktop/image-airfilter.jpg`,
        category: 'appDesign',
        order: 1,
        title: 'AIRFILTERS',
        text: 'Solving the problem of poor indoor air quality by filtering the air'
    },
    eyecam: {
        imgPath: `${imgPathBase}app-design/desktop/image-eyecam.jpg`,
        category: 'appDesign',
        order: 2,
        title: 'EYECAM',
        text: 'Product that lets you edit your favorite photos and videos at any time'
    },
    faceit: {
        imgPath: `${imgPathBase}app-design/desktop/image-faceit.jpg`,
        category: 'appDesign',
        order: 3,
        title: 'FACEIT',
        text: 'Get to meet your favorite internet superstar with the faceit app'
    },
    todo: {
        imgPath: `${imgPathBase}app-design/desktop/image-todo.jpg`,
        category: 'appDesign',
        order: 3,
        title: 'TODO',
        text: 'A todo app that features cloud sync with light and dark mode'
    },
    loopstudios: {
        imgPath: `${imgPathBase}app-design/desktop/image-loopstudios.jpg`,
        category: 'appDesign',
        order: 4,
        title: 'LOOPSTUDIOS',
        text: 'A VR experience app made for Loopstudios'        
    }
}

function getCardComponents(category) {
    let arr = []

    for(let img in imagesData) {
        if(imagesData[img].category === category) {
            let obj = imagesData[img]
            arr.push(<PortfolioCard imgPath={obj.imgPath} heading={obj.title} text={obj.text} />)
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
    const images = getCardComponents(props.category).map(item => item)
    console.log(images)
    return (
        <div className="portfolio-cards-container spacer-margin">
            {
                images
            }
        </div>
    );
}

export default PortfolioCardsContainer;