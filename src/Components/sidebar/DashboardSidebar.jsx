"use client"

import { Sidebar } from "keep-react";
import {
     Chat,
     Handbag,
     ShoppingBagOpen,
     ShoppingCart,
     SignIn,
     SquaresFour,
     UserPlus,
     Users,
} from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";

const DashboardSidebar = () => {
     const { value } = useSelector(state => state.sidebarToggle);
     const dispatch = useDispatch();
     return (

          <div className={` w-[250px] z-20`}>
               <div className={` shadow-md h-screen  w-[250px] duration-500   fixed    px-1 `} >
                    <Sidebar aria-label="Sidebar with multi-level dropdown example">
                         <Sidebar.Items>
                              <Sidebar.ItemGroup>
                                   <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
                                        Dashboard
                                   </Sidebar.Item>
                                   <Sidebar.Collapse
                                        icon={<ShoppingCart size={24} />}
                                        label="Stances"
                                   >
                                        <Sidebar.Item href="/product" icon={<Handbag size={24} />}>
                                             add  Products
                                        </Sidebar.Item>
                                   </Sidebar.Collapse>
                                   <Sidebar.Item href="#" icon={<Chat size={24} />}>
                                        Inbox
                                   </Sidebar.Item>
                                   <Sidebar.Item href="#" icon={<Users size={24} />}>
                                        Users
                                   </Sidebar.Item>
                                   <Sidebar.Item href="#" icon={<ShoppingBagOpen size={24} />}>
                                        Products
                                   </Sidebar.Item>
                                   <Sidebar.Item href="#" icon={<SignIn size={24} />}>
                                        Sign In
                                   </Sidebar.Item>
                                   <Sidebar.Item href="#" icon={<UserPlus size={24} />}>
                                        Sign Up
                                   </Sidebar.Item>
                              </Sidebar.ItemGroup>
                         </Sidebar.Items>
                    </Sidebar>
               </div>
          </div>
     );
};

export default DashboardSidebar;