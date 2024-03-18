import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

function App() {
  
  return (
    <div className=' w-[100vw] ' >
     
        <div className="bg-slate-900">
          <Navbar/>
        </div>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>

    </div>
  );
}

export default App;
