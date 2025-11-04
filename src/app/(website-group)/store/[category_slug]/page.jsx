// import React from 'react'
// import Link from "next/link";
// import { getproducts } from '@/library/api-call';
// import ProductCard from '@/components/website/ProductCard';
// export default async function page({params,searchParams}) {
//           const color = searchParams.color || null ;
//           const brand = searchParams.brand || null ;
//   const products = await getproducts(null,params?.category_slug,color,brand);
//   const data = products.data || [];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//   {data.map(product => (
//     <ProductCard key={product._id} product={product} />
//   ))}
// </div>

//   )
// }


import React from 'react'
import Link from "next/link";
import { getproducts } from '@/library/api-call';
import ProductCard from '@/components/website/ProductCard';

export default async function page({ params, searchParams }) {
  const color = searchParams.color || null;
  const brand = searchParams.brand || null;
  const products = await getproducts(null, params?.category_slug, color, brand);
  const data = products?.data || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {data.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No products found.</p>
      ) : (
        <div
          className="
            grid 
            grid-cols-1                /* Mobile: 1 per row */
            sm:grid-cols-2             /* Small tablets: 2 per row */
            md:grid-cols-3             /* Tablets: 3 per row */
            xl:grid-cols-4             /* Large screens: 4 per row */
            gap-4 sm:gap-6 md:gap-8
          "
        >
          {data.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

