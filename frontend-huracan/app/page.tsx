import Hero from "./components/home/Hero";
import Welcome from "./components/home/Welcome";
import RegistrationNotice from "./components/home/RegistrationNotice";
import Platform from "./components/home/Platform";
import Stats from "./components/home/Stats";
import History from "./components/home/History";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <RegistrationNotice />
      <Platform />
      <Stats />
      <History />
    </>
  );
}
