import BlogContent from "@/containers/Blog/BlogContent";
import { MainContainer } from "@/themes/themes";

export default function BlogDetailsPage({ params }) {
  return (
    <MainContainer maxWidth='md'>
      <BlogContent />
    </MainContainer>
  );
}
