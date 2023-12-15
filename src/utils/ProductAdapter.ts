import { ApiResponse } from '../types'
export function productsAdapter (productosJson : ApiResponse) {
  return productosJson.productos.map(producto => {
    return {
      id: producto.id,
      name: producto.nombre,
      description: producto.descripcion,
      price: producto.precio,
      imgUrl: producto.imagen,
      category: producto.categoria,
      brand: producto.marca
    }
  })
}
