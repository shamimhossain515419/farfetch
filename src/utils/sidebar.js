import { SquaresFour, Chat, Users, SignIn, UserPlus, ShoppingBagOpen, ShoppingCart } from "phosphor-react";

export const sidebar = [
     {
          id: 1,
          name: 'dashboard',
          path: "/",
          Icon: <SquaresFour size={24}></SquaresFour>
     },
     {
          id: 2,
          name: 'brand',
          path: "/product",
          Icon: <ShoppingCart size={24} />,
          sub: [
               {
                    id: 3,
                    name: 'Inbox',
                    path: "/inbox",
                    Icon: <Chat size={24} ></Chat>
               },
               {
                    id: 4,
                    name: 'product',
                    path: "/product",
                    Icon: <ShoppingBagOpen size={24}></ShoppingBagOpen>
               },
               {
                    id: 5,
                    name: 'user',
                    path: "/user",
                    Icon: <Users size={24}></Users>
               },
               {
                    id: 6,
                    name: 'Sign In',
                    path: "/sign",
                    Icon: <SignIn size={24}></SignIn>
               },
               {
                    id: 7,
                    name: ' Sign Up',
                    path: "/login",
                    Icon: <UserPlus size={24}></UserPlus>
               }
          ]
     },

     {
          id: 3,
          name: 'Inbox',
          path: "/inbox",
          Icon: <Chat size={24} ></Chat>
     },
     {
          id: 4,
          name: 'product',
          path: "/product",
          Icon: <ShoppingBagOpen size={24}></ShoppingBagOpen>
     },
     {
          id: 5,
          name: 'user',
          path: "/user",
          Icon: <Users size={24}></Users>
     },
     {
          id: 6,
          name: 'Sign In',
          path: "/sign",
          Icon: <SignIn size={24}></SignIn>
     },
     {
          id: 7,
          name: ' Sign Up',
          path: "/login",
          Icon: <UserPlus size={24}></UserPlus>
     }
]



