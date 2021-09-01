// import React from 'react'
import Item from './Item';
import Counter from './itemCount/counter'


const ItemList = ({items}) => {

return(
    <div className='listItem'>
        {items.map((item) => <Item key={item.id} {...item}/>)}
    </div>
    
);

}
export default ItemList;
