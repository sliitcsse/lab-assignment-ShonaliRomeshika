import React from 'react'
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//import "./Book.css";

const Item = (props) => {
    const history = useNavigate();
    const { id, iname, price, image } = props.item;
    const deleteHandler = async () => {
      await axios
        .delete(`http://localhost:5000/items/id`)
        .then((res) => res.data)
        .then(() => history("/"))
        .then(() => history("/items"));
    };
  return (
    <div className="card">
      <img src={image} alt={iname} />
      <article>By {iname}</article>
      <h3>Rs {price}</h3>
      <Button>
        Buy
      </Button>
      <Button>
        Add to Cart
      </Button>
      <Button>
        Add to Wish List
      </Button>
    </div>
  );
}

export default Item