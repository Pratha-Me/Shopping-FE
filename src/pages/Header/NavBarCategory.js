import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../../styles/css/NavbarCategory.css'

function NavbarCategory() {
    return (
      <>
    <nav className="fixed navbar navbar-expand-sm"> 
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown px-3"> <a className="nav-link dropdown-toggle category" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <strong> Fashion </strong> </a>
                <div className="dropdown-menu px-3" aria-labelledby="navbarDropdown">
                    <div className="container">
                        <div className="row" style={{width:'100%'}}>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="nav-item dropdown px-3"> <a className="nav-link dropdown-toggle category" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <strong> Furniture </strong> </a>
                <div className="dropdown-menu px-3" aria-labelledby="navbarDropdown">
                    <div className="container">
                        <div className="row" style={{width:'100%'}}>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="nav-item dropdown px-3"> <a className="nav-link dropdown-toggle category" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <strong> Books & Stationary </strong> </a>
                <div className="dropdown-menu px-3" aria-labelledby="navbarDropdown">
                    <div className="container">
                        <div className="row" style={{width:'100%'}}>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="nav-item dropdown px-3"> <a className="nav-link dropdown-toggle category" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <strong> Mobile Phones </strong> </a>
                <div className="dropdown-menu px-3" aria-labelledby="navbarDropdown">
                    <div className="container">
                        <div className="row" style={{width:'100%'}}>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle category" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <strong> Groceries </strong> </a>
                <div className="dropdown-menu px-3" aria-labelledby="navbarDropdown">
                    <div className="container">
                        <div className="row" style={{width:'100%'}}>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="nav-item dropdown px-3"> <a className="nav-link dropdown-toggle category" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <strong> Laptops </strong> </a>
                <div className="dropdown-menu px-3" aria-labelledby="navbarDropdown">
                    <div className="container">
                        <div className="row" style={{width:'100%'}}>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item"> <Link className="nav-link active" to="/">Object </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                    <li className="nav-item"> <Link className="nav-link i" to="/">Item </Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</nav>
      </>
    );
  }
  export default NavbarCategory;