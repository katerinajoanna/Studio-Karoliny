import type { Offer } from '../../types/Offer.ts';

interface OfferCardProps {
    offer: Offer;
};

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
    return (
        <div>
            <h3>{offer.service}</h3>
            <p>{offer.description}</p>
            <p>{offer.duration ? `Czas: ${offer.duration}` : ""}</p>
            <p>{offer.price} zł</p>
        </div>
    );
};

export default OfferCard;