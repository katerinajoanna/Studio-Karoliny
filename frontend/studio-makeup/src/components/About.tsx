
const About: React.FC = () => {
    return (
        <section id="about" className="flex flex-col text-generalText text-left animate-fadeIn p-5 md:p-7 lg:p-8 xl:p-9 font-malayalam font-medium sm:p-6 my-12 shadow-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:p-3 italic text-center bg-text-gradient bg-clip-text text-transparent p-2 mb-6">Witam serdecznie!</h1>
            <img
                className="w-full max-w-[300px] md:max-w-[350px] xl:max-w-[420px] h-auto object-contain animate-fadeIn mx-auto"
                src="/karolina.png"
                alt="Zdjęcie"
            />
            <p className="text-generalText text-base sm:text-lg md:text-2xl xl:text-3xl p-3 space-y-3 mt-8">
                Nazywam się Karolina i jestem dyplomowaną wizażystką oraz stylistką brwi.
                Ukończyłam roczne studium wizażu i stylizacji w Gdańsku, a swoje doświadczenie zdobywałam m.in. podczas pracy przy pokazach mody, targach urody oraz w znanych, światowych markach takich jak: MAC Cosmetics, Benefit Cosmetics, Estee Lauder, Huda Beauty, Dior, Clinique i inne.
            </p>
            <p className="text-generalText text-base sm:text-lg md:text-2xl xl:text-3xl p-3 space-y-3">🌿 Nieustannie poszerzam swoją wiedzę - regularnie biorę udział w szkoleniach z zakresu makijażu, pielęgnacji oraz stylizacji brwi i rzęs.</p>
            <p className="text-generalText text-base sm:text-lg md:text-2xl xl:text-3xl p-3 space-y-3">💄 Makijaż oraz stylizacja brwi to nie tylko moja praca - to moja pasja, którą rozwijam z zaangażowaniem i miłością do piękna</p>
            <p className="flex flex-col items-start gap-2 text-generalText text-base sm:text-lg md:text-2xl xl:text-3xl p-3 space-y-3">
                📌 Wybrane szkolenia i certyfikaty:
                <span>2019 - Stylizacja brwi: geometria, henna, regulacja</span>
                <span>2022 - Makijaż permanentny: Soft Ombre Brows</span>
                <span>2023 - Laminacja brwi</span>
                <span>2024 - Laminacja rzęs </span>
                <span>2024 - Zaawansowane szkolenia ze stylizacji brwi</span>
            </p>

        </section>
    );
};

export default About;