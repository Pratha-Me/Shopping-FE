import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../styles/scss/AdsCollection.scss';

const AdsCollection = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`menu-item mb-4`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
  </div>
);

export default withRouter(AdsCollection);
