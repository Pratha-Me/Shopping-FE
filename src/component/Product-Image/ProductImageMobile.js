import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductImageMobile = () => {
    return(
            <Carousel>
                    <div>
                        <img src="https://images.unsplash.com/photo-1420768296918-cc1dd69c42ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1464095718138-d9c47312eac5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=749&q=80" />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1463002559057-670da87dfc65?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" />
                    </div>
                </Carousel>
        )
}    

export default ProductImageMobile

 

