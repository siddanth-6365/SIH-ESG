import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();


export const Carousel = (props) => {
  let itemssrc = props.items;

  const items = itemssrc.map((src, index) => (
    <img
      key={index} // Add a unique key to each element if possible
      src={src}
      onDragStart={handleDragStart}
      role="presentation"
    />
  ));
  
  return (
    <AliceCarousel
    style={{ maxWidth: "300px", maxHeight: "300px" }} // Set a maximum size
    autoPlay={true}
    autoPlayInterval={1000}
    infinite
    disableButtonsControls
    mouseTracking
    items={items}
    responsive={{
      0: { items: 1 }, // Number of items to show at different screen widths
      600: { items: 2 },
      1024: { items: 3 },
    }}
  >
    {/* Add 'object-fit' property to each image */}
    {items.map((item, index) => (
      <div key={index} style={{marginLeft:"20px", width: "250px", height: "230px", overflow: "hidden",borderRadius:"10px",marginTop:"20px" }}>
        <img
          src={item.props.src}
          alt={`Image ${index}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    ))}
  </AliceCarousel>
  );
}