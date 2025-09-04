import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
    return (
        <div id="contact" className="flex flex-col font-malayalam p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14 shadow-lg">
            <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-malayalam text-center bg-text-gradient bg-clip-text text-transparent p-2 mb-6">Kontakt</h1>
            <p>Napisz do mnie.</p>
            <ContactForm />
        </div>
    );
};

export default Contact;
