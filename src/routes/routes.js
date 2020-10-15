<<<<<<< HEAD
import Home from '../pages/home';
// import Dummy from '../pages/Dummy';
import Dummy from '../pages/dummy'
=======
import Home from '../pages/Home';
import Dummy from '../pages/Dummy';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Seller from '../pages/Seller';
>>>>>>> ed868be58cd655814464ab34f489409423c240b8

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