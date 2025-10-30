import React from 'react'
import Link from "next/link";
import { getproducts } from '@/library/api-call';
import ProductCard from '@/components/website/ProductCard';
export default async function page({searchParams}) {
    const color = searchParams.color ?? null ;
    const brand = searchParams.brand ?? null ;
    const min = searchParams.min ?? null ;
    const max = searchParams.max ?? null ;


  const products = await getproducts(null,null,color,brand ,min , max);
  const data = products.data || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {data.map(product => (
    <ProductCard key={product._id} product={product} />
  ))}
</div>

  )
}
