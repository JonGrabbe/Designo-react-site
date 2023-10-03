function PortfolioCard() {
    return (
        <div className="portfolio-card-container">
            <div className="img-container">

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