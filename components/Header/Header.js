import Image from "next/image";
import Container from "../Container";
import SectionHero from "../Hero/SectionHero";
import NavBar from "../Navigation/NavBar";
import BG from "./BG";
import headerPic from "@/public/header/header-pic.png";

export default function Header() {
  return (
    <header className="">
      <BG />
      <Image src={headerPic} alt="" className="absolute top-0 bottom-0" />
      <div className="relative">
        <Container>
          <NavBar />
          <SectionHero />
        </Container>
      </div>
    </header>
  );
}
