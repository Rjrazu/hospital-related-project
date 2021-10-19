import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllServices from './componants/AllServices/AllServices';
import Contact from './componants/Contact/Contact';
import Doctors from './componants/Doctors/Doctors';
import Header from './componants/Header/Header';
import Feedback from './componants/Feedback/Feedback';
import Footer from './componants/Footer/Footer';
import NotFound from './componants/NotFound/NotFound';
import Home from './componants/Home/Home';
import Login from './componants/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './componants/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <AllServices></AllServices>
            </Route>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <PrivateRoute exact path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute exact path="/feedback">
              <Feedback></Feedback>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
