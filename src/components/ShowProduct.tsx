import React from 'react'
import ProductCard from './ProductCard'
import { productsAdapter } from '@/utils/ProductAdapter'
import products from '@/example/products.json'
function ShowProduct () {
  return (
        <div>
             <div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
            {
            productsAdapter(products)
              .map((product, index) => {
                if (index === 0) {
                  return (<div className="row-span-2  " key={product.id}>
                    <ProductCard imgSrc={product.imgUrl} title={product.name} description={product.description} price={product.price} id ={product.id} />
                    </div>)
                }
                return (
                    <div key={product.id} >
                        <ProductCard imgSrc={product.imgUrl} title={product.name} description={product.description} price={product.price} id ={product.id}>

                    </ProductCard>
                    </div>

                )
              })}

            </div>
        </div>
  )
}

export default ShowProduct
