import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import phrase from "../../assets/img/app/03/phrase.png";
import brand from "../../assets/img/common/logo_falabella.png";
import "./ThirdStep.styles.scss";

export const ThirdStep = () => {
  const { action } = useContext(AppContext);
  const [comentario, setComentario] = useState("");
  const [data, setData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify({ ...data, comentario }));
    action({
      type: "STEP_THREE",
      payload: {
        step_one: false,
        step_two: false,
        step_three: false,
        step_four: true,
      },
    });
  };
  const handleChange = (e) => {
    setComentario(e.target.value);
  };

  const getLocalData = () => {
    const usr = localStorage.getItem("usr_42k");
    if (usr) {
      console.log(usr);
      setData(JSON.parse(usr));
    }
  };

  useEffect(() => {
    getLocalData();
  }, []);
  return (
    <div className="thirdStep">
      <div className="thirdStep_log">
        <img src={phrase} alt="phrase falabella" />
      </div>
      <div className="thirdStep_contain">
        <form className="thirdStep_contain-form" onSubmit={handleSubmit}>
          <h1>3</h1>
          <p>
            Ahora cuéntanos porqué consideras tú <br />
            que ser parte de esta gran maratón
          </p>
          <h3>ES MUCHO MÁS QUE CORRER:</h3>
          <textarea
            name="comentario"
            id="comentarioInput"
            rows="8"
            cols={10}
            value={comentario}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
        <div className="thirdStep_contain-brand">
          <img src={brand} alt="brand falabella" />
        </div>
      </div>
    </div>
  );
};
