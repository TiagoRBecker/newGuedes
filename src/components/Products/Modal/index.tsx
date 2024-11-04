"use client";
import { useCartStore } from "@/store/cartStore";
import { products } from "@/utils/Mock/menu";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
type Modal = {
    id:number
    isOpen: boolean;
    onClose: () => void;
}
const ModalProduct = ({isOpen,onClose,id}:Modal) => {

  const filter = products.filter((product)=>product.id === id)
  
  const  addTocart = useCartStore((state) => state.addToCart);
   const handleToCartAndCloseModal =(product:any)=>{
      addTocart(product)
      onClose()
   }
  return (

    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader > <img src="/Assets/Logo/logo.svg" alt="logo"/></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="grid grid-cols-2 w-full h-full gap-4">
              <div>
                <img src="/Assets/Banner/banner.svg" alt=""  className="w-full h-full"/>
              </div>
              <div className="w-full h-full flex flex-col gap-5">
              <h1 className="text-[#336DFF] uppercase font-bold">{filter[0]?.title}</h1>
                <span className="font-bold">{filter[0]?.price.toLocaleString("pt-br", {style:"currency", currency:"BRL"})}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis! Est eos iure tenetur iste magni quaerat aliquam hic! Quasi deleniti odio consequuntur enim minus tempora recusandae soluta blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis! Est eos iure tenetur iste magni quaerat aliquam hic! Quasi deleniti odio consequuntur enim minus tempora recusandae soluta blanditiis non.</p>
                <div className="flex items-center gap-2">
                <button  className="bg-[#336DFF] text-white py-2 px-4 rounded-full text-sm" onClick={()=>handleToCartAndCloseModal(filter[0])}>Adicionar o Carrinho</button>
        <button className="flex items-center gap-2 border border-[#31AF97]  py-2 px-4 rounded-full text-sm">
          <img src="/Assets/Icons/fast.svg" />
          Comprar Agora
        </button>
            </div>
              </div>
            </div>
           
          </ModalBody>

        </ModalContent>
      </Modal>
      
    </>
  );
};

export default ModalProduct;
