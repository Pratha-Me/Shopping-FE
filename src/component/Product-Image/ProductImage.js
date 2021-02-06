import React from 'react';
import SliderImage from 'react-zoom-slider';
import '../../styles/css/ProductImage.css';

function ProductImage({ image }) {
  const data = image.map((item) => {
    return { image: item };
  });

  // console.log('DATA', typeof data);
  console.log('DATA', image);
  return <SliderImage data={data} width='500px' showDescription={true} direction='right' />;
}

export default ProductImage;
