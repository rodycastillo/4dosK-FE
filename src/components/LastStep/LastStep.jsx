import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import phrase from "../../assets/img/app/04/phrase.png";
import brand from "../../assets/img/common/logo_falabella.png";
import arrowLeft from "../../assets/img/common/arrow_left.svg";
import "./LastStep.styles.scss";

export const LastStep = () => {
  const { action } = useContext(AppContext);
  const navigate = useNavigate();
  const handleReset = () => {
    navigate("/");
    return action({
      type: "STEP_FOUR",
      payload: {
        step_one: true,
        step_two: false,
        step_three: false,
        step_four: false,
      },
    });
  };
  return (
    <div className="lastStep">
      <div className="lastStep_contain">
        <button className="lastStep_contain-btnBack" onClick={handleReset}>
          <img src={arrowLeft} alt="arrowLeft icon" />
        </button>
        <div className="lastStep_contain-phrase">
          <img src={phrase} alt="phrase falabella" />
        </div>
        <div className="lastStep_contain-congrats">
          <h1>¡Felicitaciones!</h1>
          <p>Ya eres un PROTAGONISTA de esta gran maratón.</p>
          <p>
            El día de la carrera podrás ver tu imagen <br />
            en una de nuestras piezas publicitarias
          </p>
        </div>
      </div>
      <div className="lastStep_brand">
        <img src={brand} alt="brand falabella" />
      </div>
    </div>
  );
};
