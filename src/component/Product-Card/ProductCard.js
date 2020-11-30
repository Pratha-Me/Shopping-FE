import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../../styles/scss/ProductCard.scss'
import {addItem, removeItem, updateItem} from '../../helpers/CartHelpers'



const ProductCard = ({width, height, imgHeight, product, showButtons=true, showFooter=true, cartUpdate= false, showRemove = false  }) => {
    const [redirect, setRedirect] = useState(false)
    const [count, setCount] = useState(product.count)

    const addToCart = () => {
        addItem(product, () => {
            setRedirect(true)
        })
    }

    const shouldRedirect = redirect => {
        if(redirect){
            return <Redirect to ='/cart'/>
        }
    }
    
    const handleChange = productId => event => {
        setCount(event.target.value < 1 ? 1 : event.target.value)
        if(event.target.value >= 1){
            updateItem(productId, event.target.value)
        }
        window.location.reload()
    }

    const showCartUpdateOptions = cartUpdate => {
        return cartUpdate && <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text">Adjust Quantity</span>
        </div>
        <input type="number" className="form-control" value={count} onChange={handleChange(product.id)}/>
    </div>
    }

    console.log('Id chaiyo :', product.id)

    return (
        // <div className="product-container" style={{width: `${width}`, height:`${height}`}}>
        //     {shouldRedirect(redirect)}
        //     {/* {productOffer ? <div class="cr cr-top cr-right cr-sticky cr-blue">{product.offer} Offer</div> : '' } */}
        //     <img src={product.imageUrl} alt="Avatar" className="image" style={{height: `${imgHeight}`}} />
        //       <div className="card-middle">
        //         <a onClick={addToCart} className="hover-fx"><i className="fas fa-shopping-cart"></i> </a>
        //         <a className="hover-fx"><i className="fas fa-heart"></i> </a>
        //         <a className="hover-fx"><i className="fas fa-plus"></i> </a>
        //     </div>
        //     <div className="card-middle-1">
        //         <a className="hover-fx"><i className="fas fa-eye"></i></a>
        //     </div>
        //     <div className="footer-card">
        //         <h2>{product.itemName.substring(0, 20)}</h2>
        //         <div className="row">
        //             <div className='col-sm-12 col-md-12'>
        //                 <h3>Rs. {product.unitPrice}</h3>
        //             </div>
        //         </div>
        //         {/* <div className="row">
        //             <div className={`col-sm-12 ${productOffer ? 'col-md-6' : ''}`}>
        //                 <h3>Rs. {product.price}</h3>
        //             </div>
        //         {productOffer ? 
        //         <div className="col-sm-12 col-md-6">
        //             <h3 style={{textDecoration: 'line-through', color:'red'}}>Rs. {product.pevPrice}</h3>
        //         </div> : '' }
        //         </div> */}
        //     </div>
        // </div>

        <div className="product-container" style={{width: `${width}`, height:`${height}`}}>
        {shouldRedirect(redirect)}
        {/* {productOffer ? <div class="cr cr-top cr-right cr-sticky cr-blue">{product.offer} Offer</div> : '' } */}
        <img src={product.imageUrl} alt="Avatar" className="image" style={{height: `${imgHeight}`}} />
              {showButtons ?
          <div className="card-middle">
                <a onClick={addToCart} className="hover-fx"><i className="fas fa-shopping-cart"></i> </a>
                <a className="hover-fx"><i className="fas fa-heart"></i> </a>
                {/* <a className="hover-fx"><i className="fas fa-plus"></i> </a> */}
                <a className="hover-fx"><i className="fas fa-eye"></i></a>
        </div> : ''
            }

            {showFooter ?
                    <div className="footer-card">
                    <h2>{product.itemName.substring(0, 20)}</h2>
                    <div className="row">
                        <div className='col-sm-12 col-md-12'>
                            <h3>Rs. {product.unitPrice}</h3>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className={`col-sm-12 ${productOffer ? 'col-md-6' : ''}`}>
                            <h3>Rs. {product.price}</h3>
                        </div>
                    {productOffer ? 
                    <div className="col-sm-12 col-md-6">
                        <h3 style={{textDecoration: 'line-through', color:'red'}}>Rs. {product.pevPrice}</h3>
                    </div> : '' }
                    </div> */}
                </div> : '' }
                {showCartUpdateOptions(cartUpdate)}
    </div>
    )
}

export default ProductCard
