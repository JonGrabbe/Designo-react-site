export default function ServicesBanner(props) {
    return (
        <div className="services-banner banner spacer-margin">
            <div className="content">
                <h1 className="heading h1">Graphic Design</h1>
                <p className="text p">
                    {props.text}
                </p>
            </div>
        </div>
    )
}