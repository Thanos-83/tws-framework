import React from 'react';
import { useRouter } from 'next/router';

function CategoryProducts() {
  // const router = useRouter();
  // console.log(router.query.productCategory);
  return (
    <div>
      <h1>This page shows the products of the category: </h1>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log(context.params);
  return {
    props: {},
  };
}

export async function getStaticPaths(context) {
  return {
    paths: [
      {
        params: { productCategory: 'cloths' },
      },
    ],
    fallback: true,
  };
}

export default CategoryProducts;
