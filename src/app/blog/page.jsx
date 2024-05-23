import BlogSection from "@/containers/Blog/BlogSection";
import HeroSection from "@/containers/Blog/HeroSection";
import { MainContainer } from "@/themes/themes";

export default function Blog() {
  return (
    <MainContainer maxWidth="xl">
      <HeroSection />
      <BlogSection />
    </MainContainer>
  );
}
