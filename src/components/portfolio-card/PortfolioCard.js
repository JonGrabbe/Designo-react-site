function PortfolioCard(props) {
    // let imgPath = '../../assets/graphic-design/desktop/image-boxed-water.jpg'
    // let imgPathBase = '../../assets/'
    /* const imagesData = {
        timBrown: {
            imgPath: `${imgPathBase}graphic-design/desktop/image-boxed-water.jpg`,
            category: 'graphicDesign',
            order: 1
        },
        boxedWater: {
            imgPath: `${imgPathBase}graphic-design/desktop/image-boxed-water.jpg`,
            category: 'graphicDesign',
            order: 2
        },
        science: {
            imgPath: `${imgPathBase}graphic-design/desktop/image-boxed-water.jpg`,
            category: 'graphicDesign',
            order: 3
        }     
    } */
    return (
        <div className="portfolio-card-container">
            {/* <div className="img-container"> */}
                {/* <img src={require('../../assets/graphic-design/desktop/image-boxed-water.jpg')} alt="" /> */}
            {/* </div> */}
                <img className="img" src={props.imgPath} alt="" />
            <div className="info-container">
                <div className="content-wrapper">
                    <h2 className="heading h2">
                        {props.heading}
                    </h2>
                    <p className="text p">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;