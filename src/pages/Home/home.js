import React from 'react'
import { useHistory } from 'react-router-dom'
import ItemListContainer from '../ItemsListContainer/itemListContainer';

const Home = () => {
    const history = useHistory();

    const id = 1000
    const pagar = () => history.push(`/category/${id}`);

    return (
        <div className='listItemcContainer'>
            <h1>Hola. Soy un HOME</h1>
            <button onClick={pagar}>pagar</button>
            <ItemListContainer />
        </div>
    )
}

export default Home