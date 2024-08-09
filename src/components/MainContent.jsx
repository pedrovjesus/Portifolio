import "../styles/components/maincontent.sass";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import TechContainer from "./TechContainer";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;
