"use client";
import BannerDescript from "@/components/BannerDescript";
import DocsEmphasis from "@/components/Docs";
import Products from "@/components/Products";
import { useCartStore } from "@/store/cartStore";
import { links } from "@/utils/Mock/menu";
import React from "react";
import { ToastContainer } from "react-toastify";

const CategoriesPageID = ({ params }: any) => {
  const addTocart = useCartStore((state) => state.addToCart);
  const teste = React.use(params);

  //@ts-ignore
  const { id } = teste;
  const findCategory = links.filter(
    (link: { id: number }) => link.id === Number(id)
  );
  
  return (
    <section className="w-full flex items-center justify-center  flex-col ">
        <div className="w-full  bg-[#EBEBEB] h-[200px]"></div>
        <div className="-mt-24 w-full">
      <BannerDescript
        title={findCategory[0].name}
        descript="A ficha de anamnese é um documento essencial em qualquer atendimento clínico, sendo a base para o diagnóstico e acompanhamento de pacientes. Nela, o profissional de saúde coleta uma série de informações importantes sobre o histórico médico do paciente, estilo de vida, hábitos diários, além de queixas atuais."
      />
      </div>
    
      <div className="container mx-auto grid grid-cols-3 xl:grid-cols-4 gap-8 py-24">
        {findCategory[0].products.map((product, index: number) => (
          <Products
            key={index}
            title={product.title}
            category={product.category}
            id={product.id}
            addCart={() => addTocart(product)}
          />
        ))}
      </div>
      <ToastContainer/>
    </section>
  );
};

export default CategoriesPageID;

