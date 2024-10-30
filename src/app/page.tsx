import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Products from "@/components/Products";
import { products } from "@/utils/Mock/menu";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <section className="container mx-auto h-full flex flex-col py-36 items-center justify-center">
        <h1 className="uppercase text-2xl py-10 text-left w-full">
          Documentos em Destaque
        </h1>
        <div className="w-full grid grid-cols-3 gap-8">
          {products.map((product, index: number) => (
            <Products
              key={index}
              title={product.title}
              category={product.category}
            />
          ))}
        </div>
      </section>
      <section className="w-full h-[431px] bg-[#336DFF]">
        <div className="w-full h-full grid grid-cols-2">
          <div className=" ">
            <img
              src="/Assets/Banner/banner1.svg"
              alt=""
              className="w-full h-[550px] -mt-[120px]"
            />
          </div>
          <div className="w-full flex items-start flex-col gap-4">
            <h2 className="text-2xl text-white pt-[118px]">Organize e otimize o atendimento
          </h2>
          <h2 className="text-2xl text-white">  com nossas fichas de anamnese</h2>
            <p className="text-white">Facilite o diagnóstico e o acompanhamento dos
            seus pacientes de forma prática e eficiente.</p>
            <button className=" w-[199px] h-12 bg-white text-[#336DFF] rounded-full text-sm">Veja Nossas Fichas</button>
          </div>
        </div>
      </section>
      <section className="container mx-auto h-full flex flex-col py-36 items-center justify-center">
        <h1 className="uppercase text-2xl py-10 text-left w-full">
          Novas Atualizações
        </h1>
        <div className="w-full grid grid-cols-3 gap-8">
          {products.map((product, index: number) => (
            <Products
              key={index}
              title={product.title}
              category={product.category}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
