import './App.css';
import Blog from './componants/Blog/Blog';
import AllServices from './componants/AllServices/AllServices';
import Banner from './componants/Banner/Banner';
import Contact from './componants/Contact/Contact';
import CoreService from './componants/CoreService/CoreService';
import Doctors from './componants/Doctors/Doctors';
import Header from './componants/Header/Header';
import Feedback from './componants/Feedback/Feedback';
import WelcomeNote from './componants/WelconeNote/WelcomeNote';
import Footer from './componants/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Banner></Banner>
        <WelcomeNote></WelcomeNote>
        <AllServices></AllServices>
        <CoreService></CoreService>
        <Doctors></Doctors>
        <Feedback></Feedback>
        <Blog></Blog>
        <Contact></Contact>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
