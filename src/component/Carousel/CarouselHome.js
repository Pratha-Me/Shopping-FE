import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/CarouselHome.css';

function CarouselHome({ carouselList }) {
  const result = carouselList && carouselList.filter((carousel) => carousel.productName === null && carousel.productId === null);
  return (
    <>
      {' '}
      <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          {result && result.map((item, index) => {
            let activeClass = index === 0 ? 'active' : '';
            return <li key={index} data-target='#carouselExampleIndicators' data-slide-to={index} className={activeClass}></li>;
          })}
        </ol>
        <div className='carousel-inner'>
          {result && result.map((item, index) => {
            let activeClass = index === 0 ? 'carousel-item active' : 'carousel-item';
            return (
              <div
                className={activeClass}
                key={index}
                style={{ background: `url('data:image/png;base64, ${item.image}')`, height: '100%', width: '100%', backgroundSize: '100% 100%', backgroundPosition: 'center' }}
              >
                {/* <div className='info'>
                  <h1>{item.name} </h1>
                  <Link key={item.id} to={`/browser/${item.productName}/${item.productId}`}>
                    <button className='carousel-button'>Shop Now</button>
                  </Link>
                </div> */}
              </div>
            );
          })}
        </div>
        <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </>
  );
}
export default CarouselHome;
