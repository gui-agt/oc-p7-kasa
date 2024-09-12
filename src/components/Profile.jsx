import './profile.scss';

function Profile({ name, picture }) {
    return (
      <div className="profile">
        <p className="profile__name">{name}</p>
        <img className="profile__picture" src={picture} alt={`Profil de ${name}`} />
      </div>
    );
  }
  
  export default Profile;