import Button from "../Button";
import NavItemLink from "./NavItemLink";

export default function NavRight() {
  return (
    <div className="flex gap-[106px] items-center">
      <ul className="flex gap-20">
        <NavItemLink href="#Home">Home</NavItemLink>
        <NavItemLink href="#Careers">Careers</NavItemLink>
        <NavItemLink href="#News">Blog</NavItemLink>
        <NavItemLink href="#About">About Us</NavItemLink>
      </ul>
      <div className="flex gap-[34px]">
        <Button variant="white">Login</Button>
        <Button variant="orange">Sign Up</Button>
      </div>
    </div>
  );
}
