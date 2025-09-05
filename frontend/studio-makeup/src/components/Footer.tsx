const Footer: React.FC = () => {
    return (
        <footer className=" text-textSecondary py-6 border border-b-2 transparent">
            <div className="container mx-auto text-center text-base sm:text-lg md:text-xl xl:text-3xl p-3 md:p-4">
                <p>&copy; 2025 Maceup Studio. Wszelkie prawa zastrzeżone.</p>
                <p>Adres: ul. Piękna 10, Warszawa | Telefon:
                    <span className="font-semibold"> 123-456-789</span> | Email:
                    <span className="font-semibold"> kontakt@maceup.pl</span> |
                    <span className="font-semibold">  Instagram</span> |
                    <span className="font-semibold">  Facebook</span>
                </p>
            </div>
        </footer>
    )
};

export default Footer;