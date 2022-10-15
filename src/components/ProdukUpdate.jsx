import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProdukUpdate = () => {

  const [name,setName] = useState("");
  const [ket,setKet] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProdukId();
  },[])

  const updateProduk = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/produk/${id}`,{
        name,
        ket
      });
      navigate("/dashboard");
    }
    catch(error){
      console.log(error);
    }
  }

  const getProdukId  = async () => {
    const response = await axios.get(`http://localhost:4000/api/produk/${id}`);
    setName(response.data.name);
    setKet(response.data.ket);
    
  }
  return (
    <div>
      <div className="flex p-20 justify-center">
        <form onSubmit={updateProduk}>
          <div>
            <div>
              <label>name Produk</label>
              <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border-2"></input>
              </div>
            </div>
            <div>
              <label>Keterangan</label>
              <div>
                <input type="text" value={ket} onChange={(e) => setKet(e.target.value)} className="border-2"></input>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button type="submit" className="px-6 py-2 bg-emerald-400 hover:bg-emerald-500 text-white">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProdukUpdate;
