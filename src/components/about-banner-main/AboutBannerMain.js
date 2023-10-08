function AboutBannerMain(props) {
    // let bgi = props.backgroundImage;
    // let styles = {
    //     backgroundImage: 'url()'
    // }
    let cn = `${props.cn ? ' '+props.cn : ''}`
    return ( 
        <div className={"about-banner-container banner spacer-margin"+cn} style={{backgroundImage: `url(${process.env.PUBLIC_URL+'/'+props.img})`}}>
            <div className="img-container">

            </div>
            <div className="text-container">
                <div className="inner-wrapper">
                    <h2 className="heading h2">{props.heading ? props.heading : 'About Us'}</h2>
                    {props.children}
                </div>
            </div>
        </div>
     );
}

export default AboutBannerMain;