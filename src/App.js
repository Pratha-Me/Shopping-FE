import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import routes from './routes/routes';
import TopHeader from './pages/Header/TopHeader'
import UnAuthorised from './pages/UnAuthorised';
import NavbarMenu from './pages/Header/NavbarMenu';
import Footer from './pages/Footer/Footer'
import { getAuthUser, isUserAuthenticated } from './helpers/AuthHelpers'
import { loginUserSuccessful } from './redux/auth/login/actions'
import { connect } from 'react-redux';

const App = (props) => {

  if (getAuthUser()){
    const user = getAuthUser();
    props.loginUserSuccessful(user);
  }

  const PrivateRoute = ({ component: Component, role: Role, ...rest }) => (
    <Route {...rest} render={(props) => {
      if (isUserAuthenticated() !== true) {
        return <Redirect to='/logout' />
      }
      
      if (Role) {
        const user = getAuthUser();
        if (Role.includes(user.authorities[0])) {
          return <Component {...props} />
        } else {
          return <Redirect to='/unauthorized' />
        }
      }
      else {
        return <Component {...props} />
      }
    }} />
  )

  return (
    <React.Fragment>
      <Router>
      {/* <Navbar></Navbar> */}
      {/* <NavbarCategory></NavbarCategory> */}
        <Switch>
          {routes.map((route, idx) =>
            route.isPrivate ? 
              <PrivateRoute path={route.path} component={route.component} role={route.role} key={idx} />
              :
              route.path === "/" ? <Route path={route.path} exact component={route.component} key={idx} /> :
                <Route path={route.path} component={route.component} key={idx} />
          )}
        </Switch>
        <Footer></Footer>
      </Router>
    </React.Fragment>
  );
}

export default connect(null, {loginUserSuccessful})(App);
