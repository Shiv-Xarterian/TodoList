import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserUpdate } from "../Redux/UserSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="h-[10vh] w-screen flex justify-between px-5 items-center cursor-pointer">
      <span className="font-poppins font-bold text-2xl">Todo</span>
      <span className="font-poppins text-sm w-[70vw] flex items-center justify-evenly">
        <span
          onClick={() => navigate("/home")}
          style={{
            fontWeight: window.location.pathname == "/home" ? "bold" : "normal",
          }}
        >
          Add
        </span>
        <span
          onClick={() => navigate("/home/todo")}
          style={{
            fontWeight:
              window.location.pathname == "/home/todo" ? "bold" : "normal",
          }}
        >
          Todo's
        </span>
        <span
          onClick={() => navigate("/home/profile")}
          style={{
            fontWeight:
              window.location.pathname == "/home/profile" ? "bold" : "normal",
          }}
        >
          Profile
        </span>
        <span
          onClick={() => {
            localStorage.setItem("token", "");
            navigate("/");
            dispatch(UserUpdate({ User: "", Message: "" }));
          }}
        >
          Logout
        </span>
      </span>
    </div>
  );
};

export default NavBar;
