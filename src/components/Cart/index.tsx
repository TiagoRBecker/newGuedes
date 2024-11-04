import { useCartStore } from "@/store/cartStore";
export type Props = {

    handleCloseMenu: () => void
}
const Cart = ({ handleCloseMenu }: Props) => {
    const cart = useCartStore((state) => state.cart);
    const remove = useCartStore((state) => state.removeFromCart);
    const total = cart.reduce((acc:number, currentValue:{price:number})=> acc + currentValue.price,0)
    return (

        <div className="w-[350px] h-[95vh] fixed top-0 right-0 bg-white p-8">
            <div className="w-full h-[10vh] flex items-center gap-3 justify-around">
                <span className="font-bold text-black text-lg">Carrinho</span>
                <button  onClick={handleCloseMenu}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                </button>
            </div>

            {/* Área de scroll do carrinho */}
            <div className="w-full h-[70vh] overflow-auto flex flex-col gap-4">
                {cart && cart.length > 0 ? (
                    <div>
                        {cart.map((item, index) => (
                            <div
                                className="w-full h-[55px] flex items-center gap-1 justify-around shadow-lg rounded-md flex-shrink-0 flex-grow-0"
                                key={index}
                            >
                                <span className="text-sm">{item.title}</span>
                                <span className="text-[#336DFF] text-xs">
                                    {item.price.toLocaleString("pt-br", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </span>
                                <p className="cursor-pointer" onClick={() => remove(item.id)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-4 w-4 text-red-600"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-400">
                        Nenhum item adicionado
                    </p>
                )}
            </div>
            <div className="w-full flex items-center justify-between">
                <span className=" font-bold">Total</span>
                <p className="text-[#336DFF] ">{total.toLocaleString("pt-br",{style:"currency", currency:"BRL"})}</p>
            </div>
            <div className="w-full flex items-center justify-between gap-2 py-3">
                <button className="w-[50%] py-4 border border-[#336DFF] rounded-full text-[10px]" onClick={handleCloseMenu}>Adicionar Mais Produtos</button>
                <button className="w-[50%] py-4 bg-[#336DFF] text-white rounded-full text-[10px]">Finalizar Compra</button>
              
            </div>
           
        </div>


    );
};

export default Cart;
