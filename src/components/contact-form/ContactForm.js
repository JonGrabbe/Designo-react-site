import { useState } from "react"
import errorIcon from '../../assets/contact/desktop/icon-error.svg';

function FormItem(props) {
    return (
        <div className="form-item-c">
            <input type="text" placeholder="Name" onChange={props.handleChange} />
        </div>
    )
}

function FormItemTextArea(props) {
    return (
        <div className="form-item-c message">
            <textarea name="message" placeholder="your message" onChange={props.handleChange}></textarea>
        </div>
    )
}

function ErrorMessage(props) {
    return (
        <span className="error-message">
            can't be empty
            <img src={errorIcon} alt="" />
        </span>
    )
}

function ContactForm(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className="contact-container banner">
            <div className="inner-c">
                <div className="text-c">
                    <h2 className="heading h2">Contact Us</h2>
                     <p className="text">
                        Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
                     </p>
                </div>
                <form action="" className="form-c">
                    <div className="form-item-c">
                        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        {name ? null : <ErrorMessage />}
                    </div>
                    <div className="form-item-c">
                        <input type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                        {email ? null : <ErrorMessage />}
                    </div>
                    <div className="form-item-c">
                        <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
                        {phone ? null : <ErrorMessage />}
                    </div>
                    <div className="form-item-c message">
                        <textarea name="message" placeholder="your message" onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
                        {message ? null : <ErrorMessage />}
                    </div>
                    <button onClick={e => e.preventDefault()} className="form-button button button--on-dark">SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;