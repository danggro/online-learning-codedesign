import Image from "next/image";
import Container from "../Container";
import TestimonialPic from "@/public/testimonial/Right.png";
import LeftTestimonial from "./LeftTestimonial";

export default function SectionTestimonial() {
  return (
    <Container>
      <section className="mb-[160px]">
        <div className="px-[101px] flex justify-between gap-[158px]">
          <LeftTestimonial />
          <div className="min-w-[749px]">
            <Image src={TestimonialPic} alt="" />
          </div>
        </div>
      </section>
    </Container>
  );
}
