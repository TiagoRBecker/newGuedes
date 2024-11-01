import { links } from "@/utils/Mock/menu";
import Link from "next/link";
import { MenuModal } from "./Menu";

const Menu = () => {
  return (
    <nav className="w-full h-[104px] flex items-center justify-around">
      <div className="">
        <img src="/Assets/Logo/logo.svg" alt="" />
      </div>
      <div className="flex items-center gap-4">
      <li className="list-none text-[#336DFF] border-r border-[#336DFF]   px-2"><Link href={"#"}>Início</Link></li>
        {links.map((links, index: number) => (
         
          <li key={index} className=" list-none">
            <Link href={"#"} className="">{links.name}</Link>
          </li>
        ))}
      </div>
      <div className=" flex items-center gap-5">
      <img src="/Assets/Icons/cart.svg" alt="" />
       <MenuModal/>
      </div>
    </nav>
  );
};

export default Menu;
