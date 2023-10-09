import BorderlessCard from "../borderless-card/BorderlessCard";

function AboutPageBorderlessCardsContainer(props) {
    return (
        <div className="borderless-cards-container about-page-borderless-cards-container spacer-margin">
            {/* <BorderlessCard imgType="passionate" text={passionateText} headingText="PASSIONATE" />
            <BorderlessCard imgType="resourceful" text={friendlyText} headingText="RESOURCEFUL" />
            <BorderlessCard imgType="friendly" text={resourcefulText} headingText="FRIENDLY" /> */}
            <BorderlessCard headingText="CANADA" imgType='canada' hasButton={true} />
            <BorderlessCard headingText="AUSTRALIA" imgType='australia' hasButton={true} />
            <BorderlessCard headingText="UK" imgType='uk' hasButton={true} />
        </div>
    );
}

export default AboutPageBorderlessCardsContainer;