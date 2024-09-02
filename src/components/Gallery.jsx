import Card from './Card';
import data from '../data/accomodations.json';
import './gallery.scss';

function Gallery() {
    return (
      <div className="gallery">
        {data.map(accomodation => (
          <Card
            key={accomodation.id}
            id={accomodation.id}
            title={accomodation.title}
            cover={accomodation.cover}
          />
        ))}
      </div>
    );
  }
  
  export default Gallery;
  