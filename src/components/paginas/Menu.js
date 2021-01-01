import React,{ useState, useEffect, useContext } from 'react';
import  { Link } from 'react-router-dom';
import { FirebaseContext } from '../../firebase';

const Menu = () => {
    //definir el state para los platillos
    const [platillos, setPlatillos] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    //Consultar la db de datos al cargar
    useEffect(() => {
        const obtenerPlatillos = () => {
            firebase.db.collection('productos').onSnapshot(manejarSnapshop);
            // onSnapshot es para realtime .get() para consultar los datos fijos

        }

        obtenerPlatillos();
    },[]);

    //Snapshop nos permite utilizar la db de datos en tiempo real de firestone
    function manejarSnapshop(snapshot) {
        const platillos = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });

        setPlatillos(platillos);
        // console.log(platillos);
    }

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