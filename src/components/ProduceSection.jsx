import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../App";
import NoContent from "./NoContent";

const ProduceSection = () => {
  const [produceListings, setProduceListings] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  // ---------- Handle Fetch Produce --------------------
  useEffect(() => {
    const handleFetchProduce = async () => {
      try {
        const res = await (
          await fetch(`https://agrowise-api.vercel.app/api/produce-listings/`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token.access}`,
              "Content-Type": "application/json; charset=UTF-8",
            },
          })
        ).json();

        setProduceListings(res?.results);
      } catch (error) {
        console.log(error);
      }
    };

    handleFetchProduce();
  }, []);

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="grid grid-cols-2 gap-4">
          {/* First column (smaller) */}
          <div className="col-span-1  p-4">
            <Link to="/produceform">
              <button className="add-to-list" id="add-btn">
                {" "}
                &#x2b; Add to list
              </button>
            </Link>
          </div>

          {/* Second column (bigger) */}
          <div className="col-span-1 p-4 flex justify-end">
            <button className="add-to-list" id="sort-btn">
              {" "}
              &#8597; Sort by
            </button>
          </div>
        </div>

        {/* ----------- Table ------------ */}
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right">
            <thead class="text-xs text-gray-700 uppercase">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Type
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Avalaibility
                </th>
                <th scope="col" class="px-6 py-3">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {produceListings.length !== 0
                ? produceListings.map(
                    ({ type, availability, price, description }) => (
                      <tr class="table-row">
                        <td class="px-6 py-4">{type}</td>
                        <td class="px-6 py-4">{availability}</td>
                        <td class="px-6 py-4">{price}</td>
                        <td class="px-6 py-4">{description}</td>
                      </tr>
                    )
                  )
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProduceSection;
