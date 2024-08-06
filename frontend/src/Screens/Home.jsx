import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import { LoadUser } from "../ApiCalls/User";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [Title, setTitle] = useState("");
  const [Message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      LoadUser(dispatch);
    } else navigate("/");
  }, []);

  const handleAddNote = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="h-screen w-screen flex flex-col items-center gap-10"
      style={{
        background: `url(${`https://imgs.search.brave.com/GgNyVGKKf5nzkVYoWTtY4c4mhOE28N4m4JiRaLwyvgU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/NTA2Mzk1Ny9waG90/by90by1kby1saXN0/LW9uLW5vdGVib29r/LW92ZXItcGFzdGVs/LWJsdWUtYmFja2dy/b3VuZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9d2FXMksy/QnZaNzVRdXhZeVRP/NG9qdmZTRElabzRi/QVc4bVI5Z013RTlD/MD0`})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavBar />
      <form
        onSubmit={handleAddNote}
        className="h-[72vh] w-[95vw] flex flex-col p-5 gap-5 items-center bg-slate-800 rounded-md"
      >
        <input
          type="text"
          placeholder="Title"
          className="h-[8vh] w-[85vw] rounded-sm p-4 placeholder:text-black font-poppins"
          maxLength={20}
          onChange={(e) => setTitle(e.target.value)}
          value={Title}
          required
        />
        <textarea
          placeholder="Enter Message"
          className="h-[50vh] w-[85vw] rounded-sm  resize-none p-4  placeholder:text-black font-poppins"
          onChange={(e) => setMessage(e.target.value)}
          value={Message}
          required
        />
        <button
          type="submit"
          className="w-[20vw] p-2 bg-emerald-300 rounded-sm font-poppins"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Home;
