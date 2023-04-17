import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const PrivateRouter = (props: Props) => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("user") as string);
  console.log(data);

  if (data.user.id != 1) {
    navigate("/");
  }
  if (!data.user) {
    navigate("/signin");
  }
  return props.children;
};

export default PrivateRouter;
