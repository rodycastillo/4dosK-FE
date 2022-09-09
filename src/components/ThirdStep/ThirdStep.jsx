import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FormContext } from "../../context/FormContext";
import axios from "axios";
import phrase from "../../assets/img/app/03/phrase.png";
import brand from "../../assets/img/common/logo_falabella.png";
import "./ThirdStep.styles.scss";

export const ThirdStep = () => {
  const { action } = useContext(AppContext);
  const { form } = useContext(FormContext);
  const [comentario, setComentario] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsDisabled(true);
      const bodyFormData = new FormData();
      bodyFormData.append("nombres", form.nombres);
      bodyFormData.append("apellidos", form.apellidos);
      bodyFormData.append("email", form.email);
      bodyFormData.append("mayor_edad", form.mayor_edad);
      bodyFormData.append("uso_informacion", form.uso_informacion);
      bodyFormData.append("terminos_politicas", form.terminos_politicas);
      bodyFormData.append("foto", form.foto);
      bodyFormData.append("comentario", comentario);
      await axios.post(
        "https://falabella42k.com/api/index.php/lead/set",
        bodyFormData
      );
      await action({
        type: "STEP_THREE",
        payload: {
          step_one: false,
          step_two: false,
          step_three: false,
          step_four: true,
        },
      });
      setIsDisabled(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setComentario(e.target.value);
  };

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
            disabled={isDisabled}
            value={comentario}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={isDisabled}>
            Enviar
          </button>
          {isDisabled && (
            <div className=" text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </form>
        <div className="thirdStep_contain-brand">
          <img src={brand} alt="brand falabella" />
        </div>
      </div>
    </div>
  );
};
