import PortfolioCard from "../../components/portfolio-card/PortfolioCard"
import PortfolioCardsContainer from "../../components/portfolio-cards-container/PortfolioCardsContainer"
import ServicesBanner from "../../components/services-banner/ServicesBanner"

export default function GraphicDesignPage(props) {
    return (
        <>
            <ServicesBanner text={props.text} />
            <PortfolioCardsContainer category="graphicDesign" />
        </>
    )
}