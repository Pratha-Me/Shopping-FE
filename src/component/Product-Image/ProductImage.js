import React from "react";
import SliderImage from "react-zoom-slider";
import "../../styles/css/ProductImage.css";

function ProductImage({ image }) {
  const data = image.map((item) => {
    return { image: item };
  });

  return (
    <SliderImage
      data={data}
      width='500px'
      showDescription={true}
      direction='right'
    />
  );
}

export default ProductImage;
