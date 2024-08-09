import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/pedro-jesus-386a6628a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/pedrovjesus",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/victor_agnesini/",
  },
];

const SocialNetworks = () => {
  return (
    <sections id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          target="_blank"
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </sections>
  );
};

export default SocialNetworks;
