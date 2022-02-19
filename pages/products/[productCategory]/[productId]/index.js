import React from 'react';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import client from '../../../../lib/client';

function SingleProduct({ singleProduct }) {
  const router = useRouter();
  // console.log(`Inside productCategory/productID page ${router.query}`);

  // when using the fallback:true property
  if (!singleProduct) {
    return <p className='font-semibold text-black'>Loading....</p>;
  }
  return (
    <div>
      <h1>This is the single product page...</h1>
      <h2>{singleProduct.title}</h2>
      <p className='font-semiboldd'>
        Price: <strong>{singleProduct.price}</strong>
      </p>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        productCategories {
          nodes {
            slug
            products {
              nodes {
                id
                slug
              }
            }
          }
        }
      }
    `,
  });

  // console.log(data.productCategories.nodes);
  const paths = data.productCategories.nodes.map(
    (category) => {
      // console.log(category.products.nodes[0]?.id);
      console.log(category.slug);
    } // {
    //   {
    //     productCategory: category.slug;
    //     productId: category.products.nodes[0]?.id;
    //   }
    // }
  );

  // console.log(paths);
  return {
    paths: [
      {
        params: {
          productCategory: 'mens',
          productId: 'men1',
        },
      },
      {
        params: {
          productCategory: 'women',
          productId: 'women1',
        },
      },
      {
        params: {
          productCategory: 'kids',
          productId: 'kids1',
        },
      },
    ],
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  return {
    props: {
      singleProduct: {
        title: 'Product 1',
        price: 199.99,
      },
    },
  };
}

export default SingleProduct;
