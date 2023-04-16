import Image from "next/image";
import Container from "../Container";
import OneDrive from "@/public/integrations/OneDrive.png";
import Dropbox from "@/public/integrations/Dropbox.png";
import Drive from "@/public/integrations/Drive.png";
import Teams from "@/public/integrations/Teams.png";
import RightIntegrations from "./RightIntegrations";

export default function SectionIntegrations() {
  return (
    <Container>
      <section className="mb-[160px]">
        <div className="px-[132px] flex justify-between gap-[270px]">
          <div className="min-w-[478px] flex flex-wrap gap-y-[84px]">
            <div className="w-6/12">
              <Image src={OneDrive} alt="" />
            </div>
            <div className="flex items-end justify-center w-6/12">
              <Image src={Dropbox} alt="" />
            </div>
            <div className="grid w-6/12 place-items-center">
              <Image src={Drive} alt="" />
            </div>
            <div className="grid w-6/12 place-items-end">
              <Image src={Teams} alt="" />
            </div>
          </div>
          <RightIntegrations />
        </div>
      </section>
    </Container>
  );
}
