import Button from "../Button";
import TextDesc from "../TextDesc";

export default function LeftIntegrations() {
  return (
    <div>
      <div className="flex gap-[30px] font-nunito items-center mb-[33px]">
        <div className="w-20 h-[2px] bg-dark-blue/50"></div>
        <h5 className="uppercase text-dark-blue/50 text-xl tracking-[0.2em]">
          Testimonial
        </h5>
      </div>
      <h2 className="font-bold text-[60px] text-dark-blue font-nunito">
        What they Say?
      </h2>
      <div className="mt-[30px] mb-11 pr-10">
        <TextDesc fs="24">
          Skilline has got more than 100k positive ratings from our users around
          the world.
          <br />
          <br />
          Some of the students and teachers were greatly helped by the Skilline.
          <br />
          <br />
          Are you too? Please give your assessment
        </TextDesc>
      </div>
      <Button variant="transparent">Write your assessment</Button>
    </div>
  );
}
