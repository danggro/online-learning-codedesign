import TextYellow from "@/components/TextYellow";
import FeatureTitle from "../FeatureTitle";
import Image from "next/image";
import DiscussionsPic from "@/public/features/Discussions.png";
import TextDesc from "@/components/TextDesc";

export default function Discussions() {
  return (
    <div className="flex pl-[24px] justify-between mb-[140px]">
      <Image src={DiscussionsPic} alt="" className="min-w-[755px]" />
      <div className="max-w-[540px] mt-[116px] ">
        <div className="w-9/12">
          <FeatureTitle>
            One-on-One <TextYellow>Discussions</TextYellow>
          </FeatureTitle>
        </div>
        <div className="mt-5">
          <TextDesc fs="22">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </TextDesc>
        </div>
      </div>
    </div>
  );
}
