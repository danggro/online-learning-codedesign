import TextYellow from "@/components/TextYellow";
import FeatureTitle from "../FeatureTitle";
import Image from "next/image";
import QuizzesPic from "@/public/features/Quizzes.png";
import TextDesc from "@/components/TextDesc";

export default function Quizzes() {
  return (
    <div className="flex px-[55px] justify-between mb-[160px]">
      <Image src={QuizzesPic} alt="" className="min-w-[640px]" />
      <div className="max-w-[596px] mt-[136px] ">
        <div className="w-7/12">
          <FeatureTitle>
            Assessments, <TextYellow>Quizzes</TextYellow>, Tests
          </FeatureTitle>
        </div>
        <div className="mt-5">
          <TextDesc fs="22">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </TextDesc>
        </div>
      </div>
    </div>
  );
}
