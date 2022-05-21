import { useState } from "react";
import { HermitradeContext } from "../context/HermitradeContext";

const PostDeal = () => {
  return (
    <form>
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input type="email" id="email" name="email" />
      <br />
      <label htmlFor="item">Item:</label>
      <br />
      <input type="text" id="item" name="item" />
      <br />
      <label htmlFor="description">Description:</label>
      <br />
      <input type="text" id="description" name="description" />
      <br />
      <label htmlFor="price">Price:</label>
      <br />
      <input type="text" id="price" name="price" />
      <br />
      <label htmlFor="imageurl">Image URL:</label>
      <br />
      <input type="text" id="imageurl" name="imageurl" />
      <br />
      <input type="submit" value="Submit" />
      <br />
    </form>
  );
};

export default PostDeal;
