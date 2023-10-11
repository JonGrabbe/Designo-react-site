function ContactForm(props) {
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
                    <div className="form-item-c"><input type="text" placeholder="Name" /></div>
                    <div className="form-item-c"><input type="text" placeholder="Email Address" /></div>
                    <div className="form-item-c"><input type="text" placeholder="Phone" /></div>
                    {/* <div className="form-item-c message"><textarea type="text" placeholder="Your Message" /></div> */}
                    <div className="form-item-c message">
                        <textarea name="message" placeholder="your message"></textarea>
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;