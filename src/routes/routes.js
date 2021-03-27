import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import SellerRegister from "../pages/Login/SellerRegister";
import ResetPassword from "../pages/Login/ResetPassword";
import VerifyMail from "../pages/Login/VerifyMail";
import ProductDetails from "../pages/Product-Details/ProductDetails";
import SubCategory from "../pages/Sub-Category/SubCategory";
import CartDirectory from "../component/Cart/CartDirectory";
import Profile from "../pages/account/Profile";
import Checkout from "../pages/Checkout/Checkout";
import Esewa from "../api/Esewa/Esewa";
import Success from "../api/Esewa/Success";
import VerifyOTP from "../pages/Login/VerifyOTP";
import Failed from "../api/Esewa/Failed";
import CommingSoon from "../pages/CommingSoon/Index";

const routes = [
  // public Routes
  // { path: '/sign-up', component: SellerSignUp },
  // { path: '/login', component: Pageslogin },
  // { path: '/forget-password', component: ForgetPassword },
  // { path: '/logout', component: Logout },
  { path: "/", component: CommingSoon },
  // { path: "/login", component: Login },
  // { path: "/register", component: Register },
  // { path: "/reset-password", component: ResetPassword },
  // { path: "/verify-email", component: VerifyMail },
  // { path: "/verify-otp", component: VerifyOTP },
  // { path: "/product-details/:product", component: ProductDetails },
  // { path: "/cart", component: CartDirectory },
  // { path: "/checkout/", component: Checkout },
  // { path: "/user/profile", component: Profile },
  // { path: "/browser/:product/:id", component: SubCategory },
  // { path: "/esewa", component: Esewa },
  // { path: "/success", component: Success },
  // { path: "/failed", component: Failed },
  // { path: "/seller-register", component: SellerRegister },
  // Authenticated Routes
  // { path: '/dashboard', component: Dashboard},
  // { path: '/unauthorized', component: Unauthorized},
];

export default routes;
