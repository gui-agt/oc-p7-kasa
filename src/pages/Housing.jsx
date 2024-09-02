import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams, Navigate} from 'react-router-dom';
import data from '../data/accomodations.json';
import './housing.scss';

function Housing() {
  const { id } = useParams();

  // Trouver l'appartement correspondant à l'id
  const apartment = data.find(apartment => apartment.id === id);

  // Gérer le cas où l'appartement n'existe pas
  if (!apartment) {
    return <Navigate to="*" />
  }

  return (
    <div>
      <Header />
      <div className="housing">
        <h1>{apartment.title}</h1>
        <img src={apartment.cover} alt={apartment.title} className="housing__image" />
        <p>{apartment.location}</p>
        {/* Ajouter plus de détails ici selon les informations disponibles */}
      </div>
      <Footer />
    </div>
  );
}

export default Housing;
