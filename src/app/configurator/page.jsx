import SelectIndustrySection from "@/containers/Configurator/SelectIndustrySection";
import { MainContainer } from "@/themes/themes";

export default function ConfiguratorPage() {
  return (
    <MainContainer maxWidth='xl'>
      <SelectIndustrySection />
    </MainContainer>
  );
}
