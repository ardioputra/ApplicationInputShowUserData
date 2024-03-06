import NavBar from "../navbar";
import { add } from "../../redux/datauser/datauserSlice";
import { useRef } from "react";
import { AppDispatch } from "../../redux/store";
import DataUser from "../datauser";

export default function Register() {
  const dispatch = AppDispatch();
  const name = useRef<string>("");
  const email = useRef<string>("");
  const password = useRef<string>("");

  return (
    <>
      <NavBar />
      <div className="items-center h-[400px] w-[700px] flex justify-center bg-cyan-300 mt-10 rounded-lg">
        <div>
          <p className="text-black flex ml-5 text-4xl mb-10">Page Register</p>
          <div className="text-left ml-5 ">
            <p>Name</p>
            <input
              name="name"
              className="mb-5 rounded-md"
              type="text"
              onChange={(e) => (name.current = e.target.value)}
              placeholder="Name"
            />
            <p>Email</p>
            <input
              name="email"
              className="mb-5 rounded-md"
              type="text"
              onChange={(e) => (email.current = e.target.value)}
              placeholder="Email"
            />
            <p>Password</p>
            <input
              name="password"
              className="mb-5 rounded-md"
              type="password"
              onChange={(e) => (password.current = e.target.value)}
              placeholder="Password"
            />
            <button
              className="flex"
              onClick={() =>
                dispatch(
                  add({
                    name: name.current,
                    email: email.current,
                    password: password.current,
                  })
                )
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <DataUser/>
    </>
  );
}
