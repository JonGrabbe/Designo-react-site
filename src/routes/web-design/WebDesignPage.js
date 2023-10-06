import ServicesBanner from "../../components/services-banner/ServicesBanner";
import PortfolioCardsContainer from "../../components/portfolio-cards-container/PortfolioCardsContainer";
import TwoCard from "../../components/two-card/TwoCard";

function WebDesignPage(props) {
    return ( 
        <>
            <ServicesBanner text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips." heading='Web Design' />
            <PortfolioCardsContainer category="webDesign" />
            <TwoCard category="webDesign" />
        </>
     );
}

export default WebDesignPage;