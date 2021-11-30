import React from 'react';
import { useRouter } from 'next/router';

function SingleProduct() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>
        This page shows the products of the category:{' '}
        {router.query.productCategory}...
      </h1>
    </div>
  );
}

export default SingleProduct;
