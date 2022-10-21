import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { RootState } from "../slices/store";

type Props = { children: JSX.Element };

const ProtectedRout: React.FC<Props> = ({ children }) => {
  let location = useLocation(); //Для возврата на страницу из которой был выход
  console.log(location);
  const { isAuth } = useSelector((state: RootState) => state.authSlice);
  console.log(isAuth);
  return isAuth ? (
    <div>{children}</div>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRout;
