import { Link } from "react-router-dom";
import HeaderBurguer from "./header_burguer";
import CustomIcon from "./custom_icon";

const links = [
 
  {
    title: "Crear Evento",
    url: "/crear-evento",
  }
];
const loginLinks = [
  {
    title: "Log in",
    url: "/login",
  },
  {
    title: "Sign up",
    url: "/",
  },
];

const text_behavior = "text-sm sm:text-base ";

export default function Header() {
  return (
    <div className="relative ">
     
      <header
        className={"flex flex-row justify-between px-8 py-4 text-[#4A306D] ".concat(
          text_behavior
        )}
      >
        <Link className="flex flex-row gap-4 items-center" to="/">
          <div className="px-4 py-4 border-2 rounded-full border-[#4A306D]">
            <p>Logo</p>
          </div>
          <p >Aroud the corner</p>
        </Link>

        <div className="hidden lg:flex gap-2 cursor-pointer items-center ">
          {links.map(({ title, url }, index) => {
            return (
              <Link to={url} key={index} className="text-center">
                {" "}
                {title}
              </Link>
            );
          })}
        </div>

        <div className="flex gap-8">
          <div className="hidden sm:flex gap-2 items-center">
            {loginLinks.map(({ title, url }, index) => {
              return (
                <Link
                  key={index}
                  to={url}
                  className={"flex justify-center items-center text-center px-4 py-2 gap-2".concat(
                    index === 1 ? " border-2 rounded-2xl border-[#4A306D]" : ""
                  )}
                >
                  {index === 0 && <CustomIcon name="icon_user" />}
                  <p>{title}</p>
                </Link>
              );
            })}
          </div>
          <HeaderBurguer />
        </div>
      </header>
    </div>
  );
}
