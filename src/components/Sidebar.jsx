import Me from "../img/portifolio.jpeg";
import SocialNetworks from "./SocialNetworks";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Me} alt="Pedro Jesus" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" download="curriculo.pdf" target="_blank" className="btn">
        Download curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
