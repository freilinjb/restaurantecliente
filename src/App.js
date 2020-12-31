import React from "react";
import { Routes, Route } from "react-router";

import firebase, { FirebaseContext } from "./firebase";

import Ordenes from "./components/paginas/Ordenes";
import Menu from "./components/paginas/Menu";
import NuevoPlatillo from "./components/paginas/NuevoPlatillo";
import Sidebar from "./components/ui/Sidebar";

function App() {
  return (
    /*FirebaseContext permitira 
    compartir los metodos a todos los componentes*/
    <FirebaseContext.Provider
      value={{firebase}}
    >
      <div className="md:flex min-h-screen">
        {/* min-h-screen toma todo el ancho de la pantalla*/}
        <Sidebar />

        <div className="md:w-4/5 xl:w-4/5 p-6">
          <Routes>
            <Route path="/" element={<Ordenes />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/NuevoPlatillo" element={<NuevoPlatillo />} />
          </Routes>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
