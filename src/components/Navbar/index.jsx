import Button from "../ui/Button";
import Wrapper from "../Wrapper";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Portfolio</a>
      </li>
      <li>
        <a href="#">Clients</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </>
  );
  return (
    <div className="bg-[url('/background/navbar-bg.svg')] bg-cover bg-center px-4">
      <Wrapper>
        <div className="navbar">
          <div className="navbar-start w-full ">
            <img className="w-[200px] h-[37px]" src="/Logo.svg" alt="logo" />

            <ul className="menu hidden lg:flex text-white menu-horizontal px-1 ml-4">
              {links}
            </ul>
          </div>
          <div className="navbar-end ">
            <Button className="hidden lg:flex">Book a table</Button>
            <div className="drawer drawer-end lg:hidden">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex justify-end">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button  bg-none btn-primary"
                >
                  <img src="/menuIcon.svg" alt="" />
                </label>
              </div>
              <div className="drawer-side  z-30">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-red-800 text-white min-h-full w-80 p-4">
                  {links}
                  <div className="mx-auto">
                    <Button className="mt-6 text-black">Book a table</Button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
