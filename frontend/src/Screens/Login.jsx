import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoadUser, LoginUser } from "../ApiCalls/User";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const { User } = useSelector((state) => state.User);

  const HandleLoginUser = async (e) => {
    e.preventDefault();
    LoginUser(dispatch)(Email, Password);
    if (User) {
      setEmail("");
      setPassword("");
    }
  };

  useEffect(() => {
    if (User) navigate("/home");
  }, [User]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      LoadUser(dispatch);
    }
  }, []);
  return (
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={{
        background: `url(${"https://imgs.search.brave.com/7ZMzysUGDnSePzo2VfmVb1aax8KC3L9eI_5HVAd4tBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/MTE3NDMzNS9waG90/by90by1kby1saXN0/LW9uLW5vdGUtcGFk/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1oTmhLbmVFSm9i/VU1oejVJTldrSmF6/OFZjZ3VHMzRyamRC/ZVQ3ODlVaVlNPQ"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <form
        onSubmit={HandleLoginUser}
        className="h-[50vh] w-[80vw] rounded-md flex flex-col gap-5 items-center py-[5vh] backdrop-blur-sm md:w-[50vw] lg:w-[30vw]"
      >
        <span className="text-2xl font-poppins font-bold">TODO</span>
        <input
          type="email"
          placeholder="Email"
          className=" h-[6vh] w-[70vw] rounded-md indent-3 focus:outline-none font-poppins text-sm md:w-[40vw] lg:w-[20vw]"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
        />
        <input
          type="password"
          placeholder="Password"
          className=" h-[6vh] w-[70vw] rounded-md indent-3 focus:outline-none font-poppins text-sm md:w-[40vw] lg:w-[20vw]"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={Password}
        />
        <button
          type="submit"
          className="bg-green-400 px-3 py-2 rounded-sm text-white"
        >
          Login
        </button>
        <span className="text-sm flex gap-2">
          Dont have an account!
          <Link to="/register">
            <span>Register here</span>
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
