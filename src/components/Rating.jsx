import './rating.scss';
import FilledStarIcon from '../assets/star_filled.svg';
import EmptyStarIcon from '../assets/star_empty.svg';

// Rating2 component: displays a rating out of five stars based on the provided score, using filled and empty star icons.

const Rating2 = ({ score }) => {
    const totalStars = 5;

    const stars = Array.from({ length: totalStars }, (_, index) => (
        <img
            key={index}
            src={index < score ? FilledStarIcon : EmptyStarIcon}
            alt="star"
            className="star"
        />
    ));

    return <div className="rating">{stars}</div>;
};

export default Rating2;
