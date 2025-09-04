
const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-between font-malayalam shadow-lg p-6 overflow-hidden">
            <div className="absolute inset-0 -z-10"></div>

            <div className="text-generalText mt-10 md:mt-20 md:ml-10 max-w-xl animate-fadeIn">
                <h1 className="font-bold text-4xl p-3 m-3">Witaj!</h1>
                <div className="font-medium text-textPrimary text-xl p-3 m-3 space-y-3">
                    <p>Szukasz profesjonalnej wizażystki, stylistki brwi lub linergistki?</p>
                    <p>Zapraszam Cię do skorzystania z moich usług w Pomlewie i Gdańsku Kokoszkach. Istnieje także możliwość dojazdu - po wcześniejszej konsultacji.</p>
                    <p>Jestem dyplomowaną wizażystką i stylistką brwi z wieloletnim doświadczeniem. Pracuję z pasją, precyzją i na wysokiej jakości kosmetykach.</p>
                </div>
            </div>

            <img
                className="max-w-[350px] h-auto p-3 object-contain animate-fadeIn"
                src="/karolina.png"
                alt="Zdjęcie"
            />
        </section>


    );
};

export default Hero;