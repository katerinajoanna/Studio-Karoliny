
import React, { useEffect, useState } from "react";
import type { Offer as OfferType, Service } from "../../types/Offer";
import OfferCard from "./OfferCard";

const Offer: React.FC = () => {
    const [offers, setOffers] = useState<OfferType[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [showTerms, setShowTerms] = useState(false);

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

    const categories = Array.from(new Set(offers.map(o => o.category)));

    // Wszystkie usługi w wybranej kategorii
    const servicesToShow: Service[] = selectedCategory
        ? offers
            .filter(o => o.category === selectedCategory)
            .flatMap(o => o.services)
        : [];

    return (
        <section id="offers" className="py-10 shadow-lg">
            <div className="container mx-auto px-6 font-malayalam">
                <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-malayalam text-center bg-text-gradient bg-clip-text text-transparent p-2 my-6 italic">
                    Nasza oferta
                </h1>

                {/* Kategorie */}
                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map(cat => (
                        <div
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className="bg-[rgba(64,46,15,0.05)] p-6 rounded-lg font-medium uppercase shadow-lg text-center cursor-pointer hover:shadow-xl transition "
                        >
                            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-textSecondary font-medium p-1 lg:p-2 xl:p-4">{cat}</h3>
                        </div>
                    ))}
                </div>

                {/* Modal z usługami */}
                {selectedCategory && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-stone-200 rounded-xl shadow-xl max-w-3xl w-full p-6 relative">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className="absolute text-xl md:text-2xl font-semibold top-3 right-3 text-textPrimary hover:text-orange-700"
                            >
                                ✕
                            </button>
                            <h2 className="text-2xl font-bold mb-4">{selectedCategory}</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {servicesToShow.map(s => (
                                    <OfferCard key={s._id} offer={s} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Akordeon – Warunki dotyczące usług */}
                <div className="mt-10">
                    <button
                        onClick={() => setShowTerms(prev => !prev)}
                        className="w-full flex items-center justify-between p-4 bg-[rgba(64,46,15,0.05)] rounded-lg shadow-md hover:shadow-lg transition font-malayalam text-textSecondary"
                    >
                        <span className="text-base md:text-xl italic">Warunki dotyczące usług</span>
                        <span className="text-2xl">{showTerms ? "−" : "+"}</span>
                    </button>

                    {showTerms && (
                        <div className="p-6 mt-2 bg-white rounded-xl shadow-md text-generalText leading-relaxed space-y-3 text-base md:text-lg">
                            <p>Osoby rezerwujące termin proszone są o zapoznanie się z regulaminem oraz ze stylem moich prac.</p>

                            <p>Pakiet ślubny liczony jest wraz z makijażem próbnym dla Panny młodej (200zł) + poprawka Pana Młodego (jeżeli jest taka potrzeba).</p>

                            <p>Do każdego makijażu dodaje <strong>gratis zestaw poprawkowy</strong> tzn.: bibułki matujące, próbkę pomadki, aplikatory jednorazowe.</p>

                            <p>
                                Cennik jest liczony wraz z dojazdem w obrębie 35km od miejscowości Pomlewo.
                                <br />
                                Dojazd powyżej 35km od miejscowości Pomlewo liczony jest dodatkowo 2zł/km.
                            </p>

                            <p>Ceny pakietu nie podlegają modyfikacji. W przypadku dojazdu do mniejszej ilości osób niż deklarowano, cena nie ulega zmianie.</p>

                            <p>Rezerwując pakiet ślubny VIP akceptujesz regulamin i zasady pakietu.</p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Offer;
