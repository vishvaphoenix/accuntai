import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; 
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import { RiDoubleQuotesL } from "react-icons/ri";


const cards = [
  // ...Your card objects here...
  {
    imageSocial:
      "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
    imageSocialTitle: "Social Icon",
    link: "https://lloydsibson.com/",
    text:
      "My experience has been amazing with Civil Guruji. I have learnt a lot of practical insights and now I feel very confident in my technical abilities, and now I feel I know something and can express myself technically",
    },  
  
  {
    imageSocial:
      "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
    imageSocialTitle: "Social Icon",
    link: "https://lloydsibson.com/",
    text:
      "My experience has been amazing with Civil Guruji. I have learnt a lot of practical insights and now I feel very confident in my technical abilities, and now I feel I know something and can express myself technically"
  },  
  
  {
    imageSocial:
      "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
    imageSocialTitle: "Social Icon",
    link: "https://lloydsibson.com/",
    text:
      "My experience has been amazing with Civil Guruji. I have learnt a lot of practical insights and now I feel very confident in my technical abilities, and now I feel I know something and can express myself technically"
  }, 
  
  {
    imageSocial:
      "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
    imageSocialTitle: "Social Icon",
    link: "https://lloydsibson.com/",
    text:
      "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
  },  
  
  {
    imageSocial:
      "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
    imageSocialTitle: "Social Icon",
    link: "https://lloydsibson.com/",
    text:
      "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
  },  
  
  {
    imageSocial:
      "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
    imageSocialTitle: "Social Icon",
    link: "https://lloydsibson.com/",
    
    text:
      "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
  },  
  
  {
    imageSocial:
      "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
    imageSocialTitle: "Social Icon",
    link: "https://lloydsibson.com/",
    text:
      "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
  },  
  
  {
    imageSocial:
      "https://res.cloudinary.com/cloudinary-ls-images/image/upload/b_black/v1558290036/img/logo-medium.jpg",
    imageSocialTitle: "Social Icon",
    link: "https://lloydsibson.com/",
    text:
      "BA Front-End Web Developer, UI/UX and Graphic Designer from Leicester, UK. Specialising in jQuery, ReactJS and JavaScript."
  },
];

const Article = ({ data }) => {
  const { image, imageAlt, imageTitle, imageSocial, imageSocialAlt, imageSocialTitle, title, subTitle, text, link } = data;



  return (
    <figure className="card-container">
      <div className="card">
        <div className="card-heading-container">
        <div className='card-img'>
        <img className="card-social-icon" src={imageSocial} alt={imageSocialAlt} title={imageSocialTitle} /> 
        </div>
        
          <div className="card-title-container">
          </div>

        </div>
        <div className='quote'>
        <RiDoubleQuotesL />
        </div>
        <div className="card-text-container">
          <p className="card-text">{text}</p>
        </div>
      </div>

    </figure>
  );
};

const News = ({ data }) => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    accessibility: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    ref: sliderRef,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="news">
      <Slider {...settings}>
        {data.length > 0 ? data.map((item, index) => <Article key={index} data={item} />) : <p>Please add some cards</p>}
      </Slider>
      <div className="btn">
      <h2 onClick={handlePrev} style={{color:"#CD1479"}} ><BsFillArrowLeftSquareFill /></h2>
<h2 onClick={handleNext} style={{color:"#CD1479"}}><BsFillArrowRightSquareFill /></h2>

      </div>
    </div>
    
  );
};



const Carousel = () => {
  return (
    <div className="carousel">
      <News data={cards} />
    </div>
  );
};

export default Carousel;



















