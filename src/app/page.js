import Intro from "../components/Herro/Herro";
import Statistics from "../components/Status/status";
import Mobile from "../components/Mobile/Mobile";
import Restorant from "../components/OurTop/OurTop";
import Purchase from "../components/Purchase/Purchase";
import Discount from "../components/Discount/Discount";
import Aside from "../components/Aside/Aside";

export default function Home() {
  return (
    <main>
      <Intro />
      <Statistics />
      <Mobile/>
      <Restorant/>
      <Purchase/>
      <Aside/>
      <Discount/>
    </main>
  );
}
