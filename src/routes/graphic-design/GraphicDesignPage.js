import PortfolioCard from "../../components/portfolio-card/PortfolioCard"
import PortfolioCardsContainer from "../../components/portfolio-cards-container/PortfolioCardsContainer"
import ServicesBanner from "../../components/services-banner/ServicesBanner"
import TwoCard from "../../components/two-card/TwoCard"

export default function GraphicDesignPage(props) {
    return (
        <>
            <ServicesBanner text={props.text} heading="Graphic Design" />
            <PortfolioCardsContainer category="graphicDesign" />
            <TwoCard category="graphicDesign" />
        </>
    )
}