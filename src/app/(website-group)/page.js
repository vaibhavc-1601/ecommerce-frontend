// import Card from '@/components/website/ProductCard'
// import { getproducts } from '@/library/api-call';
// import React from 'react'
// import ProductCard from '@/components/website/ProductCard';

// export default async function page() {
//    const products = await getproducts(null);
//   const data = products.data || [];
//   return (
//     <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-4'>
//         {data.map(product => (
//            <ProductCard key={product._id} product={product} />
//          ))}
//     </div>
//   )
// }


import { getproducts } from '@/library/api-call';
import ProductCard from '@/components/website/ProductCard';
import React from 'react';

export default async function Page() {
  const products = await getproducts(null);
  const data = products.data || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid 
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    gap-6">
      {data.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
