import About from "../components/About";
import BackToTop from "../components/buttons/backToTop";
import Contact from "../components/contact/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Offer from "../components/offer/Offer";

const HomePage: React.FC = () => {
    return (
        <div
            className="min-h-screen flex flex-col bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(130, 126, 105, 0.25), rgba(210, 204, 148, 0.25), rgba(120, 113, 77, 0.25)), url('/background4.png')`
            }}
        >
            <Header />
            <Nav />
            {/* Dodalam ontener na sekcje */}
            <div className="flex flex-col gap-16 md:gap-24">
                <Hero />
                <Offer />
                <Gallery />
                <About />
                <Contact />
            </div>
            <Footer />
            <BackToTop />
        </div>
    );
};





export default HomePage;