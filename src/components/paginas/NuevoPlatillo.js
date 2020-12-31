import React from 'react';
import { useFormik } from  'formik';

const NuevoPlatillo = () => {
    //validacion y leer los datos del formulario
    const formik = useFormik({
        initialValues: {
            nombre: 'Freilin JOSE',
            precio: '',
            categoria: '',
            descripcion: '',
        },
        onSubmit: datos => {
            console.log(datos);
        }
    });

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
                            />
                        </div>

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
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="precio" className="block text-gray-700 text-sm font-bold mb-2">Categoria</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="categoria"
                                name="categoria"
                                value={formik.values.categoria}
                                    onChange={formik.handleChange}
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

                        <div className="mb-4">
                            <label htmlFor="imagen" className="block text-gray-700 text-sm font-bold mb-2">Imagen</label>
                            <input type="file" 
                                    id="imagen" 
                                    name="imagen"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={formik.values.imagen}
                                    onChange={formik.handleChange}
                            />
                        </div>

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
                            ></textarea>
                        </div>

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