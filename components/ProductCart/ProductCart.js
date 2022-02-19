import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

function ProductCart({ product }) {
  // const router = useRouter();
  // console.log(router);
  // const handleClick = () => {
  //   router.push(`/products/${product.id}`);
  // };
  return (
    <React.Fragment>
      <div className='productCart_link mb-4 rounded-lg overflow-hidden '>
        <Link
          href={`/products/${product.productCategories.nodes[0].slug}/${product.id}`}>
          <a>
            <div className='productCart_thumbnail'>
              <Image
                src={product.featuredImage?.node.sourceUrl}
                alt='product cart image'
                width='250'
                height='300'
                layout='responsive'
                className='object-contain'
              />
            </div>
            <p className='productCart_title mb-2 text-gray-600 font-semibold'>
              {product.name}
            </p>
          </a>
        </Link>
        <div className='productCart_actions'>
          <span className={`onSale ${product.onSale ? 'active' : ''}`}>
            Sale!
          </span>
        </div>
      </div>
      <div className='productCart_body mt-auto'>
        <div className='productCart_sku'>
          <p>Κωδικός 123141</p>
        </div>
        <div className='productCart_info flex justify-between'>
          <div className='productCart_info_buttons'>
            <span>Compare</span>
            <span>Wishlist</span>
          </div>

          <span className='productCart_price text-xl text-neutral-700 font-bold'>
            {product.price}
          </span>
        </div>
        <Link
          href={`/products/${product.productCategories.nodes[0].slug}/${product.id}`}
          className='productCart_info_btn block px-3 py-4 bg-orange-300 text-white text-xl font-semibold w-full mt-4'>
          <a>More info</a>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default ProductCart;
