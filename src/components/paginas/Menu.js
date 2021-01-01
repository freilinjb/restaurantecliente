import React,{ useState, useEffect, useContext } from 'react';
import  { Link } from 'react-router-dom';
import { FirebaseContext } from '../../firebase';

const Menu = () => {
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const obtenerPlatillos = async () => {
            const resultado = await firebase.db.collection('productos').get();
            console.log('resultado: ', resultado);

            resultado.forEach(platillo => {
                console.log(platillo.data());
            });

        }

        obtenerPlatillos();
    },[]);

    return ( 
        <>
            <h1 className="text-3xl font-light md-4">Menu</h1>
            <Link to="/NuevoPlatillo" className="bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar Platillo
            </Link>
        </>
     );
}
 
export default Menu;