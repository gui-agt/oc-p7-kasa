import './card.scss';
import { Link } from 'react-router-dom';

// Card component: displays a clickable card with an image and title, linking to a specific housing detail page.

function Card({ id, title, cover }) {
    return (
        <Link to={`/logement/${id}`} className="card">
            <img src={cover} alt={title} className="card__image" />
            <h3 className="card__title">{title}</h3>
        </Link>
    );
}
export default Card;
