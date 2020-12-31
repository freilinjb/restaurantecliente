import { createContext } from 'react';

const FirebaseContext = createContext();

//context permite propagar las funciones por todos los componentes
//sin tener que pasar los props por los componentes
export default FirebaseContext;