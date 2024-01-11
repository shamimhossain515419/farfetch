"use client"
import Image from "next/image";
import { Avatar, Badge, Button, Popover, Table } from "keep-react";
import {
     ArrowDown,
     DotsThreeOutline,
     Pencil,
     Trash,
} from "phosphor-react";
import { FaPlus } from "react-icons/fa6";

import { useState } from "react";
import { Product_modal } from "../product_modal/Product_modal";
const Product_table = () => {
     const [showModal, setShowModal] = useState(false);
     const onClickTwo = () => {
          setShowModal(!showModal);
     };
     return (
          <div>
               <Product_modal onClickTwo={onClickTwo} showModal={showModal} ></Product_modal>
               <div>
                    <Table showCheckbox={false}>
                         <Table.Caption>
                              <div className="my-5 flex items-center justify-between px-6">
                                   <div className="flex items-center gap-5">
                                        <p className="text-body-1 font-semibold text-metal-600">total Product</p>
                                        <Badge size="xs" colorType="light" color="gray">
                                             100 Member
                                        </Badge>
                                   </div>
                                   <div onClick={onClickTwo} className="flex items-center gap-5">
                                        <Button type="outlineGray" size="sm">
                                             <span className="pr-2">
                                                  <FaPlus />
                                             </span>
                                             add
                                        </Button>

                                   </div>

                              </div>
                         </Table.Caption>
                         <Table.Head>
                              <Table.HeadCell className="min-w-[290px]">
                                   <p className="text-body-6 font-medium text-metal-400">Type</p>
                              </Table.HeadCell>
                              <Table.HeadCell>Status</Table.HeadCell>
                              <Table.HeadCell className="min-w-[152px]">Role</Table.HeadCell>
                              <Table.HeadCell className="min-w-[240px]">Email Address</Table.HeadCell>
                              <Table.HeadCell className="min-w-[215px]">Team</Table.HeadCell>
                              <Table.HeadCell className="min-w-[200px]">Performance</Table.HeadCell>
                              <Table.HeadCell className="min-w-[100px]" />
                         </Table.Head>
                         <Table.Body className="divide-gray-25 divide-y">
                              <Table.Row className="bg-white">
                                   <Table.Cell>
                                        <div className="flex items-center gap-3">
                                             <div className="flex items-center gap-4">
                                                  <div className="flex items-center gap-2">
                                                       <Avatar shape="circle" img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format" size="md" />
                                                       <div>
                                                            <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Ralph Edwards</p>
                                                            <span>&ralph</span>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <Badge colorType="light" color="success" dot={true}>
                                             Active
                                        </Badge>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <p>UI/UX Designer</p>
                                   </Table.Cell>
                                   <Table.Cell>nevaeh.simmons@example.com</Table.Cell>
                                   <Table.Cell>
                                        <div className="flex items-center gap-1">
                                             <Badge colorType="light" color="info">
                                                  Product
                                             </Badge>
                                             <Badge colorType="light" color="info">
                                                  Marketing
                                             </Badge>
                                             <Badge colorType="light" color="gray">
                                                  +3
                                             </Badge>
                                        </div>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <div className="flex items-center gap-3">
                                             <div>
                                                  <Image src="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format" width={72} height={36} alt="line" />
                                             </div>
                                             <div className="flex items-center gap-1">
                                                  <span>
                                                       <ArrowDown size={20} color="#D7DFE9" />
                                                  </span>
                                                  <span>20%</span>
                                             </div>
                                        </div>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <Popover showDismissIcon={false} showArrow={false} className="w-52 border border-metal-100 p-2">
                                             <Popover.Container className="!mt-0 !block">
                                                  <ul>
                                                       <li className="rounded px-2 py-1 hover:bg-metal-100">
                                                            <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                                                                 <span>Delete</span>
                                                                 <span>
                                                                      <Trash />
                                                                 </span>
                                                            </button>
                                                       </li>
                                                       <li className="rounded px-2 py-1 hover:bg-metal-100">
                                                            <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                                                                 <span>Edit</span>
                                                                 <span>
                                                                      <Pencil />
                                                                 </span>
                                                            </button>
                                                       </li>
                                                  </ul>
                                             </Popover.Container>
                                             <Popover.Action>
                                                  <Button type="outlineGray" size="xs" circle={true}>
                                                       <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                                                  </Button>
                                             </Popover.Action>
                                        </Popover>
                                   </Table.Cell>
                              </Table.Row>
                              <Table.Row className="bg-white">
                                   <Table.Cell>
                                        <div className="flex items-center gap-3">
                                             <div className="flex items-center gap-4">
                                                  <div className="flex items-center gap-2">
                                                       <Avatar shape="circle" img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format" size="md" />
                                                       <div>
                                                            <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Wade Warren</p>
                                                            <span>&ralph</span>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <Badge colorType="light" color="gray" dot={true}>
                                             Offline
                                        </Badge>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <p>Scrum Master</p>
                                   </Table.Cell>
                                   <Table.Cell>curtis.weaver@example.com</Table.Cell>
                                   <Table.Cell>
                                        <div className="flex items-center gap-1">
                                             <Badge colorType="light" color="info">
                                                  Product
                                             </Badge>
                                             <Badge colorType="light" color="info">
                                                  Marketing
                                             </Badge>
                                             <Badge colorType="light" color="gray">
                                                  +3
                                             </Badge>
                                        </div>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <div className="flex items-center gap-3">
                                             <div>
                                                  <Image src="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format" width={72} height={36} alt="line" />
                                             </div>
                                             <div className="flex items-center gap-1">
                                                  <span>
                                                       <ArrowDown size={20} color="#D7DFE9" />
                                                  </span>
                                                  <span>20%</span>
                                             </div>
                                        </div>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <Popover showDismissIcon={false} showArrow={false} className="w-52 border border-metal-100 p-2">
                                             <Popover.Container className="!mt-0 !block">
                                                  <ul>
                                                       <li className="rounded px-2 py-1 hover:bg-metal-100">
                                                            <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                                                                 <span>Delete</span>
                                                                 <span>
                                                                      <Trash />
                                                                 </span>
                                                            </button>
                                                       </li>
                                                       <li className="rounded px-2 py-1 hover:bg-metal-100">
                                                            <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                                                                 <span>Edit</span>
                                                                 <span>
                                                                      <Pencil />
                                                                 </span>
                                                            </button>
                                                       </li>
                                                  </ul>
                                             </Popover.Container>
                                             <Popover.Action>
                                                  <Button type="outlineGray" size="xs" circle={true}>
                                                       <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                                                  </Button>
                                             </Popover.Action>
                                        </Popover>
                                   </Table.Cell>
                              </Table.Row>
                              <Table.Row className="bg-white">
                                   <Table.Cell>
                                        <div className="flex items-center gap-3">
                                             <div className="flex items-center gap-4">
                                                  <div className="flex items-center gap-2">
                                                       <Avatar shape="circle" img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format" size="md" />
                                                       <div>
                                                            <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Eleanor Pena</p>
                                                            <span>&ralph</span>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <Badge colorType="light" color="success" dot={true}>
                                             Active
                                        </Badge>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <p>Software Tester</p>
                                   </Table.Cell>
                                   <Table.Cell>nathan.roberts@example.com</Table.Cell>
                                   <Table.Cell>
                                        <div className="flex items-center gap-1">
                                             <Badge colorType="light" color="info">
                                                  Product
                                             </Badge>
                                             <Badge colorType="light" color="info">
                                                  Marketing
                                             </Badge>
                                             <Badge colorType="light" color="gray">
                                                  +3
                                             </Badge>
                                        </div>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <div className="flex items-center gap-3">
                                             <div>
                                                  <Image src="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format" width={72} height={36} alt="line" />
                                             </div>
                                             <div className="flex items-center gap-1">
                                                  <span>
                                                       <ArrowDown size={20} color="#D7DFE9" />
                                                  </span>
                                                  <span>30%</span>
                                             </div>
                                        </div>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <Popover showDismissIcon={false} showArrow={false} className="w-52 border border-metal-100 p-2">
                                             <Popover.Container className="!mt-0 !block">
                                                  <ul>
                                                       <li className="rounded px-2 py-1 hover:bg-metal-100">
                                                            <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                                                                 <span>Delete</span>
                                                                 <span>
                                                                      <Trash />
                                                                 </span>
                                                            </button>
                                                       </li>
                                                       <li className="rounded px-2 py-1 hover:bg-metal-100">
                                                            <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                                                                 <span>Edit</span>
                                                                 <span>
                                                                      <Pencil />
                                                                 </span>
                                                            </button>
                                                       </li>
                                                  </ul>
                                             </Popover.Container>
                                             <Popover.Action>
                                                  <Button type="outlineGray" size="xs" circle={true}>
                                                       <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                                                  </Button>
                                             </Popover.Action>
                                        </Popover>
                                   </Table.Cell>
                              </Table.Row>
                              <Table.Row className="bg-white">
                                   <Table.Cell>
                                        <div className="flex items-center gap-3">
                                             <div className="flex items-center gap-4">
                                                  <div className="flex items-center gap-2">
                                                       <Avatar shape="circle" img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format" size="md" />
                                                       <div>
                                                            <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Jerome Bell</p>
                                                            <span>&ralph</span>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <Badge colorType="light" color="gray" dot={true}>
                                             Offline
                                        </Badge>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <p>JS Developer</p>
                                   </Table.Cell>
                                   <Table.Cell>arif.jsdev@example.com</Table.Cell>
                                   <Table.Cell>
                                        <div className="flex items-center gap-1">
                                             <Badge colorType="light" color="info">
                                                  Javascript
                                             </Badge>
                                             <Badge colorType="light" color="info">
                                                  React
                                             </Badge>
                                             <Badge colorType="light" color="gray">
                                                  +7
                                             </Badge>
                                        </div>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <div className="flex items-center gap-3">
                                             <div>
                                                  <Image src="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format" width={72} height={36} alt="line" />
                                             </div>
                                             <div className="flex items-center gap-1">
                                                  <span>
                                                       <ArrowDown size={20} color="#D7DFE9" />
                                                  </span>
                                                  <span>50%</span>
                                             </div>
                                        </div>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <Popover showDismissIcon={false} showArrow={false} className="w-52 border border-metal-100 p-2">
                                             <Popover.Container className="!mt-0 !block">
                                                  <ul>
                                                       <li className="rounded px-2 py-1 hover:bg-metal-100">
                                                            <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                                                                 <span>Delete</span>
                                                                 <span>
                                                                      <Trash />
                                                                 </span>
                                                            </button>
                                                       </li>
                                                       <li className="rounded px-2 py-1 hover:bg-metal-100">
                                                            <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                                                                 <span>Edit</span>
                                                                 <span>
                                                                      <Pencil />
                                                                 </span>
                                                            </button>
                                                       </li>
                                                  </ul>
                                             </Popover.Container>
                                             <Popover.Action>
                                                  <Button type="outlineGray" size="xs" circle={true}>
                                                       <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                                                  </Button>
                                             </Popover.Action>
                                        </Popover>
                                   </Table.Cell>
                              </Table.Row>
                              <Table.Row className="bg-white">
                                   <Table.Cell>
                                        <div className="flex items-center gap-3">
                                             <div className="flex items-center gap-4">
                                                  <div className="flex items-center gap-2">
                                                       <Avatar shape="circle" img="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format" size="md" />
                                                       <div>
                                                            <p className="-mb-0.5 text-body-4 font-medium text-metal-600">Macky Scheman</p>
                                                            <span>&ralph</span>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <Badge colorType="light" color="success" dot={true}>
                                             Active
                                        </Badge>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <p>Web Developer</p>
                                   </Table.Cell>
                                   <Table.Cell>macky.jsdev@example.com</Table.Cell>
                                   <Table.Cell>
                                        <div className="flex items-center gap-1">
                                             <Badge colorType="light" color="info">
                                                  Adobe
                                             </Badge>
                                             <Badge colorType="light" color="info">
                                                  Figma
                                             </Badge>
                                             <Badge colorType="light" color="gray">
                                                  +6
                                             </Badge>
                                        </div>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <div className="flex items-center gap-3">
                                             <div>
                                                  <Image src="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format" width={72} height={36} alt="line" />
                                             </div>
                                             <div className="flex items-center gap-1">
                                                  <span>
                                                       <ArrowDown size={20} color="#D7DFE9" />
                                                  </span>
                                                  <span>40%</span>
                                             </div>
                                        </div>
                                   </Table.Cell>
                                   <Table.Cell>
                                        <Popover showDismissIcon={false} showArrow={false} className="w-52 border border-metal-100 p-2">
                                             <Popover.Container className="!mt-0 !block">
                                                  <ul>
                                                       <li className="rounded px-2 py-1 hover:bg-metal-100">
                                                            <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                                                                 <span>Delete</span>
                                                                 <span>
                                                                      <Trash />
                                                                 </span>
                                                            </button>
                                                       </li>
                                                       <li className="rounded px-2 py-1 hover:bg-metal-100">
                                                            <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                                                                 <span>Edit</span>
                                                                 <span>
                                                                      <Pencil />
                                                                 </span>
                                                            </button>
                                                       </li>
                                                  </ul>
                                             </Popover.Container>
                                             <Popover.Action>
                                                  <Button type="outlineGray" size="xs" circle={true}>
                                                       <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                                                  </Button>
                                             </Popover.Action>
                                        </Popover>
                                   </Table.Cell>
                              </Table.Row>
                         </Table.Body>
                    </Table>
               </div>
          </div>
     );
};

export default Product_table;