import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/itemDetail'

const ItemDetailContainer = () => {
    const [info, setInfo] = useState([])
    const { id } = useParams();
    const urlData = "https://pokeapi.co/api/v2/pokemon/"

    useEffect(() => {
        console.log(info)

        fetch(`${urlData}${id}`)
            .then((response) => response.json())
            .then(data => {
                let ability = data.abilities
                setInfo(ability)
            })
            .catch((error) => console.log("error", error));

    }, []);

    return (
        <div>
            <ItemDetail ability={info} />
        </div>

    );

}
export default ItemDetailContainer;

