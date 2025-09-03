import About from "../components/About";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Offer from "../components/offer/Offer";

const HomePage: React.FC = () => {
    return (
        <div
            className="min-h-screen flex flex-col bg-cover bg-center"
            style={{ backgroundImage: "url('/background4.png')" }}
        >
            <Header />
            <Nav />
            <Hero />
            <Offer />
            <Gallery />
            <About />
            <Footer />
        </div>
    );
};

export default HomePage;