import Link from "next/link";
import Container from "../Container";
import SectionTitle from "../SectionTItle";
import TextDesc from "../TextDesc";
import TextYellow from "../TextYellow";
import CardAbout from "./CardAbout";
import Image from "next/image";
import about3 from "@/public/about/about-3.png";

export default function SectionAbout() {
  return (
    <section id="About">
      <Container>
        <div className="w-10/12 mb-[160px] px-10 mx-auto text-center">
          <SectionTitle>
            What is <TextYellow>Skilline?</TextYellow>
          </SectionTitle>
          <div className="w-10/12 px-10 mx-auto mt-8 mb-20">
            <TextDesc fs="24">
              Skilline is a platform that allows educators to create online
              classes whereby they can store the course materials online; manage
              assignments, quizzes and exams; monitor due dates; grade results
              and provide students with feedback all in one place.
            </TextDesc>
          </div>
          <div className="flex gap-[100px]">
            <CardAbout
              src="about/about-1.png"
              title="FOR INSTRUCTORS"
              but="Start a class today"
            />
            <CardAbout
              src="about/about-2.png"
              title="for students"
              but="Enter access code"
            />
          </div>
        </div>
        <div className="flex  mb-[160px] justify-between px-[86px]">
          <div className="relative w-6/12">
            <SectionTitle>
              Everything you can do in a physical classroom,{" "}
              <TextYellow>you can do with Skilline</TextYellow>
            </SectionTitle>
            <div className="pr-16 mb-4 mt-11">
              <TextDesc fs="24">
                Skilline&apos;s school management software helps traditional and
                online schools manage scheduling, attendance, payments and
                virtual classrooms all in one secure cloud-based system.
              </TextDesc>
            </div>
            <Link
              href={"/#"}
              className="text-[22px] text-secondary hover:underline"
            >
              Learn More
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="746"
              height="262"
              fill="none"
              viewBox="0 0 746 262"
              className="absolute -top-3 -left-6 -z-10 "
            >
              <circle cx="36.5" cy="36.5" r="36.5" fill="#F4B767"></circle>
              <circle cx="731" cy="247" r="15" fill="#F4B767"></circle>
            </svg>
          </div>
          <Image src={about3} alt="" />
        </div>
      </Container>
    </section>
  );
}
