import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route,BrowserRouter, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Header from './components/Header'
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import ConfirContact from './components/ConfirContact';
import Competences from './components/Competences';

function App() {
  return (
    <>
    <NavBar />
      < BrowserRouter >
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/contactme" component={Contact} />
          <Route path="/competences" component={Competences} />
          <Route path="/confirmContact" component={ConfirContact} />
        </Switch>
      </ BrowserRouter >

    </>
  );
}

export default App;
