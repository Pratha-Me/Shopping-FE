import Home from '../pages/Home';
import ForgotPassword from '../pages/Login/ForgotPassword';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';
import Seller from '../pages/Login/Seller';

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
    { path: '/forgotpassword', component: ForgotPassword },

    // Authenticated Routes
    // { path: '/dashboard', component: Dashboard},
    // { path: '/unauthorized', component: Unauthorized},
];

export default routes;