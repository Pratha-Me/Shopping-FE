// import React, { Component } from "react";

// import ReactImageMagnify from "react-image-magnify";
// class ProductImage extends Component {
//   render() {
//   let {image} = this.props;
//     return (
//       <ReactImageMagnify
//         {...{
//           smallImage: {
//             alt: "Wristwatch by Ted Baker London",
//             isFluidWidth: true,
//             src: "/images/o.jpg",
//           },
//           largeImage: {
//             src: "/images/1.jpg",
//             width: 640,
//             height: 480
//           },
//           enlargedImagePortalId: "myPortal"
//         }}
//       />
//     );
//   }
// }

// export default ProductImage;

import React from "react";
import SliderImage from 'react-zoom-slider';
import '../../styles/css/ProductImage.css'
const data = [
    {
      image: '/images/o.jpg',
      text: 'img1'
    },
    {
      image: '/images/tshirt1-main.jpg',
      text: 'img2'
    },
    {
      image: '/images/o.jpg',
      text: 'img1'
    },
    {
      image: '/images/tshirt-1.jpg',
      text: 'img3'
    },
  ];
  
function ProductImage() {
    return(
        <SliderImage 
         data={data} 
        width="500px"
        showDescription={true} 
        direction="right" 
        />
    )
}

export default ProductImage;