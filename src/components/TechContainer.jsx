import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiMongodb,
  DiLinux,
} from "react-icons/di";

import "../styles/components/techcontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    desc: "Criação de paginas semânticas e estruturadas",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    desc: "Estilização de paginas com layouts atrativos",
  },
  {
    id: "js",
    name: "JAVASCRIPT",
    icon: <DiJsBadge />,
    desc: "Criar dinamicidade em paginas e manipulação com DOM",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    desc: "Criar sistemas funcionais e API, e usar frameworks como express",
  },
  {
    id: "mysql",
    name: "MYSQL",
    icon: <DiMysql />,
    desc: "Atualmente estou estudando banco relacional e já tenho conhecimento em estrutura MVC",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    desc: "Tenho conhecimento em como criar paginas dinâmicas",
  },
  {
    id: "mongo",
    name: "MongoDB",
    icon: <DiMongodb />,
    desc: "Tenho um pouco de conhecimento em banco NoSQL usando mongoose",
  },
  {
    id: "linux",
    name: "Linux",
    icon: <DiLinux />,
    desc: "Habilidade em administração de sistemas Linux, incluindo instalação, configuração e manutenção.",
  },
];

const TechContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technologies-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technologies-info">
              <h3>{tech.name}</h3>
              <p>{tech.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechContainer;
