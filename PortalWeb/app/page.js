import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home1/About";
import Banner from "@/components/sections/home1/Banner";
import Services from "@/components/sections/home1/Services";
import Team from "@/components/sections/home1/Team";
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs";

export default function Home() {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Banner />
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
    </Layout>
  );
}
