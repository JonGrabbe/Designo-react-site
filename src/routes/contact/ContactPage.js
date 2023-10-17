import ContactForm from "../../components/contact-form/ContactForm";
import Wrapper from "../../components/wrapper/wrapper";
import BorderlessCardsContainer from "../../components/borderless-cards-container/BorderlessCardsContainer";

function ContactPage(props) {
    return (
        <>
            <ContactForm />
            <BorderlessCardsContainer />
        </>
    );
}

export default ContactPage;