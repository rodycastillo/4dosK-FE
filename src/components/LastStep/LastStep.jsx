import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import phrase from "../../assets/img/app/04/phrase.png";
import brand from "../../assets/img/common/logo_falabella.png";
import "./LastStep.styles.scss";
import { useNavigate } from "react-router-dom";

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
          <button onClick={handleReset}>Regresar</button>
        </div>
      </div>
      <div className="lastStep_brand">
        <img src={brand} alt="brand falabella" />
      </div>
    </div>
  );
};
