import './App.css'

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './pages/HomeScreen';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Collection from './pages/Collection';
import Pages from './pages/Pages';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <div className="App">

      <Navbar />

      <ToastContainer position='top-center' limit={1} />


      <Routes>

        <Route path="/" element={<HomeScreen />} /> 
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/signup" element={<SignUp />} /> 

        <Route path='/shop' element={<Shop/>} />
        <Route path='/shop/:id' element={<ProductDetails />} />
        
        <Route path='/collection' element={<Collection />} />
        <Route path='/pages' element={<Pages/>} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>


      <Footer />

      
    </div>
  );
}

export default App;
