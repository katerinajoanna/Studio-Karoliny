import type { Service } from '../../types/Offer';

interface OfferCardProps {
    offer: Service;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
    return (
        <div className="w-full bg-[rgba(64,46,15,0.05)] text-lg md:text-xl xl:text-2xl p-4 sm:p-6 lg:p-8 rounded-lg shadow-md sm:max-w-sm lg:max-w-md">
            <h3 className="sm:text-lg lg:text-2xl font-medium uppercase text-textPrimary">
                {offer.service}
            </h3>
            {/* <div className="h-[1px] w-full mb-6 bg-gradient-to-r from-amber-600/60 via-amber-400 to-amber-600/60 rounded-full"></div> */}
            <div className="border-b border-amber-600/40 mb-6"></div>
            <p className="text-generalText mt-2 p-1">{offer.description}</p>
            {offer.duration && (
                <p className="text-generalText mt-1 p-1">Czas: {offer.duration}</p>
            )}
            <p className="text-generalText mt-1 p-2">
                <strong>{offer.price}</strong> zł
            </p>
        </div>
    );
};

export default OfferCard;
