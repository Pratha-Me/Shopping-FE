import Home from '../pages/home';
import Dummy from '../pages/dummy';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';
import Seller from '../pages/Login/Seller';

const routes = [

    // public Routes
    // { path: '/login', component: Pageslogin, ispublic: true },
    // { path: '/forget-password', component: ForgetPassword, ispublic: true },
    // { path: '/logout', component: Logout, ispublic: true },

    // Authenticated Routes
    // { path: '/dashboard', component: Dashboard},
    // { path: '/sign-up', component: SellerSignUp},
    // { path: '/unauthorized', component: Unauthorized},
    { path: '/', component: Home, ispublic: true },
    { path: '/dummy', component: Dummy, ispublic: true },
    { path: '/login', component:Login, ispublic:true},
    { path: '/register', component:Register, ispublic:true},
    { path: '/seller', component:Seller, ispublic:true},
];

export default routes;