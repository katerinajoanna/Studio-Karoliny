import type { Offer } from '../../types/Offer.ts';

interface OfferCardProps {
    offer: Offer;
};


const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
    return (
        <div className="text-lg md:text-xl xl:text-2xl p-4 sm:p-6 lg:p-8 bg-white/50 rounded-lg shadow-md w-full sm:max-w-sm lg:max-w-md">
            <h3 className=" sm:text-lg lg:text-2xl font-medium uppercase text-textPrimary">
                {offer.service}
            </h3>
            <p className="text-generalText mt-2 p-1">{offer.description}</p>
            <p className="text-generalText mt-1 p-1">
                {offer.duration ? `Czas: ${offer.duration}` : ""}
            </p>
            <p className="text-generalText mt-1 p-2">
                <strong>{offer.price}</strong> zł
            </p>
        </div>
    );
};


export default OfferCard;