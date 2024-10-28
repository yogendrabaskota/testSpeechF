import React from 'react';
import Recorder from './components/Recorder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Recorder />} />
      </Routes>
      
      </BrowserRouter>
        // <div className="App">
        //     <h1>Voice to Text App</h1>
        //     <Recorder />
        // </div>
    );
}

export default App;
