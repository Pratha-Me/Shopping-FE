import React, { useEffect, useState } from "react";
// import { Button, Modal } from "react-bootstrap";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { getOrderItem } from "../../services/AuthService";

const OrderHistoryModal = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [orderProduct, setOrderProduct] = useState();

  useEffect(() => {
    const idOrderProduct = [];
    props.data &&
      props.data.forEach((item) => {
        idOrderProduct.push(item.item.id);
      });
    const pId = idOrderProduct && idOrderProduct.toString();

    getOrderItem(pId && pId).then((response) => {
      setOrderProduct(response.data);
    });
  });
  let result =
    orderProduct &&
    orderProduct.ItemList.filter((o1) =>
      props.data.some(
        (o2) =>
          o1.id === o2.item.id &&
          ((o1.quantity = o2.quantity), (o1.total = o2.quantity * o1.unitPrice))
      )
    );
  return (
    <>
      <div style={{ display: "inline" }}>
        <Button
          className='btn-round'
          //   color='primary'
          size='md'
          onClick={toggle}
          style={{ background: "#23395d" }}
        >
          View All
        </Button>
        {` `}
        <Modal style={{ zIndex: 99999 }} isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Ordered Products</ModalHeader>
          <ModalBody>
            <Row>
              {result &&
                result.map((item, idx) => {
                  return (
                    <Col key={idx} sm={12} md={4}>
                      <h5 style={{ color: "#23395d" }}> Product {idx + 1}</h5>
                      <Card
                        style={{ border: "1px solid #e4e4e4", padding: "8px" }}
                      >
                        <CardImg
                          top
                          src={item.link[0]}
                          alt={item.itemName}
                          height='100px'
                          //   width='100px'
                        />
                        <CardBody style={{ padding: "8px 4px" }}>
                          <CardTitle>
                            <h4 style={{ color: "black", fontSize: "12px" }}>
                              {item.itemName}
                            </h4>
                          </CardTitle>
                          <hr />
                          <CardText>
                            <h5 style={{ color: "black", fontSize: "12px" }}>
                              Unit Price: Rs. {item.unitPrice}
                            </h5>
                            <hr />
                            <p style={{ fontSize: "12px" }}>
                              Quantity: {item.quantity}
                            </p>
                            <p style={{ fontSize: "12px" }}>
                              Total Price: {item.total}
                            </p>
                          </CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
            <h3 className='mt-4' style={{ color: "#23395d" }}>
              Total :- Rs. {props.total && props.total}
            </h3>{" "}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default OrderHistoryModal;
