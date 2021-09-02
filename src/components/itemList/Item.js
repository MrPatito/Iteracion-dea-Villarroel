import { NavLink } from "react-router-dom"


function Item(props) {
    return (
        <div className='producto'>
        <img className='fotos' src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=707&q=80' alt='Producto' />
        <p className='heading'>{props.nombre}</p>
        
        <NavLink to={`/item/${props.id}`}> Mas info </NavLink>
    </div>
    )
}

export default Item
