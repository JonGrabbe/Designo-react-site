import AboutBannerWorldClass from "../../components/about-banner-world-class/AboutBannerWorldClass";
import AboutBanner from "../../components/about-banner/AboutBanner";
import AboutPageBorderlessCardsContainer from "../../components/about-page-borderless-cards/AboutPageBorderlessCards";

function AboutPage(props) {
    return (
        <>
            <AboutBanner />
            <AboutBannerWorldClass />
            <AboutPageBorderlessCardsContainer />
        </>
    );
}

export default AboutPage;