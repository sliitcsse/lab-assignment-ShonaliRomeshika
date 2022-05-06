import React from 'react'
import { Button } from "@mui/material";

const Item = (props) => {
    const { id, iname, price, image } = props.item;
    
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