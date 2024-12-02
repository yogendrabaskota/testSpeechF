/* eslint-disable no-unused-vars */

import Apple from './components/apple';
import Recorder from './components/Recorder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Recorder />} />
      {/* <Route path="/apple" element={<Apple />} /> */}
    
      </Routes>
      
      </BrowserRouter>
        // <div className="App">
        //     <h1>Voice to Text App</h1>
        //     <Recorder />
        // </div>
    );
}

export default App;
