import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice.js";
import authService from "../../appwrite/auth.js";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const addEvent = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.error("Logout error in LogoutBtn:", error);
      });
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={addEvent}
    >
      logout
    </button>
  );
};

export default LogoutBtn;
