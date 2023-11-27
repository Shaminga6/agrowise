import { useEffect, useState } from "react";
import Loader from "../components/Loader"
import { useNavigate } from "react-router";

const ProduceFormSection = () => {
    const navigate = useNavigate()
  const [token, setToken] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "Remove",
    type: "",
    price: "",
    availability: "",
    description: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("token"));
    setToken(data);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    setIsLoading(true);

    try {
      const res = await (
        await fetch(`https://agrowise-api.vercel.app/api/produce-listings/`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token.access}`,
            "Content-Type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(formData),
        })
      ).json();

      if (res.owner) {
        setIsLoading(false);
        navigate("/producelistings")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-4 sm:ml-64 produce-form-wrapper">
        <div className="produce-form">
          <form class="" onSubmit={handleSubmit}>
            <div class="mb-5">
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Type
              </label>
              <input
                type="text"
                id="type"
                class="shadow-sm produce-input block w-full p-2.5 "
                placeholder="Enter the of crop"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="price"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                class="shadow-sm produce-input block w-full p-2.5 "
                placeholder="Enter the price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            <div class="mb-5">
              <label
                for="availability"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Availability
              </label>
              <input
                type="number"
                id="availability"
                class="shadow-sm produce-input block w-full p-2.5 "
                placeholder="Enter availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
              />
            </div>

            <div class="mb-5">
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                class="shadow-sm produce-input block w-full p-2.5 "
                placeholder="Enter the description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <button
              style={{ backgroundColor: "#216206" }}
              type="submit"
              class="text-white w-full  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {isLoading ? <Loader /> : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProduceFormSection;
