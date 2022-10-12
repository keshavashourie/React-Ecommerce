import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./Cardsdata";
import "./style.css";
import { useDispatch } from "react-redux";
import {ADD} from '../Redux/Actions/action'

function Cards() {
  const dispatch = useDispatch();

  const [data, setdata] = useState(Cardsdata);

  const send = (e) => {
    //console.log(e);
    dispatch(ADD(e));
  };

  return (
    <div className="container mt-3">
      <div className="text-center">
        <h2>Add to Cart</h2>
        <div className="row d-flex justify-content-center align-items-center">
          {data.map((element, id) => {
            return (
              <>
                <Card
                  style={{ width: "24rem", border: "none" }}
                  className="mx-2 mt-4 card_style"
                >
                  <Card.Img
                    variant="top"
                    src={element.imgdata}
                    style={{ height: "16rem" }}
                    className="mt-3"
                  />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>Price : ₹{element.price}</Card.Text>
                    <Button
                      variant="primary"
                      className="col-lg-12"
                      onClick={() => send(element)}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
