import React, { useEffect, useState, useContext} from 'react';
import { FirebaseContext } from '../../firebase';


const Ordenes = () => {

    //Context con las operaciones de firebase
    const { firebase } = useContext(FirebaseContext);

    const [ordenes, setOrdenes] = useState([]);

    useEffect(() => {
        const obtenerOrdenes = () => {
            firebase.db.collection('ordenes').where('completado', "==", false).onSnapshot(manejarSnapshot);
        }
        obtenerOrdenes();
    }, []);

    function manejarSnapshot(snapshot) {
        const ordenes = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });
        console.log('ordenes: ', ordenes);
    }


    return ( 
        <>
            <h1 className="text-3xl font-light md-4">Ordenes</h1>
        </>
     );
}
 
export default Ordenes;