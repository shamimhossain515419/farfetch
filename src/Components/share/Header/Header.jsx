"use client"
import { IoClose } from "react-icons/io5";
import { Avatar, Dropdown, Navbar } from 'keep-react';
import { Bell, SignIn, } from 'phosphor-react';
import React from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "@/redux/features/sidebarToggle/sidebarToggleSlice";

const Header = () => {

     const dispatch = useDispatch();
     const { value } = useSelector((state) => state.sidebarToggle)
     return (
          <div>
               <Navbar fluid={true} className="!py-2 shadow fixed z-50 top-0 w-full   px-0 left-0 right-0  ">
                    <Navbar.Container className="flex items-center justify-between">
                         <Navbar.Brand className='flex items-center gap-2'>
                              <div onClick={() => dispatch(toggle())} className=' lg:hidden'>
                                   {
                                        value ? <IoClose size={20} /> : <FaBars size={20} />
                                   }


                              </div>
                              <h1 className=' text-[22px] md:text-[30px] text-[#1C222B] font-medium'> Admin   <span className=' font-normal'>Logo</span></h1>
                         </Navbar.Brand>



                         <Navbar.Container className="flex gap-1 px-3">
                              {/* <Navbar.Toggle className="block" /> */}

                              <div className=' flex items-center justify-center gap-3'>
                                   <div className=' hidden  md:block  relative pr-8 cursor-pointer'>
                                        <Bell size={24} />
                                        <div className=' p-[5px] bg-red-500 -top-1 rounded-full absolute'>

                                        </div>
                                   </div>
                                   <div className=' flex items-center justify-center gap-3 z-50'>


                                        <h1 className='  hidden  md:block text-[18px] font-medium'>Shamim </h1>
                                        <div className='flex items-center justify-center gap-2'>
                                             <Avatar
                                                  shape="circle"
                                                  size="md"
                                                  id
                                                  status="online"
                                                  statusPosition="bottom-left"
                                                  img="https://react.keepdesign.io/images/avatar/avatar-4.png"
                                             />

                                             <div>

                                                  <Dropdown className=' primary_color  '
                                                       label=""
                                                       id='dropdown'
                                                       type="primary_bg"
                                                       size="sm"
                                                       dismissOnClick={true}
                                                  >
                                                       <Dropdown.Item>
                                                            <div className="flex flex-col items-start gap-1 ">
                                                                 <Link href={'/profile'}> Profile </Link>
                                                            </div>
                                                       </Dropdown.Item>
                                                       <Dropdown.Item>
                                                            <div className="flex flex-col items-start gap-1">
                                                                 <Link href={'/Leaderboard'}> Leaderboard </Link>

                                                            </div>
                                                       </Dropdown.Item>
                                                       <Dropdown.Item>
                                                            <div className="flex  items-start gap-1">

                                                                 <Link href={'/Component'}> Component </Link>

                                                            </div>
                                                       </Dropdown.Item>
                                                       <Dropdown.Item>
                                                            <div className="flex  items-start gap-1">
                                                                 <SignIn size={24} />
                                                                 <Link href={'/Logout'}> Logout </Link>

                                                            </div>
                                                       </Dropdown.Item>


                                                  </Dropdown>



                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </Navbar.Container>
                    </Navbar.Container>
               </Navbar>
          </div >
     );
};

export default Header;