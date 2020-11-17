import React from 'react'
import ProductCardDirectory from '../../component/Product-Card-Directory/ProductCardDirectory'
import ProductImage from '../../component/Product-Image/ProductImage'
import RelatedProducts from '../../component/RelatedProducts/RelatedProducts'
import UserReview from '../../component/UserReview/UserReview'
import '../../styles/css/ProductDetails.css'
import ReactStars from "react-rating-stars-component";



const ProductDetails = () => {
    var i = 1;
    function minusClick() {
        i--;
        document.getElementById('numb').value = i;
    }
    function plusClick() {
        i++;
        document.getElementById('numb').value = i;
    }
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <ProductImage></ProductImage>
                </div>
                <div className="col-sm-12 col-md-6 product-details-content">
                    <h2>Branded Red Hats</h2>
                    <h5 className="mt-2">Price: Rs. 1900</h5>
                    <div>
                    <ReactStars
                        count={5}
                        value={4}
                        size={30}
                        isHalf={false}
                        edit={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="red"
                    />
                    <p>(5 Reviews)</p>
                    </div>
                    <div className="mt-5 plus-minus-button">
                    <button type="button" class="btn mr-1" onClick={minusClick}><i class="fas fa-minus"></i></button>
                    <input id='numb' value="1" class="mr-1"/>
                    <button type="button" class="btn mr-1" onClick={plusClick}><i class="fas fa-plus"></i></button>

                    </div>
                    <button type="button" className="btn mt-4 mr-3">Add To Cart</button>
                    <button type="button" className="btn mt-4 mr-3">Buy Now</button>
                    <button type="button" className="btn mt-4 mr-3">WishList</button>
                    <h4 className='mt-4' style={{color:'black', textShadow:'none', fontWeight:'400'}}>Product Details</h4>
                    <ul className='ml-5'>
                        <li>Authentic Nepali Brand</li>
                        <li>Authentic Nepali Brand</li>
                        <li>Authentic Nepali Brand</li>
                        <li>Authentic Nepali Brand</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <ProductCardDirectory></ProductCardDirectory> */}
        {/* <RelatedProducts></RelatedProducts> */}
        <UserReview></UserReview>
        </>
    )
}
export default ProductDetails