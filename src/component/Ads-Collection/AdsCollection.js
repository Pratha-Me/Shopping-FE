import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../styles/scss/AdsCollection.scss';

const AdsCollection = ({ ad, history }) => {
  return (
    <div className={`menu-item mb-4`} onClick={() => history.push(`/browser/${ad.productName}/${ad.productId}`)}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url('data:image/png;base64, ${ad.image}')`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}
      />
    </div>
  );
};

export default withRouter(AdsCollection);
