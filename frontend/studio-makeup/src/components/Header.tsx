import Logo from '../assets/logo2-removebg-preview.png'

const Header: React.FC = () => {
    return (
        <div className="w-full flex md:flex-row items-center md:ml-20 md:gap-52">
            <img
                className="size-24 md:size-36"
                src={Logo}
                alt="Logo"
            />
            <div className='flex flex-col text-center md:text-left m-4 md:m-10 text-2xl md:text-4xl'>
                <div className='font-semibold font-playfair'>
                    <h1 className='bg-text-gradient bg-clip-text text-transparent'>BEAUTY</h1>
                    <h1 className='bg-text-gradient bg-clip-text text-transparent'>MAKEUP & BROWS</h1>
                </div>
                <h2 className="text-2xl md:text-4xl font-cherish bg-text-gradient bg-clip-text text-transparent">
                    Karolina Gorlikowska
                </h2>
            </div>
        </div>
    );
};

export default Header;