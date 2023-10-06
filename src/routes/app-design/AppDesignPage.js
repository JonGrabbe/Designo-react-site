import ServicesBanner from "../../components/services-banner/ServicesBanner";
import PortfolioCardsContainer from "../../components/portfolio-cards-container/PortfolioCardsContainer";
import TwoCard from "../../components/two-card/TwoCard";

function AppDesignPage(props) {
    return ( 
        <>
            <ServicesBanner text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips." heading='App Design' />
            <PortfolioCardsContainer category="appDesign" />
            <TwoCard />
        </>
     );
}

export default AppDesignPage;