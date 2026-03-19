import { useGlobalContext } from "../context";
import { links } from "../../constants";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";


const Menu = () => {
  const { showMenu, setShowMenu } = useGlobalContext();

  return (
    <div className="fixed inset-0 top-0 left-0 z-40 w-screen h-screen backdrop-blur-md bg-black/60 flex-center flex-col text-center">
      <button 
        onClick={() => setShowMenu(!showMenu)}
        className="absolute top-5 right-8 text-3xl">
          <LiaTimesSolid/>
      </button>

      <div className="mb-20">
        {/* Links */}
       <ul className="text-2xl mb-16">
        {links.map((link) => (
          <li className="mb-6" key={link.label}>
            <a 
              href={link.path}
              onClick={() => setShowMenu(!showMenu)}>
                {link.label}
            </a>
          </li>
        ))}
      </ul>

        {/* Socials */}
      <div className="flex-center text-4xl gap-6">
        <a href="#"><BsFacebook/></a>
        <a href="#"><BsInstagram/></a>
      </div>
      </div>
    </div>
  );
};

export default Menu