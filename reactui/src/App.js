import './App.css';
import Home from './container/Home';
import SC1 from './source_code/sc1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="bg-gray-900 h-screen">
       <BrowserRouter>
      <Home/>
      {/* <SC1/> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
