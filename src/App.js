import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
      <Router>
      {/* <MyNavbar /> */}
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
