import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from "reactstrap";
// import UpdateCat from './Form/Update-Cat/UpdateCat';

const AddressModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div style={{ display: "inline" }}>
      <Button className='btn-round' color='success' size='md' onClick={toggle}>
        Address
      </Button>
      {` `}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delivery Address</ModalHeader>
        <ModalBody>
          <h5>
            {" "}
            <i
              className='fas fa-city '
              style={{ color: "#23395d" }}
            ></i> City <span className=' font-bold'> :- </span>
            {props.data && props.data.city}
          </h5>

          <h5>
            <i className='fas fa-phone' style={{ color: "#23395d" }}></i> Phone{" "}
            <span className=' font-bold'> :- </span>
            {props.data && props.data.phone}
          </h5>
          <h5>
            <i className='fas fa-street-view' style={{ color: "#23395d" }}></i>{" "}
            Street <span className=' font-bold'> :- </span>{" "}
            {props.data && props.data.street}
          </h5>
          <h5>
            <i className='fas fa-chart-area' style={{ color: "#23395d" }}></i>{" "}
            Zone <span className=' font-bold'> :- </span>{" "}
            {props.data && props.data.zone}
          </h5>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default AddressModal;
