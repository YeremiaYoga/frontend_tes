import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProdukList = () => {
  const [produks, setProduk] = useState([]);

  useEffect(() => {
    getProduks();
  }, []);

  const getProduks = async () => {
    const response = await axios.get("http://localhost:4000/api/produk");
    setProduk(response.data);
  };

  const deleteProduk = async (id) => {
    try{
      await axios.delete(`http://localhost:4000/api/produk/${id}`);
      getProduks();
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col ">
      <div className="overflow-x-auto flex justify-center">
        <div className="p-1.5 w-2/3 inline-block align-middle">
          <div className="py-3">
            <Link className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded" to="/dashboard/add">
              Add
            </Link>
          </div>

          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase"
                  >
                    name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase"
                  >
                    Keterangan
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-gray-500 uppercase"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {produks.map((produk, index) => (
                  <tr key={produk.id}>
                    <th className="px-6 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      {index + 1}
                    </th>
                    <th className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                      {produk.name}
                    </th>
                    <th className="px-6 py-4 text-sm  text-gray-700 whitespace-nowrap">
                      {produk.ket}
                    </th>
                    <th className="px-6 py-4 text-sm space-x-4 text-gray-700 whitespace-nowrap">
                      <Link className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded" to={`update/${produk.id}`}>
                        Edit
                      </Link>
                      <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded" onClick={() => deleteProduk(produk.id)}>
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProdukList;
