"use client"
import { links } from "@/utils/Mock/menu";
import Link from "next/link";
import { MenuModal } from "./Menu";
import { useCartStore } from "@/store/cartStore";
import Cart from "../Cart";
import { useState } from "react";

const Menu = () => {
  const[ showMenu,setShowMenu] = useState(false)
  const cart = useCartStore((state) => state.cart);

  return (
    <nav className="w-full h-[104px] flex items-center justify-around bg-[#EBEBEB] ">
      <div className="">
      <Link href={"/"}>
      <img src="/Assets/Logo/logo.svg" alt="" />
      </Link>
    
      </div>
      <div className="flex items-center gap-4">
      <li className="list-none text-[#336DFF] border-r border-[#336DFF]   px-2"><Link href={"/"}>Início</Link></li>
        {links.map((links, index: number) => (
         
          <li key={index} className=" list-none">
            <Link href={`/categories/${links.id}`} className="">{links.name}</Link>
          </li>
        ))}
        <li className=" list-none"><Link href={"/products"}>Produtos</Link></li>
      </div>
      <div className=" flex items-center gap-5">
        <div className="relative cursor-pointer " onClick={()=>setShowMenu(true)}>
        <img src="/Assets/Icons/cart.svg" alt="" className="w-10 h-10" />
        <p className="w-6 h-6 bg-[#31AF97] rounded-full text-white flex items-center justify-center top-0 right-0 absolute">
        {cart.length}</p>
        </div>
   
       <MenuModal/>
      </div>
      {
  (showMenu ) && (
    <Cart handleCloseMenu={() => setShowMenu(false)} />
  )
}
      
    </nav>
  );
};

export default Menu;
