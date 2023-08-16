import React from 'react'
const Card = ({ data }) => {
    const { image, imageAlt, imageTitle, imageSocial, imageSocialAlt, imageSocialTitle, link, title, subTitle, text } = data;
  
    return (
      <div className="card">
        <img src={image} alt={imageAlt} title={imageTitle} />
        <div>
          <h3>{title}</h3>
          <p>{subTitle}</p>
          <p>{text}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">Visit Website</a>
        </div>
        <div>
          <img src={imageSocial} alt={imageSocialAlt} title={imageSocialTitle} />
        </div>
      </div>
    );
  };
  
  export default Card;
