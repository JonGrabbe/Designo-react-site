import BorderlessCard from "../borderless-card/BorderlessCard"

export default function BorderlessCardsContainer(props) {
    return (
        <div className="borderless-cards-container spacer-margin">
            <BorderlessCard imgType="friendly" />
            <BorderlessCard imgType="resourceful" />
            <BorderlessCard imgType="passionate" />
        </div>
    )
}