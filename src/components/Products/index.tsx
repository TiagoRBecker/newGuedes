export type ProductsType = {
  
  category: string;
  title: string;
  addCart?: () => void | undefined;
};
const Products = ({ category, title, addCart }: ProductsType) => {
  return (
    
    <div className="w-full h-full flex flex-col gap-4 bg-[#EFEFEF] rounded-[16px] p-9 bg-opacity-50">
      <h1 className="text-[#336DFF]">{category}</h1>
      <p>{title}</p>
      <div className="flex items-center gap-4">
        <button onClick={addCart} className="bg-[#336DFF] text-white py-2 px-4 rounded-full text-sm">Adicionar o Carrinho</button>
        <button className="flex items-center gap-2 border border-[#31AF97]  py-2 px-4 rounded-full text-sm">
          <img src="/Assets/Icons/fast.svg" />
          Visualização Rápida
        </button>
      </div>
    </div>
  );
};

export default Products;
