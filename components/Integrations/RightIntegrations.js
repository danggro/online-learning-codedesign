import Button from "../Button";
import SectionTitle from "../SectionTItle";
import TextDesc from "../TextDesc";
import TextYellow from "../TextYellow";

export default function RightIntegrations() {
  return (
    <div>
      <div className="flex gap-[30px] font-nunito items-center mb-[33px]">
        <div className="w-20 h-[2px] bg-dark-blue/50"></div>
        <h5 className="uppercase text-dark-blue/50 text-xl tracking-[0.2em]">
          integrations
        </h5>
      </div>
      <div className="w-8/12">
        <SectionTitle nunito>
          200+ educational tools and platform{" "}
          <TextYellow>integrations</TextYellow>
        </SectionTitle>
      </div>
      <div className="mt-[30px] mb-11 font-nunito">
        <TextDesc fs="24">
          Schoology has every tool your classroom needs and comes pre-integrated
          with more than 200+ tools, student information systems (SIS), and
          education platforms.
        </TextDesc>
      </div>
      <Button variant="transparent">See All Integrations</Button>
    </div>
  );
}
