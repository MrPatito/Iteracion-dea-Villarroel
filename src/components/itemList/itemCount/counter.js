// import React from 'react'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Counter = ({onAdd}) => {
    const [contador, setContador] = useState(1);
    const [stock, setStock] = useState(7)
    const [chart, setChart] = useState({
        cant: "",

    })
    const { cant } = chart

    
    function decr() {
        if (contador > 0) {
            setContador(contador - 1);
            setStock(stock + 1)
            console.log(stock)
        }
        else {
            console.log('ahre')
        }
    }
    function incr() {
        if (stock > 0) {
            setContador(contador + 1);
            setStock(stock - 1)
            console.log(stock)
        }
        else {
            console.log('ahre lak')
        }
    }

    const handlechange = (event) => {
        let eventValue = parseInt(event.target.value)
        console.log(`valor`, eventValue)
        setChart({ ...chart, [event.target.name]: event.target.value });
    }

    return (
        <div className='producto'>
            <form >
                <label>
                    <input name='cant' onChange={handlechange} type='string' value={cant}></input>
                </label>
            </form>

            <button onClick={incr} className='botonContador' id='incr'>+</button>
            <button onClick={decr} className='botonContador' id='decr'>-</button>
            <button onClick={() => onAdd(contador)}> Agregar al carrito </button>
            
        </div>

    );

}
export default Counter;
