import Home from '../pages/home';
// import Dummy from '../pages/Dummy';
import Dummy from '../pages/dummy'

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
];

export default routes;