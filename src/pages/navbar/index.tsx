import "/src/index.css";

export default function NavBar() {
  return (
    <nav className="flex justify-center h-[100px]">
      <div className="w-[1240px] flex items-center">
        <div className="flex items-center w-[577px] justify-between">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/random-logo-png-transparent.png"
            alt="logo"
          />
          <div className="flex w-[340px] justify-between">
            <p>Data User</p>
            <p>Register</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
