import { Heart } from "lucide-react";

const About: React.FC = () => {
    return (
        <div id="about" className="flex flex-col font-malayalam p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14 shadow-lg">
            <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-malayalam text-center bg-text-gradient bg-clip-text text-transparent p-2 mb-6">O mnie</h1>
            <h2 className="flex items-start text-3xl text-generalText p-4 mt-8">
                Witam serdecznie!
                <Heart className="w-9 h-9 text-yellow-500 stroke-[2.2] fill-transparent ml-3" />
                {/* <span className="text-7xl text-yellow-700"> ♡</span> */}

            </h2>
            <p className="flex items-start font-medium text-textPrimary text-xl p-3 m-3 space-y-3">
                Nazywam się Karolina i jestem dyplomowaną wizażystką oraz stylistką brwi.
                Ukończyłam roczne studium wizażu i stylizacji w Gdańsku, a swoje doświadczenie zdobywałam m.in. podczas pracy przy pokazach mody, targach urody oraz w znanych, światowych markach takich jak: MAC Cosmetics, Benefit Cosmetics, Estee Lauder, Huda Beauty, Dior, Clinique i inne.
            </p>
            <p className="font-medium text-textPrimary text-xl p-1 m-3 space-y-3">🌿 Nieustannie poszerzam swoją wiedzę - regularnie biorę udział w szkoleniach z zakresu makijażu, pielęgnacji oraz stylizacji brwi i rzęs.</p>
            <p className="font-medium text-textPrimary text-xl p-1 m-3 space-y-3">💄 Makijaż oraz stylizacja brwi to nie tylko moja praca - to moja pasja, którą rozwijam z zaangażowaniem i miłością do piękna</p>
            <p className="flex flex-col items-start gap-2 font-medium text-textPrimary text-xl p-3 m-3 space-y-3">
                📌 Wybrane szkolenia i certyfikaty:
                <span>2019 - Stylizacja brwi: geometria, henna, regulacja</span>
                <span>2022 - Makijaż permanentny: Soft Ombre Brows</span>
                <span>2023 - Laminacja brwi</span>
                <span>2024 - Laminacja rzęs </span>
                <span>2024 - Zaawansowane szkolenia ze stylizacji brwi</span>
            </p>
        </div>
    );
};

export default About;