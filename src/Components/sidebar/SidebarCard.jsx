
"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { IoIosArrowDown } from "react-icons/io";
const SidebarCard = ({ item }) => {
     const [active, setActive] = useState(false)
     return (
          <div>

               <div className=" py-2">
                     
                    <div>
                         { item?.sub?.length > 0 ? <> <div onClick={() => setActive(!active)} className=" flex items-center cursor-pointer justify-between gap-3 rounded-lg p-2 text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-metal-100">
                                   <div className='flex items-center justify-center gap-3'>
                                        <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900" >
                                             {item.Icon}
                                        </span>
                                        <button class=" flex-1   capitalize whitespace-nowrap" > {item?.name} </button>

                                   </div>
                                   <div>
                                        <IoIosArrowDown size={24} />
                                   </div>
                              </div>
                                   <Collapse isOpened={active}>
                                         {/* sub category  */}
                                        {
                                             active ? <>
                                                  {
                                                       item?.sub?.map((item, index) => <div key={index} className=' py-2 ml-5'>
                                                            <div className="  flex items-center justify-center gap-3 rounded-lg p-2 text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-metal-100">
                                                                 <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900" >
                                                                      {item.Icon}
                                                                 </span>
                                                                 <Link class=" flex-1   capitalize whitespace-nowrap" href={item?.path}> {item?.name} </Link>
                                                            </div>
                                                       </div>)
                                                  }

                                             </> : null
                                        }
                                   </Collapse>

                              </ > : <div className=" flex items-center justify-center gap-3 rounded-lg p-2 text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-metal-100">
                                   <span className="h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900" >
                                        {item.Icon}
                                   </span>
                                   <Link class=" flex-1 capitalize whitespace-nowrap" href={item?.path}> {item?.name} </Link>
                              </div>
                         }
                    </div>
               </div>
          </div>
     );
};

export default SidebarCard;