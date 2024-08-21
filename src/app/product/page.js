import React from "react";

async function Product() {
  const response = await fetch(
    `https://dev-api.pinecart.com/api/storefront/products/tide-plus-double-power-detergent-washing-powder-jasmine---rose-6kg---2kg-free`,
    {
      headers: {
        "store-id": "669bc3b1f3861d3003cf2b17",
      },
    }
  );

  const product = await response.json();

  return (
    <div className=" grid  place-items-center">
      <h1>Name: {product?.data?.name}</h1>
      <h1>Price: {product?.data?.price}</h1>
      <h1>Discounted Price: {product?.data?.discount_price}</h1>
    </div>
  );
}

export default Product;
