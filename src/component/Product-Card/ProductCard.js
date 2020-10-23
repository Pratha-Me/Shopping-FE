import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/scss/ProductCard.scss'

export default function ProductCard() {
    return (
        <div className="product-container">
            <img src="https://images.pexels.com/photos/5500958/pexels-photo-5500958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Avatar" className="image" style={{width:"100%"}}/>
            <div className="card-middle">
                <Link to='/' className="hover-fx"><i className="fas fa-shopping-cart"></i> </Link>
                <Link to='/' className="hover-fx"><i className="fas fa-heart"></i> </Link>
                <Link to='/' className="hover-fx"><i className="fas fa-plus"></i> </Link>
            </div>
            <div className="card-middle-1">
                <Link to='/' className="hover-fx"><i className="fas fa-eye"></i></Link>
            </div>
            <div className="footer-card">
                <h2>Utensils</h2>
                <h3>Rs. 10000</h3>
            </div>
        </div>
    )
}
