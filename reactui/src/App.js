import './App.css';
import Home from './container/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SC1 from "./source_code/sc1";
import SC2 from "./source_code/sc2";
import SC3 from "./source_code/sc3";
import SC4 from "./source_code/sc4";
import SC5 from "./source_code/sc5";
import SC6 from "./source_code/sc6";
import Payment from './components/Payment';


function App() {
  return (
    <div className=" h-screen">
      <div className='bg-gray-900'>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sc1" element={<SC1/>}></Route>
        <Route path="/sc2" element={<SC2/>}></Route>
        <Route path="/sc3" element={<SC3/>}></Route>
        <Route path="/sc4" element={<SC4/>}></Route>
        <Route path="/sc5" element={<SC5/>}></Route>
        <Route path="/sc6" element={<SC6/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
