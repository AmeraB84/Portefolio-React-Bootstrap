import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter, Switch , HashRouter} from 'react-router-dom'
import CookieConsent from "react-cookie-consent";
import NavBar from './components/NavBar'
import Header from './components/Header'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import ConfirContact from './components/ConfirContact';
import Competences from './components/Competences';
import Experiences from './components/Experiences';
import Cookies from './components/Cookies';
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite';
import Mentionslegales from './components/Mentionslegales';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <HashRouter>
        <Switch>
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/contactme" component={Contact} />
          <Route path="/competences" component={Competences} />
          <Route path="/realisations" component={Experiences} />
          <Route path="/confirmContact" component={ConfirContact} />
          <Route path="/cookies" component={Cookies} />
          <Route path="/mentionslegales" component={Mentionslegales} />
          <Route path="/politiquedeconfidentialite" component={PolitiqueConfidentialite} />
          <Route exact path="/" component={Header} />
        </Switch>
      </HashRouter>
      <Footer />
      <CookieConsent 
      enableDeclineButton 
      flipButtons
      buttonText="Accepter"
      declineButtonText="Refuser"
      location='top'

      >
      En cliquant sur "Accepter", vous consentez à l'utilisation de Cookies ou autres traceurs permettant de réaliser des statistiques 
      de visites. <a href='/cookies' target='_blank'>En savoir plus</a>
      </CookieConsent>

    </>
  );
}

export default App;
