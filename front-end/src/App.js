import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Signup from './components/signup/Signup';
import Privatecomponent from './components/privatecomponent/Privatecomponent';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<Privatecomponent />}>
            <Route path='/' element={<h1>Product component</h1>} />
            <Route path='/add' element={<h1>Add Product</h1>} />
            <Route path='/update' element={<h1>Update Product</h1>} />
            <Route path='/logout' element={<h1>Logout</h1>} />
            <Route path='/profile' element={<h1>Profile</h1>} />
          </Route>

          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
