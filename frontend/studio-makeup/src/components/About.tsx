const About: React.FC = () => {
    return (
        <section
            id="about"
            className="max-w-4xl mx-auto my-16 p-6 md:p-10 lg:p-14 shadow-lg font-malayalam text-generalText animate-fadeIn"
        >
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center italic bg-text-gradient bg-clip-text text-transparent mb-10">
                Witam serdecznie!
            </h1>

            <img
                className="w-full max-w-[300px] md:max-w-[350px] xl:max-w-[420px] h-auto object-contain mx-auto mb-10 animate-fadeIn"
                src="/karolina.png"
                alt="Zdjęcie"
            />

            <div className="space-y-6 text-base md:text-lg lg:text-xl leading-relaxed">
                <p>
                    Nazywam się Karolina i jestem dyplomowaną wizażystką oraz stylistką brwi.
                    Ukończyłam roczne studium wizażu i stylizacji w Gdańsku, a swoje doświadczenie zdobywałam m.in.
                    podczas pracy przy pokazach mody, targach urody oraz w znanych, światowych markach takich jak:
                    MAC Cosmetics, Benefit Cosmetics, Estee Lauder, Huda Beauty, Dior, Clinique i inne.
                </p>

                <p>
                    🌿 Nieustannie poszerzam swoją wiedzę — regularnie biorę udział w szkoleniach z zakresu makijażu,
                    pielęgnacji oraz stylizacji brwi i rzęs.
                </p>

                <p>
                    💄 Makijaż oraz stylizacja brwi to nie tylko moja praca — to moja pasja, którą rozwijam z
                    zaangażowaniem i miłością do piękna.
                </p>

                <div>
                    <p className="font-semibold mb-2">📌 Wybrane szkolenia i certyfikaty:</p>
                    <ul className="space-y-1 pl-4 list-disc">
                        <li>2019 – Stylizacja brwi: geometria, henna, regulacja</li>
                        <li>2022 – Makijaż permanentny: Soft Ombre Brows</li>
                        <li>2023 – Laminacja brwi</li>
                        <li>2024 – Laminacja rzęs</li>
                        <li>2024 – Zaawansowane szkolenia ze stylizacji brwi</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
