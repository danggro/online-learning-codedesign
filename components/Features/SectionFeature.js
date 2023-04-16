import Button from "../Button";
import Container from "../Container";
import SectionTitle from "../SectionTItle";
import TextDesc from "../TextDesc";
import TextYellow from "../TextYellow";
import ClassManagement from "./ClassManagement/ClassManagement";
import Discussions from "./Discussions/Discussions";
import Interface from "./Interface/Interface";
import Quizzes from "./Quizzes/Quizzes";
import Tools from "./Tools/Tools";

export default function SectionFeature() {
  return (
    <Container>
      <section id="Feature" className="px-[70px] mb-[160px]">
        <div className="text-center mb-[100px]">
          <SectionTitle>
            Our <TextYellow>Features</TextYellow>
          </SectionTitle>
          <div className="mt-5">
            <TextDesc fs="24">
              This very extraordinary feature, can make learning acivities more
              efficient
            </TextDesc>
          </div>
        </div>
        <Interface />
        <Tools />
        <Quizzes />
        <ClassManagement />
        <Discussions />
        <div className="text-center">
          <Button variant="transparent">See more features</Button>
        </div>
      </section>
    </Container>
  );
}
