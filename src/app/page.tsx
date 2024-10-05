import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import SkillComponent from "@/components/SkillComponent";
import SkillSection from "@/components/SkillSection";
export default function Home() {
  return (
    <main className=" px-[5%] md:px-[12%] h-[300vh]">
      <HeroSection />
      <SkillSection />
      <ProjectSection />
    </main>
  );
}
