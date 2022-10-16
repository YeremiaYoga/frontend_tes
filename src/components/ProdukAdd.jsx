import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProdukAdd = () => {

  const [name,setName] = useState("");
  const [ket,setKet] = useState("");
  const navigate = useNavigate();

  const saveProduk = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/produk",{
        name,
        ket
      });
      navigate("/dashboard");
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div>
      <div className="flex p-20 justify-center">
        <form onSubmit={saveProduk}>
          <div>
            <div>
              <label>Nama Produk</label>
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
            <button type="submit" className="px-6 py-2 bg-emerald-400 hover:bg-emerald-500 text-white">Add produk</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProdukAdd;
