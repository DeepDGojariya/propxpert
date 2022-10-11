import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Enquiries from './components/Enquiries/Enquiries';
import EnquiriesList from './components/Enquiries/EnquiriesList';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Listings from './components/Listings/Listings';
import Navbar from './components/Navbar';
import AddProperty from './components/Properties/AddProperty';
import Properties from './components/Properties/Properties';
import PropertyDetail from './components/Properties/PropertyDetail';
import Subscription from './components/Subscription/Subscription';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/properties' element={<Properties />}></Route>
        {/* Protected Routes */}
        {/* Property detail should be present */}
        <Route path='/property/:id' element={<PropertyDetail />}></Route>
        <Route path='/my-listings' element={<Listings />}></Route>
        <Route path='/subscribe/:id' element={<Subscription />}></Route>
        <Route path='/add-property' element={<AddProperty />}></Route>
        <Route path='/my-enquiries' element={<Enquiries />}></Route>
        <Route path='/view-enquiries/:id' element={<EnquiriesList />}></Route>
      </Routes>
      <Footer></Footer> 
    </div>
  );
}

export default App;
