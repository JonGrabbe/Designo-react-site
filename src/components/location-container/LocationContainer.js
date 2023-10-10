function LocationContainer(props) {

    return (
        <div className={`location-container ${props.className ? props.className : ''}`} >
            {/* c is short for container */}
            <div className="img-c">

            </div>
            <div className="text-c">
                <div className="inner-c">
                    <h2 className="heading h2">{props.heading}</h2>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default LocationContainer;