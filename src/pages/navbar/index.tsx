import "/src/index.css";

export default function NavBar() {
  return (
    <header className="bg-emerald-400 fixed top-0 left-0 w-full h-20 flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="" className="text-white text-lg py-10">Network Call Practice</a>
          </div>
          <div className="flex items-center mt-0">
            <button id="garisTiga" name="garisTiga" type="button" className="block absolute right-1">
              <span className="w-[20px] h-[2px] mt-2 block bg-slate-50"></span>
              <span className="w-[20px] h-[2px] my-1 block bg-slate-50"></span>
              <span className="w-[20px] h-[2px] my-1 block bg-slate-50"></span>
            </button>

            <nav className="ml-0">
              <ul>
                <li>
                  <a href="./" className="py-2 mr-8">User</a>
                  <a href="./register" className="py-2 mr-48">Register</a>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
}
