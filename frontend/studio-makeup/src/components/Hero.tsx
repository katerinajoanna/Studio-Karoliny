
const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-evenly font-malayalam p-6 md:p-12 overflow-hidden">
            <div className="text-generalText mt-10 md:mt-0 md:ml-12 max-w-xl animate-fadeIn">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl p-2 md:p-3">Witaj!</h1>
                <div className="font-medium text-textPrimary text-base sm:text-lg md:text-xl space-y-3">
                    <p>Szukasz profesjonalnej wizażystki, stylistki brwi lub linergistki?</p>
                    <p>Zapraszam Cię do skorzystania z moich usług w Pomlewie i Gdańsku Kokoszkach. Istnieje także możliwość dojazdu - po wcześniejszej konsultacji.</p>
                    <p>Jestem dyplomowaną wizażystką i stylistką brwi z wieloletnim doświadczeniem. Pracuję z pasją, precyzją i na wysokiej jakości kosmetykach.</p>
                </div>
            </div>

            <img
                className="w-full max-w-[300px] md:max-w-[350px] h-auto object-contain mt-6 md:mt-0 animate-fadeIn"
                src="/karolina.png"
                alt="Zdjęcie"
            />
        </section>



    );
};

export default Hero;