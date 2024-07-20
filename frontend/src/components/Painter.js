import React from 'react';
import ProfileCards from './ProfileCards';
import './Style.css';

// Import images
import A1 from './A1.jpg';
import A2 from './A2.jpg';
import A3 from './A3.jpg';
import A4 from './A4.jpg';
import A5 from './A5.jpg';
import A6 from './A6.jpg';

const Painter = () => {
  const painters = [
    {
      id: 1,
      profileImage: A1,
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      profileImage: A2,
      name: 'Jane Smith',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    },
    {
      id: 3,
      profileImage: A3,
      name: 'Michael Johnson',
      description: 'Integer at dolor at justo pretium fermentum.',
    },
    {
      id: 4,
      profileImage: A4,
      name: 'Emily Brown',
      description: 'Quisque volutpat justo eget fermentum suscipit.',
    },
    {
      id: 5,
      profileImage: A5,
      name: 'David Lee',
      description: 'Morbi consequat magna ac odio vestibulum laoreet.',
    },
    {
      id: 6,
      profileImage: A6,
      name: 'Sarah White',
      description: 'Fusce ac orci vitae diam convallis consequat.',
    }
  ];

  return (
    <div className="painters-container">
      <h1>Painter Profiles</h1>
      <div className="profile-list">
        {painters.map(painter => (
          <ProfileCards key={painter.id} profile={painter} />
        ))}
      </div>
    </div>
  );
};

export default Painter;
