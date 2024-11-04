"use client"
import { products } from "@/utils/Mock/menu";
import Products from "../Products";
import { useCartStore } from "@/store/cartStore";
import { ToastContainer } from "react-toastify";


const DocsEmphasis = () => {
    const addToCart = useCartStore((state) => state.addToCart);
   
    return ( <section className="container mx-auto h-full flex flex-col py-36 items-center justify-center">
        <h1 className="uppercase text-2xl py-10 text-left w-full">
          Documentos em Destaque
        </h1>
        <div className="w-full grid grid-cols-3 gap-8">
        {products.map((product, index: number) => (
            <Products
              key={index}
              title={product.title}
              category={product.category}
              id={product.id}
              addCart={()=>addToCart(product)}
            />
          ))}
        </div>
        <ToastContainer/>
        </section> );
}
 
export default DocsEmphasis;