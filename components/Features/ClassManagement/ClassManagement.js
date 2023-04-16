import TextYellow from "@/components/TextYellow";
import FeatureTitle from "../FeatureTitle";
import TextDesc from "@/components/TextDesc";
import ClassManagementPic from "@/public/features/ClassManagement.png";
import Image from "next/image";

export default function ClassManagement() {
  return (
    <section className="mb-[160px] px-[18px]">
      <div className="flex justify-between">
        <div className="max-w-[645px] mt-[152px] ">
          <div className="w-9/12">
            <FeatureTitle>
              <TextYellow>Class Managemnt</TextYellow> Tools for Educators
            </FeatureTitle>
          </div>
          <div className="mt-5 ">
            <TextDesc fs="22">
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </TextDesc>
          </div>
        </div>

        <Image src={ClassManagementPic} alt="" className="max-w-[808px]" />
      </div>
    </section>
  );
}
