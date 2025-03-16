import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router"; 
const Github = () => {
  const data=useLoaderData();
//   useEffect(() => {
//     fetch("https://api.github.com/users/najir83")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
  return (
    <div className="flex justify-between items-center text-center bg-gray-600 text-white text-2xl p-4">
      <img className="w-50 h-50 rounded-full  " src={data?.avatar_url}></img>
      <span>
        Name : {data?.name} <br />
        Location : {data?.location} <br />
        GitHub Followrs : {data?.followers}
      </span>
    </div>
  );
};

export default Github;
export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/najir83");
  return res.json();
};
