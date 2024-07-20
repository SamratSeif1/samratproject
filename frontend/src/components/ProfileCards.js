
import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

const ProfileCards = ({ profile }) => {
  return (
    <div className="profile-card">
      <img src={profile.profileImage} alt={profile.name} className="profile-image" />
      <div className="profile-info">
        <h2 className="profile-name">{profile.name}</h2>
        <p className="profile-description">{profile.description}</p>
        <Link to={`/gallery/${profile.name.toLowerCase().replace(/ /g, '-')}`} className="visit-button">
          Visit Gallery
        </Link>
      </div>
    </div>
  );
};

export default ProfileCards;
