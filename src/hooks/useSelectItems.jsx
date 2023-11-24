import React, { useState, useEffect } from 'react';

const useSelectItems = (label, opciones) => {

  const [state, setState] = useState('');
  const [categoriasUnicas, setCategoriasUnicas] = useState([]);

  useEffect(() => {
    
    const categoriasUnicas = [...new Set(opciones.map(item => item.categoria))];
    setCategoriasUnicas(categoriasUnicas);

    return () => {
      setCategoriasUnicas([]);
    };
  }, [opciones]);

  const SelectItems = () => (
    <>
      <label className=' font-bold'>{label}</label>
      <select 
        className=' p-1'
        value={state} 
        onChange={e => setState(e.target.value)}>

        <option value="">-- Seleccione --</option>
        {categoriasUnicas.map(opcion => (
          <option 
            key={opcion} 
            value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
    </>
  );

  return [state, SelectItems];
};

export default useSelectItems;
