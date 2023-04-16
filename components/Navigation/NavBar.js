import { useEffect } from "react";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

export default function NavBar() {
  useEffect(() => {
    window.onscroll = function () {
      const header = document.querySelector("#navigation");
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
      } else {
        header.classList.remove("navbar-fixed");
      }
    };
  }, []);

  return (
    <nav
      id="navigation"
      className="fixed px-[100px] transition-all top-0 right-0 w-full mt-[60px] flex justify-between"
    >
      <NavLeft />
      <NavRight />
    </nav>
  );
}
