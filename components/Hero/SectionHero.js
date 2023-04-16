import Button from "../Button";
import Container from "../Container";
import PlayButton from "./PlayButton";

export default function SectionHero() {
  return (
    <section id="Hero">
      <div className="ml-10 mt-[192px] w-5/12">
        <h1 className="text-dark-blue text-[54px] font-bold">
          <span className="text-primary">Studying</span> Online is now much
          easier
        </h1>
        <h4 className="text-2xl text-secondary mt-10 mb-[46px] pr-40">
          Skilline is an interesting platform that will teach you in more an
          interactive way
        </h4>
        <div className="flex items-center gap-10">
          <Button variant="orange">Join for free</Button>
          <div className="flex items-center gap-8 group">
            <div className="shadow-[2px_20px_60px_0_rgba(61,155,185,0.1)]  text-[#23BDEE] rounded-full group-hover:text-primary h-20">
              <PlayButton />
            </div>
            <a
              href="#"
              className="text-2xl text-dark-blue group-hover:underline "
            >
              Watch how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
