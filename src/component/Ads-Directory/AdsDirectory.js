import React, { Component } from 'react';
import AdsCollection from '../Ads-Collection/AdsCollection';

function AdsDirectory({ ads, maxSize, minSize }) {
  const result = ads && ads.filter((carousel) => carousel.productName !== null && carousel.productId !== null);
  const mainResult = result && result.filter((carousel, idx) => idx >= minSize && idx <= maxSize);
  return (
    <div className='container-fluid'>
      <div className='row'>
        {mainResult &&
          mainResult.map((ad, idx) => (
            <div key={idx} className='col-sm-12 col-md-4'>
              <AdsCollection ad={ad} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default AdsDirectory;
