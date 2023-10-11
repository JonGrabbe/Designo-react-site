import LocationContainer from "../../components/location-container/LocationContainer";

function LocationsPage(props) {
    const data = [
        {
            country: 'Canada',
            location: {
                name: 'Designo Central Office',
                address: '3886 Wellington Street Toronto, Ontario M9C 3J5'
            },
            contact: {
                items: ['P : (02) 6720 9092', 'M : contact@designo.au']
            }        },
        {
            country: 'Australia',
            location: {
                name: 'Designo AU Office',
                address: '19 Balonne Street New South Wales 2443'
            },
            contact: {
                items: ['P : (02) 6720 9092', 'M : contact@designo.au']
            }
        }
    ]

    return ( 
        <>
            <LocationContainer heading="Canada" className="canada">
                <div className="info-item-c">
                    <p className="name">
                        Designo Central Office
                    </p>
                    <p className="address-line">
                        3886 Wellington Street
                    </p>
                    <p className="address-line">
                        Toronto, Ontario M9C 3J5
                    </p>
                </div>
                <div className="info-item-c">
                    <p className="name">
                        Contact
                    </p>
                    <p className="address-line">
                        P : +1 253-863-8967
                    </p>
                    <p className="address-line">
                        M : contact@designo.co
                    </p>
                </div>
            </LocationContainer>
            <LocationContainer heading="Australia" className="left australia">
                <div className="info-item-c">
                    <p className="name">
                        Designo AU Office
                    </p>
                    <p className="address-line">
                        19 Balonne Street
                    </p>
                    <p className="address-line">
                        TNew South Wales 2443
                    </p>
                </div>
                <div className="info-item-c">
                    <p className="name">
                        Contact
                    </p>
                    <p className="address-line">
                        P : (02) 6720 9092
                    </p>
                    <p className="address-line">
                        M : contact@designo.au
                    </p>
                </div>
            </LocationContainer>
            <LocationContainer heading="United Kingdom" className="uk">
                <div className="info-item-c">
                    <p className="name">
                        Designo UK Office
                    </p>
                    <p className="address-line">
                        13  Colorado Way
                    </p>
                    <p className="address-line">
                        Rhyd-y-fro SA8 9GA
                    </p>
                </div>
                <div className="info-item-c">
                    <p className="name">
                        Contact
                    </p>
                    <p className="address-line">
                        P : 078 3115 1400
                    </p>
                    <p className="address-line">
                        M : contact@designo.uk
                    </p>
                </div>
            </LocationContainer>
        </>    
    );
}

export default LocationsPage;