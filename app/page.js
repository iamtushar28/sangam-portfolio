import About from "./components/About";
import Hero from "./components/Hero";
import Mobile_hero from "./components/Mobile_hero";
import Services from "./components/Services";
import Specialities from "./components/Specialities";

export default function Home() {
  return (
    <>
      <Hero />
      <Mobile_hero />
      <Specialities/>
      <About/>
      <Services/>
    </>
  );
}
