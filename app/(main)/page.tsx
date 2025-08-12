import About from "./home/about/about";
import Core_Values from "./home/core-values/core-values";
import Credo from "./home/credo/credo";
import Donate from "./home/donate/donate";
import Geographical_Reach from "./home/geographical-reach/geographical-reach";
import Hero from "./home/hero/hero";
import Impact from "./home/impact/impact";
import Objective from "./home/objective/objective";
import Partnership from "./home/partnership/partnership";
import Programs from "./home/programs/programs";
import Target_Groups from "./home/target-groups/target-groups";

export default async function Home() {

  return (
    <div className="bg-[#F9FFFC] overflow-hidden w-full">
      <Hero />
      <About />
      <Credo />
      <Donate />
      <Objective />
      <Core_Values />
      <Programs />
      <Target_Groups />
      <Geographical_Reach />
      <Partnership />
      <Impact />
    </div>
  );
}
