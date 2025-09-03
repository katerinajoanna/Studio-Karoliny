interface Offer {
    name: string;
    description: string;
}

const offers: Offer[] = [
    {
        name: "Makijaże ",
        description: " na co dzień, wieczorowe, okolicznoSciowe, charakteryzacje"
    },
    {
        name: "Makijaże VIP",
        description: "Pakiety/VIP"
    },
    {
        name: "Makijaże permamentne",
        description: "Nowe makijaze, depigmowanie, odświeżanie"
    },
    {
        name: "Brwi i rzęsy",
        description: "Regulacja i laminacja brwi, laminacja rzęs"
    },
];

const Offer: React.FC = () => {
    return (
        <section id='offers' className="py-20 shadow-lg">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-medium font-malayalam text-center bg-text-gradient bg-clip-text text-transparent p-2 mb-6">Nasza oferta</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {offers.map((offer, index) => (
                        <div key={index} className="bg-white/60 p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl text-textPrimary font-semibold mb-2">{offer.name}</h3>
                            <p className="text-textSecondary">{offer.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Offer;