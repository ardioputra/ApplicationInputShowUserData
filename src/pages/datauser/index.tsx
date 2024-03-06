import { useAppSelector } from "../../redux/store";
import NavBar from "../navbar";

export default function DataUser() {
  const users = useAppSelector((state) => state.datauser.userList);
  return (
    <>
      <NavBar />
      <div className="h-[400px] w-[700px] flex justify-center items-center bg-cyan-300 mt-10 rounded-lg">
        <table className="table-auto text-black border-2 border-sky-500">
          <thead>
            <tr>
              <th className="border-2 border-sky-500">Name</th>
              <th className="border-2 border-sky-500">Email</th>
              <th className="border-2 border-sky-500">Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border-2 border-sky-500">{user.name}</td>
                <td className="border-2 border-sky-500">{user.email}</td>
                <td className="border-2 border-sky-500">{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
