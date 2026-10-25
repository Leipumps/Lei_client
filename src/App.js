import logo from './logo.svg';
import './App.css';
import comingsoon from '../src/asset/cm.jpg'
import Header from './components/Header/Header';
import { Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about-us" element={<About/>} />
{/*<Route path="/products" element={<div><h1>Products Page</h1><img src={comingsoon} alt="Coming Soon" style={{ width: '100%', height: 'auto' }} /></div>} />*/}
<Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      
    </div>
  );
}

export default App;
