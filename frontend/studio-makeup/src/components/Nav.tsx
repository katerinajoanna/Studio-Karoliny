const Nav: React.FC = () => {
    return (
        <nav className="w-full bg-gray-100/50 border shadow-lg">
            <ul className="hidden sm:flex justify-around items-center space-x-10 font-serifTC font-medium p-3">
                <li><a href="#home" className=""></a>Start</li>
                <li><a href="#offers" className="">Oferta</a></li>
                <li><a href="#gallery" className=""></a>Galeria</li>
                <li><a href="#about" className=""></a>O mnie</li>
                <li><a href="#contact" className="">Kontakt</a></li>
            </ul>
        </nav>
    )
};

export default Nav;