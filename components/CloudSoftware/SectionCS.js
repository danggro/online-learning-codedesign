import Container from "../Container";
import SectionTitle from "../SectionTItle";
import TextDesc from "../TextDesc";
import TextYellow from "../TextYellow";
import CardCS from "./CardCS";
import Calendar from "./Icon/Calendar";
import Contracts from "./Icon/Contracts";
import People from "./Icon/People";

export default function SectionCS() {
  return (
    <section className="mb-[160px]">
      <Container>
        <div className="w-6/12 mx-auto text-center mb-[160px]">
          <SectionTitle>
            All-In-One <TextYellow>Cloud Software.</TextYellow>
          </SectionTitle>
          <div className="px-5 mt-5 ">
            <TextDesc fs="24">
              Skilline is one powerful online software suite that combines all
              the tools needed to run a successful school or office.
            </TextDesc>
          </div>
        </div>
        <div className="flex gap-[60px] px-10 w-11/12 mx-auto">
          <CardCS
            icon={<Contracts />}
            title="Online Billing, Invoicing, & Contracts"
            desc="Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts"
          />
          <CardCS
            icon={<Calendar />}
            title="Easy Scheduling & Attendance Tracking"
            desc="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
          />
          <CardCS
            icon={<People />}
            title={`Customer Tracking`}
            desc="Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization "
            one
          />
        </div>
      </Container>
    </section>
  );
}
