import './titleLocation.scss';

function TitleLocation({ title, location }) {
    return (
      <div className="title-location">
        <h2 className="title-location__title">{title}</h2>
        <p className="title-location__location">{location}</p>
      </div>
    );
  }
  
  export default TitleLocation;