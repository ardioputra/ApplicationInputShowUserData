import NavBar from "../navbar";

export default function Register() {
  return <>
  <NavBar />
  <div className="items-center h-[400px] w-[700px] flex justify-center items-center bg-cyan-300 mt-10 rounded-lg">
        <div>
          <p className="text-black flex ml-5 text-4xl mb-10">Page Register</p>
          <div className="text-left ml-5 ">
            <p>Name</p>
            <input className="mb-5 rounded-md" type="text" />
            <p>Email</p>
            <input className="mb-5 rounded-md" type="text" />
            <p>Password</p>
            <input className="mb-5 rounded-md" type="text"/>
            <button className="flex">Submit</button>
          </div>
        </div>
  </div>
  </>;
}
