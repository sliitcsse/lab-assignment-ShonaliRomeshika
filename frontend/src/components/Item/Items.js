import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";
const URL = "http://localhost:5000/items";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };

const Items = () => {
    const [items, setItems] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setItems(data.items));
      }, []);
      console.log(items);
  return (
    <div>
        <ul>
    {items &&
      items.map((item, i) => (
        <li className="item" key={i}>
          <Item item={item} />
        </li>
      ))}
  </ul>
  </div>
  )
}

export default Items