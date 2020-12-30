import React from 'react';
import { Routes, Route } from 'react-router';

import Ordenes from './components/paginas/Ordenes';
import Menu from './components/paginas/Menu';
import NuevoPlatillo from './components/paginas/NuevoPlatillo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Ordenes/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/NuevoPlatillo" element={<NuevoPlatillo/>} />
      </Routes>
    </div>
  );
}

export default App;
