import rightArrow from '../../assets/shared/desktop/icon-right-arrow.svg';

export default function Card(props) {
    return (
        <div className="card-container">
            <div className="content-inner-wrapper">
                <h3 className="h3 heading">
                    {props.text}
                </h3>
                <div className="link-container">
                    <span className="text">
                        view projects
                    </span>
                    <img src={rightArrow} alt="" className="arrow-img" />
                </div>
            </div>
        </div>
    )
}