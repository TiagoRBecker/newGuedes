"use client";

import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";
export const MenuModal = () => {
  const [switchMenu, setSwitcthMenu] = useState(true);
  return (
    <Menu >
      <MenuButton>
      <img src="/Assets/Icons/login.svg" alt="" />
      </MenuButton>
      <MenuList className="mt-7 w-[369px] h-[454px] bg-[#F8F8F8] p-4 flex flex-col  jus">
        <Box
          display="flex"
          w="full"
          gap={4}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            textStyle="1xl"
            onClick={() => setSwitcthMenu(true)}
            className={switchMenu ? "text-black" : "text-gray-300"}
          >
            ENTRAR
          </Text>
          <Text
            textStyle="1xl"
            onClick={() => setSwitcthMenu(false)}
            className={switchMenu ? "text-gray-300" : "text-black"}
          >
            CADASTRAR
          </Text>
        </Box>
       
        {switchMenu ? (
          <>
            <form className="w-full flex flex-col gap-6 mt-6">
              <Input
                placeholder="Email"
                type="email"
                className="outline-none  rounded-full pl-4  h-[40px]"
              />
              <Input
                placeholder="Senha"
                type="email"
                className="outline-none  rounded-full pl-4  h-[40px]"
              />
              <div className="w-full flex items-center justify-end">
                <Button
                  w={75}
                  h={35}
                  rounded={"full"}
                  bg={"#336DFF"}
                  color={"white"}
                  fontSize={"sm"}
                >
                  Entrar
                </Button>
              </div>
            </form>
            <Text textStyle="sm" pl={4}>
              Conecte-se com uma conta
            </Text>
            <MenuItem value="new-txt">
              <img
                src="/Assets/Icons/fb.svg"
                alt=""
                className="w-full h-[40px]"
              />
            </MenuItem>
            <MenuItem value="new-file">
              <img
                src="/Assets/Icons/gl.svg"
                alt=""
                className="w-full h-[40px]"
              />
            </MenuItem>
            <MenuItem value="new-win">
              <img
                src="/Assets/Icons/ap.svg"
                alt=""
                className="w-full h-[40px]"
              />
            </MenuItem>
          </>
        ) : (
          <>
            <form className="w-full flex flex-col gap-6 mt-6">
              <Input
                placeholder="Nome Completo"
                type="text"
                className="outline-none bg-[#EBEBEB] rounded-full pl-4  h-[40px]"
              />
            
              <div className="flex items-center gap-2">
              <Input
                placeholder="Telefone"
                type="text"
                className="outline-none bg-[#EBEBEB] rounded-full pl-4  h-[40px]"
              />
               <Input
                placeholder="Profissão"
                type="text"
                className="outline-none bg-[#EBEBEB] rounded-full pl-4  h-[40px]"
              />
              </div>
              <Input
                placeholder="Email"
                type="email"
                className="outline-none bg-[#EBEBEB] rounded-full pl-4  h-[40px]"
              />
              <Input
                placeholder="Senha"
                type="password"
                className="outline-none bg-[#EBEBEB] rounded-full pl-4  h-[40px]"
              />
              <Input
                placeholder="Confirmar Senha"
                type="password"
                className="outline-none bg-[#EBEBEB] rounded-full pl-4  h-[40px]"
              />
              <div className="w-full flex items-center justify-end">
                <Button
                  w={75}
                  h={35}
                  rounded={"full"}
                  bg={"#336DFF"}
                  color={"white"}
                  fontSize={"sm"}
                >
                  Criar
                </Button>
              </div>
            </form>
           
          </>
        )}
      </MenuList>
    </Menu>
  );
};
/*
  <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
         
        </Button>
      </MenuTrigger>
      <MenuContent className="mt-7 w-[369px] h-[454px] bg-[#F8F8F8] p-4 flex flex-col items-start justify-center">
     
        {switchMenu ? (
          <>
            <form className="w-full flex flex-col gap-6 mt-6">
              <Input
                placeholder="Email"
                type="email"
                className="outline-none bg-[#EBEBEB] rounded-full pl-4  h-[40px]"
              />
              <Input
                placeholder="Senha"
                type="email"
                className="outline-none bg-[#EBEBEB] rounded-full pl-4  h-[40px]"
              />
              <div className="w-full flex items-center justify-end">
                <Button
                  w={75}
                  h={35}
                  rounded={"full"}
                  bg={"#336DFF"}
                  color={"white"}
                  fontSize={"sm"}
                >
                  Entrar
                </Button>
              </div>
            </form>
            <Text textStyle="sm" pl={4}>
              Conecte-se com uma conta
            </Text>
            <MenuItem value="new-txt">
              <img
                src="/Assets/Icons/fb.svg"
                alt=""
                className="w-full h-[40px]"
              />
            </MenuItem>
            <MenuItem value="new-file">
              <img
                src="/Assets/Icons/gl.svg"
                alt=""
                className="w-full h-[40px]"
              />
            </MenuItem>
            <MenuItem value="new-win">
              <img
                src="/Assets/Icons/ap.svg"
                alt=""
                className="w-full h-[40px]"
              />
            </MenuItem>
          </>
        ) : (
          <>
            <form className="w-full flex flex-col gap-6 mt-6">
              <Input
                placeholder="Nome Completo"
                type="text"
                className="outline-none bg-[#EBEBEB] rounded-full pl-4  h-[40px]"
              />
            
              <div className="flex items-center gap-2">
              <Input
                placeholder="Telefone"
                type="text"
                className="outline-none bg-[#EBEBEB] rounded-full pl-4  h-[40px]"
              />
               <Input
                placeholder="Profissão"
                type="text"
                className="outline-none bg-[#EBEBEB] rounded-full pl-4  h-[40px]"
              />
              </div>
              <Input
                placeholder="Email"
                type="email"
                className="outline-none bg-[#EBEBEB] rounded-full pl-4  h-[40px]"
              />
              <Input
                placeholder="Senha"
                type="password"
                className="outline-none bg-[#EBEBEB] rounded-full pl-4  h-[40px]"
              />
              <Input
                placeholder="Confirmar Senha"
                type="password"
                className="outline-none bg-[#EBEBEB] rounded-full pl-4  h-[40px]"
              />
              <div className="w-full flex items-center justify-end">
                <Button
                  w={75}
                  h={35}
                  rounded={"full"}
                  bg={"#336DFF"}
                  color={"white"}
                  fontSize={"sm"}
                >
                  Criar
                </Button>
              </div>
            </form>
           
          </>
        )}
      </MenuContent>
    </MenuRoot>

*/
