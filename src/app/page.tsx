import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import SkillComponent from "@/components/SkillComponent";
import SkillSection from "@/components/SkillSection";
export default function Home() {
  return (
    <main className="">
      <div className="px-[5%] md:px-[12%]">
        {" "}
        <HeroSection />
        <SkillSection />
        <ProjectSection />
      </div>
      <Footer />
    </main>
  );
}
