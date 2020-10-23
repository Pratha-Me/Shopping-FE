import React, { Component } from 'react';
import AdsCollection from '../Ads-Collection/AdsCollection';

export default class AdsDirectory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: '',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: '',
        },
        {
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: '',
        },
      ],
    };
  }
  render() {
    return (
      <div className='container-fluid'>
          <div className="row">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
        <div key={id} className="col-sm-12 col-md-4">
          <AdsCollection  {...otherSectionProps} />
        </div>
        ))}
          </div>
      </div>
    );
  }
}
