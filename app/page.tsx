import { Hero, Grid, RecentProject } from "@/components"
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main id="#home" className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto  sm:px-10 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Clients/>
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
