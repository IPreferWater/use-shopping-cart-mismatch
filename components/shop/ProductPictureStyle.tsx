import * as React from 'react'
import { useShoppingCart } from 'use-shopping-cart';
import { Product } from '../../interfaces'

type Props = {
  product: Product
}

const ProductPictureStyle = ({ product }: Props) => {

  function formatPrice(x: number) {
   return x/100
  }

  function debugAdd(p: Product) {
    console.log(`add product with sku ${p.sku} `)
    addItem(product)
  }
  const { addItem} = useShoppingCart();

  return (
    <div className="shadow-2xl  p-4 rounded transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-300">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col w-full font-marker">
          <div className="text-cel-marker text-xl">
          <div className="flex flex-wrap items-end">
            <div className="ml-2 mt-2">{product.name} {formatPrice(product.price)}€</div>
            <div className="text-sm ml-1">/h</div>
            </div>              
          </div>

          <div className="text-cel-orange text-center text-xl mr-4">
            + infos
          </div>

        </div>

        <button
        onClick={() => debugAdd(product)} >
          <img className="w-20" src="icon_basket.svg" alt={product.name}  />
          </button>
      </div>
    </div>
  );
};

export default ProductPictureStyle
