import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams, Navigate } from 'react-router-dom';
import data from '../data/accomodations.json';
import Slideshow from '../components/Slideshow';
import TitleLocation from '../components/TitleLocation';
import Profile from '../components/Profile';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import './housing.scss';

// Housing component: displays the details of a specific housing unit based on the ID from the URL parameters. If the housing unit is not found, it navigates to a 404 page.

function Housing() {
    const { id } = useParams();

    // Finding the accomodation corresponding to the id
    const house = data.find((house) => house.id === id);

    // Handle the non existing accomodation case
    if (!house) {
        return <Navigate to="*" />;
    }

    return (
        <div className="housing-page">
            <Header />
            <main className="housing-page__content">
                <Slideshow pictures={house.pictures} title={house.title} />
                <div className="container-housing">
                    <TitleLocation
                        title={house.title}
                        location={house.location}
                    />
                    <Profile
                        name={house.host.name}
                        picture={house.host.picture}
                    />
                    <Tag tags={house.tags} />
                    <Rating score={house.rating} />
                </div>
                <div className="housing-collapse">
                    <Collapse
                        className="housing-collapse__header"
                        title="Description"
                        content={house.description}
                    />
                    <Collapse
                        className="housing-collapse__header"
                        title="Équipements"
                        content={house.equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Housing;
