import type { Offer } from '../../types/Offer.ts';

interface OfferCardProps {
    offer: Offer;
};

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
    return (
        <div>
            <h3 className='text-base font-medium text-textPrimary'>{offer.service}</h3>
            <p className='text-generalText'>{offer.description}</p>
            <p className='text-generalText'>{offer.duration ? `Czas: ${offer.duration}` : ""}</p>
            <p className='text-generalText'><strong>{offer.price}</strong> zł</p>
        </div>
    );
};

export default OfferCard;