
"use client";

import { Modal, Button, Label, TextInput, Textarea } from "keep-react";
import { CloudArrowUp } from "phosphor-react";
export const Product_modal = ({ onClickTwo, showModal }) => {

     return (
          <>
               <Modal
                    icon={<CloudArrowUp size={28} color="#1B4DFF" />}
                    size="2xl"
                    show={showModal}
                    onClose={onClickTwo}
               >
                    <Modal.Header>Add New  Product</Modal.Header>
                    <Modal.Body>
                         <div>

                              <form action="">
                                   <div className="from_group py-1">
                                        <Label htmlFor="#id-8" value=" Product Name" />
                                        <TextInput
                                             id="#id-8"
                                             placeholder="Default Input Field"
                                             color="info"
                                             name="name"
                                        />

                                   </div>
                                   <div className="from_group py-1">
                                        <Label htmlFor="#id-8" value=" Product Price" />
                                        <TextInput
                                             id="#id-8"
                                             placeholder="Default Input Field"
                                             color="info"
                                             name="price"
                                        />

                                   </div>
                                   <div className="from_group py-1">
                                        <Label htmlFor="#id-8" value=" Product Quantity" />
                                        <TextInput
                                             id="#id-8"
                                             placeholder="Default Input Field"
                                             color="info"
                                             name="quantity"
                                        />

                                   </div>
                                   <div className="from_group py-1">
                                        <Label htmlFor="#id-8" value=" Product Quantity" />
                                        <Textarea
                                             id="comment"
                                             placeholder="product description..."
                                             withBg={true}
                                             color="info"
                                             border={true}
                                             rows={4}
                                        />

                                   </div>
                              </form>

                         </div>
                    </Modal.Body>
                    <Modal.Footer>
                         <Button type="outlineGray" onClick={onClickTwo}>
                              Cancel
                         </Button>
                         <Button type="primary" onClick={onClickTwo}>
                              Confirm
                         </Button>
                    </Modal.Footer>
               </Modal>
          </>
     );
}
