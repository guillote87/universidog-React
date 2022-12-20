
import './App.css';
import { Navbar } from '../src/components/NavBar/Navbar'
import { Banner } from './components/Banner/Banner';
import { Info } from './components/Info/Info';
import { About } from './components/About/About';
import { Formacion } from './components/Formacion/Formacion';
import { Separacion } from './components/Separacion/Separacion';
import { Contacto } from './components/Contacto/Contacto';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Info />
      <Formacion />
      <Separacion/>
      <About/>
      <Contacto/>
      <Footer />
    </div>
  );
}

export default App;
