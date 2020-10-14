import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import { loginUserSuccessful } from './store/actions';
import routes from './routes/routes';
import 'normalize.css';
import TopHeader from './parts/Header/Top-Header/TopHeader'
import Navbar from './parts/Header/Navbar/Navbar';

// import './App.css';

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

console.log("Here", routes);
  return (
    <React.Fragment>

      <Router>
      <TopHeader></TopHeader>
      <Navbar></Navbar>
        <Switch>
          {routes.map((route, idx) =>
            route.ispublic ? route.path === "/" ? <Route path={route.path} exact component={route.component}/> :
              <Route path={route.path} component={route.component} key={idx} />
              :
              null
              // <PrivateRoute path={route.path} component={withLayout(route.component)} role={route.role} key={idx} />
          )}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
