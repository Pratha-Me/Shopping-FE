import React, {useState} from 'react'
// import StarRating from 'react-bootstrap-star-rating';
import ReactStars from "react-rating-stars-component";


export default function UserReview() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
  return (
    <div 
    style={{ padding: `16px 50px`, width:'85vw', margin:'32px auto'}}
    >
      <h3 className='text-justify pt-2 mb-3 product-title'>User Reviews</h3>
      <div className="row">
          <div className="col-sm-12 col-md-3" style={{padding:'0'}}>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={30}
            isHalf={false}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
        />
        <p>Rate this product !</p>
          </div>
          <div className="col-sm-12 col-md-9" style={{padding:'0'}}>
          <div class="input-group">
            {/* <div class="input-group-prepend">
                <span class="input-group-text">With textarea</span>
            </div> */}
            <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
            <button type="button" class="btn btn-primary mt-3" >Post</button>
          </div>
      </div>
    </div>
  );
}
