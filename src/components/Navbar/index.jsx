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
    <div className="bg-[url('/background/navbar-bg.svg')] bg-cover bg-center">
      <Wrapper>
        <div className="navbar">
          <div className="navbar-start w-full hidden lg:flex">
            <img className="w-[200px] h-[37px]" src="/Logo.svg" alt="logo" />

            <ul className="menu text-white menu-horizontal px-1 ml-8">{links}</ul>
          </div>
          <div className="navbar-end">
           <Button>Book a table</Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
