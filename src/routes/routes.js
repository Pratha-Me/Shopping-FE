import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';
import Seller from '../pages/Login/Seller';
import ResetPassword from '../pages/Login/ResetPassword';
import VerifyMail from '../pages/Login/VerifyMail';
import SubCategory from '../pages/Category/SubCategory';
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
    { path: '/subcategory', component: SubCategory },
    { path: '/home/account/profile', component: Profile },


    // Authenticated Routes
    // { path: '/dashboard', component: Dashboard},
    // { path: '/unauthorized', component: Unauthorized},
];

export default routes;