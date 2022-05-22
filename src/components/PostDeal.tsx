import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HermitradeContext } from "../context/HermitradeContext";

interface FormData {
  email: string;
  item: string;
  description: string;
  price: string;
  url: string;
}

const DealForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    item: "",
    description: "",
    price: "",
    url: "",
  } as FormData);
  const { postDeals, getDeals } = useContext(HermitradeContext);

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/market");
  };

  return (
    <div>
      <div className="rounded-lg post-deals-container">
        <input
          type="text"
          placeholder="Email"
          className="glass-morphism"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Item Name"
          className="glass-morphism"
          onChange={(e) => setFormData({ ...formData, item: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="glass-morphism"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          className="glass-morphism"
          step="0.01"
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="glass-morphism"
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
        />
        <button
          className="rounded-full py-2 m-8 w-96 bg-[#e29608] hover:bg-[#bd7e0a] duration-200"
          onClick={() => {
            if (
              formData.email != "" &&
              formData.item != "" &&
              formData.description != "" &&
              formData.price != "" &&
              formData.url != ""
            ) {
              postDeals(
                formData.email,
                formData.item,
                formData.description,
                formData.price,
                formData.url
              );
              getDeals();
              handleSubmit();
            }
          }}
        >
          Submit
        </button>
        <br />
      </div>
    </div>
  );
};

const PostDeal = () => {
  return (
    <div>
      <div className="p-48 sm:p-10 text-white post-deals-bg">
        <div className="mx-40 mt-20 mb-40 grid grid-cols-2 text-2xl">
          <div className="pr-12 pl-2">
            <h1 className="text-5xl font-semibold">
              Sell your used electronics.
            </h1>
            <br />
            <p className="">Others will see your posts and contact you.</p>
            <br />
            <p>
              Fun fact: The US alone throws away cellphones with{" "}
              <b>$60 million</b> worth of gold/silver <b>yearly</b>.
            </p>
          </div>
          <div className="pl-12">
            <DealForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDeal;
