import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

const CarouselImage = () => {
  const images = [
    { url: "/images/img1.jpg" },
    { url: "/images/img2.jpg" },
    { url: "/images/img3.jpg" },
    { url: "/images/img4.jpg" },
    { url: "/images/img5.jpg" }
  ];

  return (
    <div className="carousel-container ">
      <SimpleImageSlider
        width="95%"
        height={300}
        images={images}
        autoPlay={true}
        slideDuration={1}
       
      />
      
      {/* <picture>
        <source
          srcSet="https://rukminim2.flixcart.com/fk-p-flap/1570/260/image/a05beb4680034da9.jpg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/3140/520/image/a05beb4680034da9.jpg?q=60 2x"
          media="(min-width: 1192px)"
        />
        <source
          srcSet="https://rukminim2.flixcart.com/fk-p-flap/980/160/image/a05beb4680034da9.jpg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/1960/320/image/a05beb4680034da9.jpg?q=60 2x"
          media="(min-width: 768px) and (max-width: 1191px)"
        />
        <img
          loading="eager"
          alt="Image"
          srcSet="https://rukminim2.flixcart.com/fk-p-flap/470/80/image/a05beb4680034da9.jpg?q=80 1x, https://rukminim2.flixcart.com/fk-p-flap/940/160/image/a05beb4680034da9.jpg?q=60 2x"
          src="https://rukminim2.flixcart.com/fk-p-flap/470/80/image/a05beb4680034da9.jpg?q=90"
          style={{
            width: "100%",
            margin: "auto",
            display: "block",
            objectFit: "cover",
            opacity: 1,
            aspectRatio: "211 / 35"
          }}
        />
      </picture> */}
    </div>
  );
}

export default CarouselImage;
