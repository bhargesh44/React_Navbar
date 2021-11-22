
import './App.css';
import Navbar from './components/Navbar';

import { Switch , Route } from 'react-router';

const Home = () => {
  return(
    <>
      <Navbar />
      <section className="hero_section">
          <p> welcome to </p>
          <h1> Bhargesh Gediya Home Page</h1>
      </section>
    </>
  )
}


const About = () => {
  return(
    <>
      <Navbar />
      <section className="hero_section">
          <p> welcome to </p>
          <h1> Bhargesh Gediya About Page</h1>
      </section>
    </>
  )
}

const Service = () => {
  return(
    <>
      <Navbar />
      <section className="hero_section">
          <p> welcome to </p>
          <h1> Bhargesh Gediya Service Page</h1>
      </section>
    </>
  )
}

const Contact = () => {
  return(
    <>
      <Navbar />
      <section className="hero_section">
          <p> welcome to </p>
          <h1> Bhargesh Gediya Contact Page</h1>
      </section>
    </>
  )
}



function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/service">
          <Service />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
}

export default App;
