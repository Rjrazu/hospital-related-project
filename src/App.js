import './App.css';
import AllServices from './componants/AllServices/AllServices';
import Contact from './componants/Contact/Contact';
import Doctors from './componants/Doctors/Doctors';
import Header from './componants/Header/Header';
import Feedback from './componants/Feedback/Feedback';
import Footer from './componants/Footer/Footer';
import NotFound from './componants/NotFound/NotFound';
import Home from './componants/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
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
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/feedback">
            <Feedback></Feedback>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
