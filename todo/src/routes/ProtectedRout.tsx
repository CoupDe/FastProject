import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import authSlice from "../slices/authSlice";
import { RootState } from "../slices/store";

const ProtectedRout = () => {
  const { isAuth } = useSelector((state: RootState) => state.authSlice);
  return <div>ProtectedRout</div>;
};

export default ProtectedRout;
