import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { WhyIOI } from "../components/sections/WhyIOI";
import { Portfolio } from "../components/sections/Portfolio";
import { Technologies } from "../components/sections/Technologies";
import { Founders } from "../components/sections/Founders";
import { Process } from "../components/sections/Process";
import { Testimonials } from "../components/sections/Testimonials";
import { Blog } from "../components/sections/Blog";
import { FAQ } from "../components/sections/FAQ";
import { Contact } from "../components/sections/Contact";

import { scrollToId } from "../utils/helpers";

export function Home() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;

    if (state?.scrollTo) {
      setTimeout(() => {
        scrollToId(state.scrollTo!);
      }, 100);

      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Services />
      <WhyIOI />
      <Portfolio />
      <Technologies />
      <Founders />
      <Process />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
    </main>
  );
}