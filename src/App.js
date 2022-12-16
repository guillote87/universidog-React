
import './App.css';
import { Navbar } from '../src/components/NavBar/Navbar'
import { Banner } from './components/Banner/Banner';
import { Info } from './components/Info/Info';
import { About } from './components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Info />
      <About/>
    </div>
  );
}

export default App;
