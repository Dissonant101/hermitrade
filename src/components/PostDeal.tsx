import { useState } from "react";
import { HermitradeContext } from "../context/HermitradeContext";

interface FormData {
  email: string,
    address: string,
    item: string,
    price: string
}

const PostDeal = () => {
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    item: "",
    price: ""
  } as FormData);
  return (
    <form>
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input type="email" id="email" name="email" onChange={(e) => setFormData( {...formData, email: e.target.value})} />
      <br />
      <label htmlFor="item">Item:</label>
      <br />
      <input type="text" id="item" name="item"  onChange={(e) => setFormData( {...formData, item: e.target.value})}/>
      <br />
      <label htmlFor="description">Description:</label>
      <br />
      <input type="text" id="description" name="description" onChange={(e) => setFormData( {...formData, description : e.target.value})}/>
      <br />
      <label htmlFor="price">Price:</label>
      <br />
      <input type="text" id="price" name="price"  onChange={(e) => setFormData( {...formData, price: e.target.value})} />
      <br />
      <label htmlFor="imageurl">Image URL:</label>
      <br />
      <input type="text" id="imageurl" name="imageurl" onChange={(e) => setFormData( {...formData, imageurl : e.target.value})}/>
      <br />
      <input type="submit" value="Submit" />
      <br />
    </form>
  );
};

export default PostDeal;
