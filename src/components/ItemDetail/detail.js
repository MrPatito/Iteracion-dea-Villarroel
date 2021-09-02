import React, { useState } from 'react';
import Counter from '../itemList/itemCount/counter';

const Detail = ({ability}) => {
    // seguir con la logica de counter con {props.name}

    const [cantidad, setCantidad] = useState(0);

    const onAdd = (cantidadAComprar) => {
        setCantidad(cantidadAComprar)
    }
    
    return (
        <div>
            <p>{ability.name}</p>
            <Counter onAdd={onAdd} />
            {cantidad > 0  && <button> Terminar compra</button> }
        </div>

    );
}
export default Detail;