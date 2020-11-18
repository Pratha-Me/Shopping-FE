import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';
import Seller from '../pages/Login/Seller';
import ResetPassword from '../pages/Login/ResetPassword';
import VerifyMail from '../pages/Login/VerifyMail';
import ProductDetails from '../pages/Product-Details/ProductDetails';
import SubCategory from '../pages/Sub-Category/SubCategory';
import CartDirectory from '../component/Cart/CartDirectory';
import Profile from '../pages/account/Profile';

const routes = [

    // public Routes
    // { path: '/sign-up', component: SellerSignUp },
    // { path: '/login', component: Pageslogin },
    // { path: '/forget-password', component: ForgetPassword },
    // { path: '/logout', component: Logout },
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/seller', component: Seller },
    { path: '/reset-password', component: ResetPassword },
    { path: '/verify-email', component: VerifyMail },
    { path: '/product-details', component: ProductDetails },
    { path: '/sub-category', component: SubCategory },
    { path: '/cart', component: CartDirectory },
    { path: '/user/profile', component: Profile },
    { path: '/browser/:product/:id', component: SubCategory },
    // Authenticated Routes
    // { path: '/dashboard', component: Dashboard},
    // { path: '/unauthorized', component: Unauthorized},
];

export default routes;