import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Gallery.css';
import p9 from './p9.jpg';
import p16 from './p16.jpg';
import p20 from './p20.jpg';
import p21 from './p21.jpg';
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p4 from './p4.jpg';
import p5 from './p5.jpg';
import p6 from './p6.jpg';
import p7 from './p7.jpg';
import p8 from './p8.jpg';
import p3 from './p3.jpg';

const Card = ({ imgSrc, altText, title, description, price, rating, buttonClass, buttonText }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={altText} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="price">{price}</div>
      <div className="rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <i key={index} className={`fas fa-star ${index < rating ? '' : 'black'}`}></i>
        ))}
      </div>
      <Link to={`/payment?item=${encodeURIComponent(title)}`} className={`button ${buttonClass}`}>
        {buttonText}
      </Link>
    </div>
  );
};

const Gallery = () => {
  const { painterName } = useParams();

  const allCardsData = [
    { imgSrc: p9, altText: "black beauty", title: "black beauty", description: "Indicating how much African women are attractive.", price: "$100.00", rating: 5, buttonClass: "blue", buttonText: "Buy Now" },
    { imgSrc: p16, altText: "flower", title: "flower", description: "This picture is attractive in any sight.", price: "$40.00", rating: 4, buttonClass: "purple", buttonText: "Buy Now" },
    { imgSrc: p20, altText: "elephant", title: "elephant", description: "This shows one of the big five in the world.", price: "$70.84", rating: 4, buttonClass: "black", buttonText: "Buy Now" },
    { imgSrc: p21, altText: "beach looking", title: "beach looking", description: "This indicates the beauty of the beach.", price: "$1000.84", rating: 5, buttonClass: "orange", buttonText: "Buy Now" },
    { imgSrc: p1, altText: "mountain view", title: "mountain view", description: "A breathtaking view of the mountains.", price: "$150.00", rating: 4, buttonClass: "blue", buttonText: "Buy Now" },
    { imgSrc: p2, altText: "forest", title: "forest", description: "A serene view of the forest.", price: "$90.00", rating: 5, buttonClass: "green", buttonText: "Buy Now" },
    { imgSrc: p4, altText: "cityscape", title: "cityscape", description: "A stunning cityscape at night.", price: "$120.00", rating: 4, buttonClass: "red", buttonText: "Buy Now" },
    { imgSrc: p5, altText: "sunset", title: "sunset", description: "A beautiful sunset over the ocean.", price: "$80.00", rating: 5, buttonClass: "orange", buttonText: "Buy Now" },
    { imgSrc: p6, altText: "river", title: "river", description: "A calm river flowing through the valley.", price: "$60.00", rating: 4, buttonClass: "purple", buttonText: "Buy Now" },
    { imgSrc: p7, altText: "desert", title: "desert", description: "An expansive desert under a clear sky.", price: "$70.00", rating: 3, buttonClass: "yellow", buttonText: "Buy Now" },
    { imgSrc: p8, altText: "lake", title: "lake", description: "A peaceful lake surrounded by mountains.", price: "$110.00", rating: 5, buttonClass: "blue", buttonText: "Buy Now" },
    { imgSrc: p3, altText: "waterfall", title: "waterfall", description: "A majestic waterfall in a tropical paradise.", price: "$95.00", rating: 4, buttonClass: "green", buttonText: "Buy Now" }
  ];

  const filteredCardsData = allCardsData;

  return (
    <div className="container">
      <h2>{painterName.replace(/-/g, ' ')}'s Gallery</h2>
      <div className="card-container">
        {filteredCardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
