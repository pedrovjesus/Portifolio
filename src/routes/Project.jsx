import React, { useEffect, useState } from "react";
import "../styles/routes/Project.sass";

//externos
import { Link } from "react-router-dom";
import { register } from "swiper/element-bundle";
import { Swiper, SwiperSlide } from "swiper/react";

//styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

register();
function App() {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const data = [
    {
      id: 1,
      name: "Quiz App",
      description:
        "Um projeto simples aplicando react para um quiz sobre conhecimentos em front-end",
      img: "https://www.svgrepo.com/show/41399/test.svg",
      link: "https://github.com/pedrovjesus/React---Quiz",
    },
    {
      id: 2,
      name: "Weather",
      description:
        "Primeiro projeto que tive contato com a api de previsão de tempo",
      img: "https://www.svgrepo.com/show/520207/weather-forecast.svg",
      link: "https://github.com/pedrovjesus/Weather-app",
    },
    {
      id: 3,
      name: "Multi-step type form",
      description:
        "Primeiro projeto que tive contato com typescript e react",
      img: "https://www.svgrepo.com/show/532216/square-list.svg",
      link: "https://github.com/pedrovjesus/multistep-form-ts",
    },
    {
      id: 4,
      name: "Portifolio",
      description:
        "Codigo desse portifolio que foi feito em react e sass",
      img: "https://www.svgrepo.com/show/532362/user.svg",
      link: "https://github.com/pedrovjesus/Portifolio",
    },
    {
      id: 5,
      name: "API de autenticação",
      description:
        "Pequena Api para aplicar conceitos de autenticação e JWT",
      img: "https://www.svgrepo.com/show/532323/lock-alt.svg",
      link: "https://github.com/pedrovjesus/auth-user",
    },
    {
      id: 6,
      name: "Send Mail",
      description:
        "Projeto para aplicar o uso do ORM typeform e envio de e-mail",
      img: "https://www.svgrepo.com/show/533210/mail-open.svg",
      link: "https://github.com/pedrovjesus/SendMailApi",
    },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidesPerView(1);
      } else if (window.innerWidth > 721 && window.innerWidth < 900) {
        setSlidesPerView(2);
      }
        else {
        setSlidesPerView(3);
      }
    }

    handleResize(); // Para definir inicialmente o número correto de slides

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="card-project">
      <h1 className="projetos">Meus Projetos</h1>
      <div className="container">
        <Swiper
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          navigation
          loop={true}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card">
                <h1 className="name-item">{item.name}</h1>
                <img src={item.img} alt="" className="imagem" />
                <p>{item.description}</p>
                <a className="btn" href={item.link} target="_blank" rel="noopener noreferrer">
                  Veja
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link to="/" className="back">
        Voltar
      </Link>
    </div>
  );
}

export default App;
