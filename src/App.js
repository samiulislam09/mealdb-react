import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contactus from './components/ContactUs/Contactus';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Notfound from './components/Notfound/Notfound'
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/contact' element={<Contactus></Contactus>}></Route>
        <Route path='/details' element={<Details></Details>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
