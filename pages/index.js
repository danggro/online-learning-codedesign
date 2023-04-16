import SectionAbout from "@/components/About/SectionAbout";
import SectionCS from "@/components/CloudSoftware/SectionCS";
import SectionCompanies from "@/components/Companies/SectionCompanies";
import SectionFeature from "@/components/Features/SectionFeature";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SectionIntegrations from "@/components/Integrations/SectionIntegration";
import SectionNews from "@/components/News/SectionNews";
import SectionTestimonial from "@/components/Testimonial/SectionTestimonial";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Skilline | Online Learning</title>
      </Head>
      <Header />
      <SectionCompanies />
      <SectionCS />
      <SectionAbout />
      <SectionFeature />
      <SectionIntegrations />
      <SectionTestimonial />
      <SectionNews />
      <Footer />
    </>
  );
}
