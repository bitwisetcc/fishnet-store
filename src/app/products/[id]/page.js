"use client";

import Image from "next/image";
import { getProductById, listAllProducts } from "../../lib/query";
import { useParams } from "next/navigation";

export default () => {
  const { id } = useParams();
  const prod = getProductById(id);

  const prods = listAllProducts();
  return prod === undefined ? (
    <h1>Produto não encontrado</h1>
  ) : (
    <section className="flex gap-16 p-8 pr-12">
      {/* <ProductDetails />
      <ProductDescription /> */}
      <h1>{ prod.name }</h1>
      <Image src={prod.img} alt={prod.name} width={500} height={500} />
    </section>
  );
}