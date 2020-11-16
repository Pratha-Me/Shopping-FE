import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../../styles/scss/ProductCard.scss'
import {addItem} from '../../helpers/CartHelpers'

export default function ProductCard({width, height, imgHeight, product}) {
    const [productOffer, setProductOffer] = useState('');
    const [redirect, setRedirect] = useState(false)

    useEffect (()=>{
        setProductOffer(product.offer)
    }, [productOffer])
    console.log('chaiyeko offer :', product)

    const addToCart = () => {
        addItem(product, () => {
            setRedirect(true)
        })
    }

    const shouldRedirect = redirect =>{
       if(redirect){
           return<Redirect to="/cart"></Redirect>
       } 
    }
    
    return (
        <div className="product-container" style={{width: `${width}`, height:`${height}`}}>
            {shouldRedirect(redirect)}
            {productOffer ? <div class="cr cr-top cr-right cr-sticky cr-blue">{product.offer} Offer</div> : '' }
            <img src={product.imageUrl} alt="Avatar" className="image" style={{height: `${imgHeight}`}} />
              <div className="card-middle">
                <a onClick={addToCart} className="hover-fx"><i className="fas fa-shopping-cart"></i> </a>
                <a className="hover-fx"><i className="fas fa-heart"></i> </a>
                <a className="hover-fx"><i className="fas fa-plus"></i> </a>
            </div>
            <div className="card-middle-1">
                <a className="hover-fx"><i className="fas fa-eye"></i></a>
            </div>
            <div className="footer-card">
                <h2>{product.title.substring(0, 20)}</h2>
                <div className="row">
                    <div className={`col-sm-12 ${productOffer ? 'col-md-6' : ''}`}>
                        <h3>Rs. {product.price}</h3>
                    </div>
                {productOffer ? 
                <div className="col-sm-12 col-md-6">
                    <h3 style={{textDecoration: 'line-through', color:'red'}}>Rs. {product.pevPrice}</h3>
                </div> : '' }
                </div>
            </div>
        </div>
    )
}
