import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import phrase from "../../assets/img/home/phrase.png";
import logo from "../../assets/img/common/logo_falabella.png";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    return navigate("/app");
  };
  return (
    <div className="contain">
      <div className="contain_box">
        <div className="contain_box-bg">
          <div className="contain_box-bg-imgs">
            <img src={phrase} className="pl-3" alt="phrase img" />
            <img src={logo} alt="logo falabella" />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p className="px-5 p-0 m-0">
            Conviértete en PROTAGONISTA de este gran evento.
          </p>
          <button onClick={handleClick}>EMPEZAR</button>
        </div>
      </div>
    </div>
  );
};
