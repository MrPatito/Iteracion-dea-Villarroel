import React from 'react'
import Ditail from './detail'

const ItemDetail = ({ ability }) => {
        return (
                <div className="listItemcContainer">
                        {ability.map((abilidad) => <Ditail key={abilidad} {...abilidad} />)}
                </div>
        );

}
export default ItemDetail;

