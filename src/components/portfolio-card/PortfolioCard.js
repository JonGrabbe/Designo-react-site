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
            <div className="img-container">
                {/* <img src={require('../../assets/graphic-design/desktop/image-boxed-water.jpg')} alt="" /> */}
                <img className="img" src={props.imgPath} alt="" />
            </div>
            <div className="info-container">
                <h2 className="heading h2">
                    {props.heading}
                </h2>
                <p className="text p">
                    {props.text}
                </p>
            </div>
        </div>
    );
}

export default PortfolioCard;