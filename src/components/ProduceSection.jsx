import { Link } from "react-router-dom";

const ProduceSection = () => {
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
              <tr class="table-row">
                <td class="px-6 py-4">Corn</td>
                <td class="px-6 py-4">$500 per ton</td>
                <td class="px-6 py-4">100 tons</td>
                <td class="px-6 py-4">100 tons</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProduceSection;
