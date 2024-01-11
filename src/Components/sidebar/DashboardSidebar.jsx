"use client"

import { sidebar } from "@/utils/sidebar";
import { useSelector } from "react-redux";
import SidebarCard from "./SidebarCard";

const DashboardSidebar = () => {
     const { value } = useSelector(state => state.sidebarToggle);

     return (

          <div className={`${value ? "block w-full sm:w-[360px]   left-0 fixed  " : "hidden"}  -ml-[3px]  -mt-[22px]  left-0  lg:relative bg-white  lg:block lg:w-[360px] overflow-hidden z-20 `}>
               <div className={` shadow-md h-screen  w-full left-0 sm:w-[250px] duration-500  bg-white fixed    px-1 `} >

                    {/* mapping   side bar card  */}
                    <div className=" pt-11 px-3">
                         {sidebar?.map((item, index) => <SidebarCard key={index} item={item}></SidebarCard>)
                         }
                    </div>
               </div>
          </div>
     );
};

export default DashboardSidebar;