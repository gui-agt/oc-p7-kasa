import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams, Navigate} from 'react-router-dom';
import data from '../data/accomodations.json';
import Slideshow from '../components/Slideshow'
import './housing.scss';

function Housing() {
  const { id } = useParams();

  // Trouver l'appartement correspondant à l'id
  const house = data.find(house => house.id === id);

  // Gérer le cas où l'appartement n'existe pas
  if (!house) {
    return <Navigate to="*" />
  }

  return (
    <div className="housing-page">
      <Header />
      <main className="housing-page__content">
        <Slideshow pictures={house.pictures} title={house.title}/>
      </main>
      <Footer />
    </div>
  );
}

export default Housing;
