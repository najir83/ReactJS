import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  // const delay = (d) => {
  //   return new Promise((resolve, rej) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, d * 1000);
  //   });
  // };
  const onSubmit = async (data) => {
    // await delay(2);
    // if (data.username !== "najir") {
    //   setError("myform", { message: "username is invalid" });
    // }

    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // 👈 Add this line
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);
  };
  return (
    <>
      {isSubmitting && <div>Loading....</div>}
      <div className="container">
        <form action={""} onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: { value: true, message: "username is reqired" },
              minLength: { value: 3, message: "min length should be 3" },
              maxLength: { value: 8, message: "max length should be 8" },
            })}
            type="text"
            placeholder="username"
          />
          {errors.username && (
            <div className="red">{errors.username.message}</div>
          )}
          <br />
          <input
            {...register("password", {
              required: { value: true, message: "password is reqired" },
              minLength: {
                value: 5,
                message: "password should be atleast 5 chars",
              },
            })}
            type="password"
            placeholder="password"
          />
          {errors.password && (
            <div className="red">{errors.password.message}</div>
          )}
          <br />
          {/* <button type="submit">Submit</button> */}
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div className="red"> {errors.myform.message}</div>}
        </form>
      </div>
    </>
  );
}

export default App;
