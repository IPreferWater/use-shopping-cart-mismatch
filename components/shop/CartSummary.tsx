import React, { useState, useEffect, Component } from 'react';

import { useShoppingCart } from 'use-shopping-cart';
import { fetchPostJSON } from '../../utils/api-helpers';

const CartSummary = () => {
  const [loading, setLoading] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);

  const {
    formattedTotalPrice,
    cartCount,
    clearCart,
    cartDetails,
    redirectToCheckout,
  } = useShoppingCart();

  useEffect(() => setCartEmpty(!cartCount), [cartCount]);

  const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetchPostJSON(
      '/api/checkout_sessions/cart',
      cartDetails
    );

    if (response.statusCode === 500) {
      console.error(response);
      return;
    }

    redirectToCheckout({ sessionId: response.id });
  };

  console.log("from cart summary");
  console.log(`totalPrice ${formattedTotalPrice} `)
  console.log(`cartCount ${cartCount} `)
  console.log(`cartDetails`)
  console.log(cartDetails)
  console.log("*****");
  return (
    
    <form onSubmit={handleCheckout}>
      <div className="bg-red-100 flex flex-row relative group">
        <div className="absolute -bottom-6 left-0 invisible group-hover:visible">
        
        </div>
        <button type="submit"
          disabled={cartEmpty || loading}>
          <img className="w-10" src="icon_basket.svg" />
        </button>
        <button
        className="cart-style-background"
        type="button"
        onClick={clearCart}
      >
        Clear Cart
      </button>
        {/* This is where we'll render our cart */}
        <p suppressHydrationWarning>
          {cartCount} article [ {formattedTotalPrice} ]
        </p>
      </div>
    </form>
  );
};

export default CartSummary;
