import Button from "../Button";
import Container from "../Container";
import FooterLogo from "./FooterLogo";
import LinkFooter from "./LinkFooter";

export default function Footer() {
  return (
    <footer className="bg-[#252641] w-screen pb-10 pt-[74px]">
      <Container>
        <div className="w-6/12 mx-auto">
          <div className="flex items-center justify-center mb-[95px]">
            <FooterLogo />
            <div className="w-[82px] rotate-90 h-[1px] bg-secondary"></div>
            <h5 className="text-[22px] text-white font-semibold leading-[33px] tracking-[0.04em] ">
              Virtual Class <br /> for Zoom
            </h5>
          </div>
          <div className="mb-24">
            <h5 className="text-white/70 mb-5 text-[26px] font-medium text-center mt-5">
              Subscribe to get our Newsletter
            </h5>
            <div className="flex justify-center gap-5">
              <input
                type="email"
                placeholder="Your Email"
                className="px-5 rounded-full bg-transparent border border-secondary text-secondary focus:text-white outline-none focus:outline-dark-blue text-[20px]"
              />
              <Button variant="purple">Subscribe</Button>
            </div>
          </div>
          <ul className="flex items-center justify-center gap-3 mb-5">
            <LinkFooter href="Careers">Careers</LinkFooter>
            <div className="w-[17px] rotate-90 h-[1px] bg-secondary"></div>
            <LinkFooter href="Privacy">Privacy Policy</LinkFooter>
            <div className="w-[17px] rotate-90 h-[1px] bg-secondary"></div>
            <LinkFooter href="Terms">Terms & Conditions</LinkFooter>
          </ul>
          <p className="text-white/70 text-[22px] text-center">
            &copy; 2021 Class Technologies Inc.
          </p>
        </div>
      </Container>
    </footer>
  );
}
