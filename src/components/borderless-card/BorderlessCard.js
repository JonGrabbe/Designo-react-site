import BackgroundImg from './background-img/BackgroundImg';

export default function BorderlessCard(props) {
    let button = props.hasButton ? (<button className='button--on-light'>See More</button>) : null;
    let text = props.text ? (<p className='text p'>{props.text}</p>) : null;

    return (
        <div className="borderless-card" >
            <BackgroundImg imgType={props.imgType} />
            <h2 className="h2 heading">{props.headingText}</h2>
            {/* <p className="text p">
                {props.text}
            </p> */}
            {text ? text : null}
            {button ? button : null}
        </div>
    )
}