import { Examples } from "@marketing/home/components/Examples";
import { Features } from "@marketing/home/components/Features";
import { Hero } from "@marketing/home/components/Hero";
import { How } from "@marketing/home/components/How";
import { Newsletter } from "@marketing/home/components/Newsletter";
import { Testimonials } from "@marketing/home/components/Testimonials";
import { Why } from "@marketing/home/components/Why";
import "./home.page.css";
export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <How />
      <Examples />
      <Features />
      <Newsletter />
      <Testimonials />
    </>
  );
}
