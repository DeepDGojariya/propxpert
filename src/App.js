
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Listings from './components/Listings/Listings';
import Navbar from './components/Navbar';
import AddProperty from './components/Properties/AddProperty';
import Properties from './components/Properties/Properties';

function App() {
  return (
    <div className="App">
    
    <Navbar></Navbar>
    <Home></Home>
    {/* <AddProperty></AddProperty> */}
    {/* <Properties></Properties> */}
    {/* <Listings></Listings> */}
    <Footer></Footer>
    </div>
  );
}

export default App;
