import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import routes from './routes/routes';
// import 'normalize.css';
import TopHeader from './pages/Header/TopHeader'
import Navbar from './pages/Header/Navbar';
<<<<<<< Updated upstream
import UnAuthorised from './pages/UnAuthorised';
=======
import NavbarCategory from './pages/Header/NavBarCategory';
>>>>>>> Stashed changes

const App = (props) => {

  // const user = getAuthUser();
  // props.loginUserSuccessful(user);

  /*
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
*/

  return (
    <React.Fragment>
      <Router>
<<<<<<< Updated upstream
        <TopHeader></TopHeader>
        <Navbar></Navbar>
=======
      <TopHeader></TopHeader>
      {/* <Navbar></Navbar> */}
      <NavbarCategory></NavbarCategory>
>>>>>>> Stashed changes
        <Switch>
          {routes.map((route, idx) =>
            route.isPrivate ? <Redirect to={"/unauthorised"} component={UnAuthorised} />
              // <PrivateRoute path={route.path} component={withLayout(route.component)} role={route.role} key={idx} />
              :
              route.path === "/" ? <Route path={route.path} exact component={route.component} key={idx} /> :
                <Route path={route.path} component={route.component} key={idx} />
          )}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
