import Banner from "~/components/Banner";
import Hero from "~/components/Hero";
import Menu from "~/components/Menu";
import Story from "~/components/Story";
import Products from "~/components/Products";
import ContactUs from "~/components/ContactUs";
import Footer from "~/components/Footer";
import { getSessionDetails } from "~/data/session.server";

export default function Index() {
  return (
    <div>
      <Hero />
      <Banner content="Until I discovered cooking, I was never really interested in anything! - Radhe & Krishna (Founders)" />
      <Products />
      <Story />
      <Banner content="We are opening a restaurant soon!" />
      <Menu />
      <Banner content="We are opening a restaurant soon!" />
      <ContactUs />
    </div>
  );
}

