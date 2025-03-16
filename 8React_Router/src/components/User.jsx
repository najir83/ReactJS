import React from "react";
import { useParams } from "react-router"; // useParams is a hook that returns an object of key/value pairs of URL parameters.

const User = () => {
  const { id } = useParams();
  return <div>Welcome to User Page for User ID: {id}</div>;
};

export default User;
