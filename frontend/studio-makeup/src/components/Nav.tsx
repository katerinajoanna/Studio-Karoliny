import { Menu, X } from "lucide-react";
import { useState } from "react";

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-gray-100/35 border shadow-lg">
            <ul className="hidden sm:flex justify-around items-center space-x-10 font-serifTC font-medium md:font-semibold xl:font-bold text-base md:text-xl lg:text-2xl p-3 md:p-4 xl:p-5">
                <li><a href="#home" className="text-generalText hover:text-hoverText transition-colors duration-300">Start</a></li>
                <li><a href="#offers" className="text-generalText hover:text-hoverText transition-colors duration-300">Oferta</a></li>
                <li><a href="#gallery" className="text-generalText hover:text-hoverText transition-colors duration-300">Galeria</a></li>
                <li><a href="#about" className="text-generalText hover:text-hoverText transition-colors duration-300">O mnie</a></li>
                <li><a href="#contact" className="text-generalText hover:text-hoverText transition-colors duration-300">Kontakt</a></li>
            </ul>

            {/* małe ekrany */}
            <div className="sm:hidden flex justify-end p-3">
                <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                    {isOpen ? (
                        <X size={32} className="text-generalText hover:text-hoverText transition-colors duration-300" />
                    ) : (
                        <Menu size={32} className="text-generalText hover:text-hoverText transition-colors duration-300" />
                    )}
                </button>
            </div>

            {/* rozwijane menu mobile */}
            {isOpen && (
                <ul className="absolute right-2 top-16 bg-white/90 shadow-xl rounded-2xl p-6 w-56 space-y-4 text-center font-serifTC font-medium z-50">
                    <li className="flex justify-end">
                        <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                            <X size={24} className="text-generalText hover:text-hoverText transition-colors duration-300" />
                        </button>
                    </li>
                    <li>
                        <a
                            href="#home"
                            onClick={() => setIsOpen(false)}
                            className="block text-textSecondary hover:text-hoverText transition-colors duration-300"
                        >
                            Start
                        </a>
                    </li>
                    <li>
                        <a
                            href="#offers"
                            onClick={() => setIsOpen(false)}
                            className="block text-textSecondary hover:text-hoverText transition-colors duration-300"
                        >
                            Oferta
                        </a>
                    </li>
                    <li>
                        <a
                            href="#gallery"
                            onClick={() => setIsOpen(false)}
                            className="block text-textSecondary hover:text-hoverText transition-colors duration-300"
                        >
                            Galeria
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            onClick={() => setIsOpen(false)}
                            className="block text-textSecondary hover:text-hoverText transition-colors duration-300"
                        >
                            O mnie
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="block text-textSecondary hover:text-hoverText transition-colors duration-300"
                        >
                            Kontakt
                        </a>
                    </li>
                </ul>
            )}

        </nav>
    )
};

export default Nav;