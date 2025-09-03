// interface Offer {
//     name: string;
//     description: string;
// }

// const offers: Offer[] = [
//     {
//         name: "Makijaże ",
//         description: " na co dzień, wieczorowe, okolicznoSciowe, charakteryzacje"
//     },
//     {
//         name: "Makijaże VIP",
//         description: "Pakiety/VIP"
//     },
//     {
//         name: "Makijaże permamentne",
//         description: "Nowe makijaze, depigmowanie, odświeżanie"
//     },
//     {
//         name: "Brwi i rzęsy",
//         description: "Regulacja i laminacja brwi, laminacja rzęs"
//     },
// ];

// const Offer: React.FC = () => {
//     return (
//         <section id='offers' className="py-20 shadow-lg">
//             <div className="container mx-auto px-6">
//                 <h1 className="text-3xl font-medium font-malayalam text-center bg-text-gradient bg-clip-text text-transparent p-2 mb-6">Nasza oferta</h1>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {offers.map((offer, index) => (
//                         <div key={index} className="bg-white/60 p-6 rounded-lg shadow-lg text-center">
//                             <h3 className="text-xl text-textPrimary font-semibold mb-2">{offer.name}</h3>
//                             <p className="text-textSecondary">{offer.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// };

// export default Offer;

import React, { useEffect, useState } from "react";
import type { Offer as OfferType } from "../../types/Offer";
import OfferCard from "./OfferCard";

const Offer: React.FC = () => {
    const [offers, setOffers] = useState<OfferType[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const res = await fetch("http://localhost:5000/offers");
                const data = await res.json();
                setOffers(data);
            } catch (err) {
                console.error("Błąd pobierania ofert:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchOffers();
    }, []);

    if (loading) return <p className="text-center">Ładowanie ofert...</p>;

    // Wyciągam unikalne kategorie
    const categories = Array.from(new Set(offers.map(o => o.category)));

    // Oferty dla wybranej kategorii
    const filteredOffers = selectedCategory
        ? offers.filter(o => o.category === selectedCategory)
        : [];

    return (
        <section id="offers" className="py-20 shadow-lg">
            <div className="container mx-auto px-6">
                <h1 className="text-3xl font-medium font-malayalam text-center bg-text-gradient bg-clip-text text-transparent p-2 mb-6">
                    Nasza oferta
                </h1>

                {/* Kategorie */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map(cat => (
                        <div
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className="bg-white/60 p-6 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition"
                        >
                            <h3 className="text-xl text-textPrimary font-semibold mb-2">{cat}</h3>
                            <p className="text-textSecondary">{cat}</p>
                        </div>
                    ))}
                </div>

                {/* Modal z ofertami */}
                {selectedCategory && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full p-6 relative">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className="absolute top-2 right-2 text-gray-600 hover:text-black"
                            >
                                ✕
                            </button>
                            <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {filteredOffers.map(o => (
                                    <OfferCard key={o._id} offer={o} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Offer;
