import BorderlessCard from "../borderless-card/BorderlessCard";

function AboutPageBorderlessCardsContainer(props) {
    return (
        <div className="borderless-cards-container spacer-margin">
            {/* <BorderlessCard imgType="passionate" text={passionateText} headingText="PASSIONATE" />
            <BorderlessCard imgType="resourceful" text={friendlyText} headingText="RESOURCEFUL" />
            <BorderlessCard imgType="friendly" text={resourcefulText} headingText="FRIENDLY" /> */}
            <BorderlessCard headingText="CANADA" imgType='canada' />
            <BorderlessCard headingText="AUSTRALIA" imgType='australia' />
            <BorderlessCard headingText="UK" imgType='uk' />
        </div>
    );
}

export default AboutPageBorderlessCardsContainer;