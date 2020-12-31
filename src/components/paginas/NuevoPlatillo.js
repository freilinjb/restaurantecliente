import React from 'react';

const NuevoPlatillo = () => {
    return ( 
        <>
            <h1 className="text-3xl font-light md-4">Nuevo Platillo</h1>
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                            <input type="text" 
                                    name="nombre"
                                    id="nombre" 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Nombrer Platillo"
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
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="precio" className="block text-gray-700 text-sm font-bold mb-2">Categoria</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="categoria"
                                name="categoria"
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
                                    id="precio" 
                                    name="precio"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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