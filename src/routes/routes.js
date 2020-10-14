import home from '../pages/home';
import dummy from '../pages/dummy';

const routes = [

    // public Routes
    // { path: '/login', component: Pageslogin, ispublic: true },
    // { path: '/forget-password', component: ForgetPassword, ispublic: true },
    // { path: '/logout', component: Logout, ispublic: true },

    // Authenticated Routes
    // { path: '/dashboard', component: Dashboard},
    // { path: '/sign-up', component: SellerSignUp},
    // { path: '/unauthorized', component: Unauthorized},
    { path: '/', component: home, ispublic: true },
    { path: '/dummy', component: dummy, ispublic: true },
];

export default routes;