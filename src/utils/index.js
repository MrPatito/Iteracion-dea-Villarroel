import { items } from "../mock/productos"


export const getCategoryProductsById = (id) => {
    return items.filter( item => item.potencia === id )
}