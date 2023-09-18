import BorderlessCard from "../borderless-card/BorderlessCard"

export default function BorderlessCardsContainer(props) {
    let passionateText = 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
    let friendlyText = 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'
    let resourcefulText = ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'

    return (
        <div className="borderless-cards-container spacer-margin">
            <BorderlessCard imgType="passionate" text={passionateText} headingText="PASSIONATE" />
            <BorderlessCard imgType="resourceful" text={friendlyText} headingText="RESOURCEFUL" />
            <BorderlessCard imgType="friendly" text={resourcefulText} headingText="FRIENDLY" />
        </div>
    )
}