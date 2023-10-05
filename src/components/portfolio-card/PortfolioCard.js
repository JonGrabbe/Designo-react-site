function PortfolioCard(props) {
    return (
        <div className="portfolio-card-container">
            <div className="img-container">
                <img className="img" src={props.imgPath} alt="" />
            </div>
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