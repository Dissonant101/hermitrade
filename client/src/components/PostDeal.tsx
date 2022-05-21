import { useState } from "react";

const PostDeal = () => {
  return (
    <form>
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input type="email" id="email" name="email" />
      <br />
      <label htmlFor="address">Wallet Address:</label>
      <br />
      <input type="text" id="address" name="address" />
      <br />
      <label htmlFor="item">Item:</label>
      <br />
      <input type="text" id="item" name="item" />
      <br />
      <label htmlFor="price">Price:</label>
      <br />
      <input type="text" id="price" name="price" />
      <br />
      <input type="submit" value="Submit" />
      <br />
    </form>
  );
};

export default PostDeal;
