import TextYellow from "@/components/TextYellow";
import FeatureTitle from "../FeatureTitle";
import ItemInterface from "./ItemInterface";
import One from "./One";
import Image from "next/image";
import InterfacePic from "@/public/features/Interface.png";
import Three from "./Three";
import Two from "./Two";

export default function Interface() {
  return (
    <div className="flex justify-between gap-[123px] mb-[160px]">
      <div className="h-max">
        <Image src={InterfacePic} alt="" className="" />
      </div>

      <div className="w-5/12 mt-[117px] pr-10">
        <FeatureTitle>
          A <TextYellow>user interface</TextYellow> designed for the classroom
        </FeatureTitle>
        <ul className="mt-[50px] flex flex-col gap-10">
          <ItemInterface
            icon={<One />}
            desc="Teachers don't get lost in the grid view and have a dedicated Podium space."
          />
          <ItemInterface
            icon={<Two />}
            desc="TA's and presenters can be moved to the front of the class.
            "
          />
          <ItemInterface
            icon={<Three />}
            desc="Teachers can easily see all students and class data at one time."
          />
        </ul>
      </div>
    </div>
  );
}
