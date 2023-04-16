import Container from "../Container";
import Airbnb from "./Logo/Airbnb";
import Amazon from "./Logo/Amazon";
import Facebook from "./Logo/Facebook";
import Google from "./Logo/Google";
import Grab from "./Logo/Grab";
import Netflix from "./Logo/Netflix";

export default function SectionCompanies() {
  return (
    <section className="mt-[479px] mb-[160px]">
      <Container>
        <h2 className="text-center text-secondary text-[28px] mb-8">
          Trusted by 5,000+ Companies Wordlwide
        </h2>
        <div className="mx-auto flex items-center w-10/12 px-10 gap-[75px]">
          <Google />
          <Netflix />
          <Airbnb />
          <Amazon />
          <Facebook />
          <Grab />
        </div>
      </Container>
    </section>
  );
}
