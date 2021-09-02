import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/itemList/itemList'
import { getCategoryProductsById } from '../../utils'

function ItemListContainer(){
    const [products, setProduct] = useState([])
    
    const {categoryId} = useParams();

    useEffect(()=>{
        const itemsFiltrados = getCategoryProductsById(categoryId)
        setProduct(itemsFiltrados)
    },[])

    return(
        <div className='listItemcContainer'>
            <ItemList items={products}/>
        </div>
        
    );
    
    }
    export default ItemListContainer;
    
