import React, { useContext, useState, useEffect } from 'react';
import { useFormik } from  'formik';
import * as Yup from 'yup';
import { FirebaseContext } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import FileUploader from "react-firebase-file-uploader";


const NuevoPlatillo = () => {

    //State para las imagenes
    const [subiendo, setSubiendo] = useState(false);
    const [progreso, setProgreso] = useState(0);
    const [urlImagen, setUrlImagen] = useState('');

    //Context con las operaciones de firebase
    const { firebase } = useContext(FirebaseContext);

    //Hook para redireccionar
    const navigate = useNavigate();

    //validacion y leer los datos del formulario
    const formik = useFormik({ 
        initialValues: {
            nombre: 'comida',
            precio: '12',
            categoria: 'comida',
            imagen: '',
            descripcion: 'comida comida comida',
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                        .min(3, 'Los Platillos deben tener al menos 3 caracteres')
                        .required('El Nombrer del platillo es obligatorio'),
            precio: Yup.number()
                        .min(1, 'Debes agregar un numero')
                        .required('El Precio es obligatorio'),
            categoria: Yup.string()
                        .required('La categoría es obligatoria'),
            descripcion: Yup.string()
                        .min(10, "La descripcion debe ser mas larga")
                        .required('La descripcion es obligatoria'),

        }), 
        onSubmit: platillo => {
            try {
                setTimeout(function() {
                    handleUpload(platillo);
                    
                    // if(subiendo == false) {
                    //     platillo.imagen = "hola mundo";

                    //     console.log(platillo);
                    //     platillo.existencia = true;
                    //     firebase.db.collection('productos').add(platillo);
                    // }
                }, 300);

               
                

                //Redireccionar
                // navigate('/menu')
            } catch (error) {
                console.log(error);
            }
        }
    });

    const [image, setImage] = useState({});

    const handleChange = e => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
          console.log('target: ',e.target.files[0]);
        }
      };

      const handleUpload = (platillo) => {
        setSubiendo(true);
        const uploadTask = firebase.storage.ref(`productos/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgreso(progress);
            console.log('progress: ', progress);
            },
            error => {
            console.log(error);
            },
            () => {
            firebase.storage
                .ref("productos")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                setUrlImagen(url);
                console.log('url:', url);
                platillo.imagen = url;

                setTimeout(()=> {
                    console.log(platillo);
                    platillo.existencia = true;
                    firebase.db.collection('productos').add(platillo);
                    console.log('urlImagen: ', urlImagen);
                    setSubiendo(false);
                }, 300);
                });
            }
        );
      };

    return ( 
        <>
            <h1 className="text-3xl font-light md-4">Nuevo Platillo</h1>
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="mb-4">
                            <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                            <input type="text" 
                                    name="nombre"
                                    id="nombre" 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Nombrer Platillo"
                                    value={formik.values.nombre}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.nombre && formik.errors.nombre ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error</p>
                                <p>{formik.errors.nombre}</p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label htmlFor="precio" className="block text-gray-700 text-sm font-bold mb-2">Precio</label>
                            <input type="number" 
                                    id="precio" 
                                    name="precio"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="$20"
                                    min="0"
                                    value={formik.values.precio}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                            />
                        </div>

                        { formik.touched.precio && formik.errors.precio ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error</p>
                                <p>{formik.errors.precio}</p>
                            </div>
                        ) : null }


                        <div className="mb-4">
                            <label htmlFor="categoria" className="block text-gray-700 text-sm font-bold mb-2">Categoria</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="categoria"
                                name="categoria"
                                value={formik.values.categoria}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                            >
                                <option value="">-- Seleccione --</option>
                                <option value="desayuno">Desayuno</option>
                                <option value="comida">Comida</option>
                                <option value="cena">Cena</option>
                                <option value="bebida">Bebida</option>
                                <option value="postre">Postre</option>
                                <option value="ensalada">Ensalada</option>
                            </select>
                        </div>

                        { formik.touched.categoria && formik.errors.categoria ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error</p>
                                <p>{formik.errors.categoria}</p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label htmlFor="imagen" className="block text-gray-700 text-sm font-bold mb-2">Imagen</label>
                            <input type="file" 
                                name="imagen" 
                                onChange={handleChange} />

                            {/* <FileUploader
                                accept="imag/*"
                                id="imagen"
                                name="imagen"
                                randomizeFilename
                                storageRef={firebase.storage.ref('productos')}
                                onUploadStart={handleUploadStart}
                                onUploadError={handleUploadError}
                                onUploadSuccess={handleUploadSuccess}
                                onProgress={handleProgress}
                            /> */}
                        </div>

                        { subiendo && (
                            <div className="h-12 relative w-full border">
                                <div className="bg-green-500 absolute left-0 top-0 text-white px-2 text-sm h-12 flex items-center" style={{width: `${progreso}%`}}>
                                    {progreso} %
                                </div>
                            </div>   
                        )}

                        {urlImagen && (
                            <p className="bg-green-500 text-white p-3 text-center my-5">La imagen se subió correctamente</p>
                        )}

                        <div className="mb-4">
                            <label htmlFor="descripcion" className="block text-gray-700 text-sm font-bold mb-2">Descripcion</label>
                            <textarea 
                                type="text"  
                                name="descripcion"
                                id="descripcion" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                                placeholder="Descripcion del platillo"
                                value={formik.values.descripcion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            ></textarea>
                        </div>
                        
                        { formik.touched.descripcion && formik.errors.descripcion ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error</p>
                                <p>{formik.errors.descripcion}</p>
                            </div>
                        ) : null }

                        <input 
                            type="submit" 
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"   
                            value="Agrergar platillo"
                        />
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default NuevoPlatillo;