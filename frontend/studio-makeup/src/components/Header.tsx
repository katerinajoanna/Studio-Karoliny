import Logo from '../assets/logo2-removebg-preview.png'

const Header: React.FC = () => {
    return (
        <div className="w-full flex md:flex-row items-center md:w-5/6 md:mx-40 gap-16 md:gap-16 xl:gap-[16rem] p-10 md:p-4">
            <img
                className="size-28 md:size-40 lg:size-48 xl:size-56 2xl:size-60"
                src={Logo}
                alt="Logo"
            />
            <div className='flex flex-col text-center text-2xl md:text-left m-4 md:m-10  md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
                <div className='font-semibold font-playfair'>
                    <h1 className='bg-text-gradient bg-clip-text text-transparent'>BEAUTY</h1>
                    <h1 className='bg-text-gradient bg-clip-text text-transparent'>MAKEUP & BROWS</h1>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-wide p-2 my-1 font-cherish bg-text-gradient bg-clip-text text-transparent">
                    Karolina Gorlikowska
                </h2>

            </div>
        </div>
    );
};

export default Header;
