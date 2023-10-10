function LocationContainer(props) {

    return (
        <div className="location-container">
            {/* c is short for container */}
            <div className="img-c">

            </div>
            <div className="text-c">
                <div className="inner-c">
                    <h2 className="heading h2">{props.heading}</h2>
                    <div className="info-item">
                        <p className="name">
                            {props.location.name}
                        </p>
                        <p className="address">
                            {props.location.address}
                        </p>
                    </div>
                    <div className="info-item">
                        <p className="name">
                            {props.location.name}
                        </p>
                        <p className="address">
                            {/* {props.} */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationContainer;