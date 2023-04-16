import TextYellow from "@/components/TextYellow";
import FeatureTitle from "../FeatureTitle";
import TextDesc from "@/components/TextDesc";
import ToolsPic from "@/public/features/Tools.png";
import Image from "next/image";

export default function Tools() {
  return (
    <section className="mb-[160px] px-[69px]">
      <div className="flex justify-between">
        <div className="w-6/12 mt-[189px] ">
          <div className="w-6/12">
            <FeatureTitle>
              <TextYellow>Tools</TextYellow> For Teachers And Learners
            </FeatureTitle>
          </div>
          <div className="w-9/12 mt-5">
            <TextDesc fs="22">
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
            </TextDesc>
          </div>
        </div>

        <Image src={ToolsPic} alt="" />
      </div>
    </section>
  );
}
