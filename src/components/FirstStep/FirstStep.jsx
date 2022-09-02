import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import phrase from "../../assets/img/app/01/phrase.png";
import logo from "../../assets/img/common/logo_falabella.png";
import { Link } from "react-router-dom";
import "./FirstStep.styles.scss";

export const FirstStep = () => {
  const { action } = useContext(AppContext);

  const [userData, setUserData] = useState({
    names: "",
    lastname: "",
    email: "",
    age: false,
    allowData: false,
    termsAndConditions: false,
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(userData, null, 4));
    action({
      type: "STEP_TWO",
      payload: {
        step_one: false,
        step_two: true,
        step_three: false,
        step_four: false,
      },
    });
  };
  return (
    <div className="firstStep">
      <div className="firstStep_contain">
        <img
          src={phrase}
          className="firstStep_contain-phrase"
          alt="phrase logo"
        />
        <form onSubmit={handleSubmit} className="firstStep_contain-form">
          <div className="firstStep_contain-form-box">
            <h1>1</h1>
            <h3>
              INGRESA <br /> TUS DATOS{" "}
            </h3>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombres"
                name="names"
                value={userData.names}
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Apellidos"
                name="lastname"
                value={userData.lastname}
                onChange={handleChangeInput}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="E-mail"
                name="email"
                value={userData.email}
                onChange={handleChangeInput}
              />
            </div>
            <div className="firstStep_contain-form-box-age">
              <span>Eres mayor de edad:</span>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={true}
                    name="age"
                    onChange={handleChangeInput}
                  />{" "}
                  Sí
                </label>
                <label>
                  <input
                    type="radio"
                    value={false}
                    name="age"
                    onChange={handleChangeInput}
                  />{" "}
                  No
                </label>
              </div>
            </div>
            <p>
              Para convertirte en protagonista de este gran evento, debes
              aceptar que podamos utilizar libremente tu imagen así como dar
              conformidad de que eres mayor de edad. Todo esto declarado en los{" "}
              <Link
                to="#"
                onClick={() => {
                  window.open(
                    "https://www.falabella.com.pe/falabella-pe/static/staticContent1.jsp?active=14&id=cat200462",
                    "_blank"
                  );
                }}
              >
                Terminos y Condiciones
              </Link>{" "}
              .
            </p>
            <div className="firstStep_contain-form-box-allows">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="allowDataUser"
                  name="allowData"
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.checked,
                    })
                  }
                />
                <label className="form-check-label">
                  Acepto el uso de mi información para{" "}
                  <Link
                    to="#"
                    onClick={() => {
                      window.open(
                        "https://www.falabella.com.pe/falabella-pe/static/staticContent1.jsp?active=10&id=cat11330462",
                        "_blank"
                      );
                    }}
                  >
                    Fines adicionales
                  </Link>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={true}
                  id="termsAndConditions"
                  name="termsAndConditions"
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.checked,
                    })
                  }
                />
                <label className="form-check-label">
                  He leído y acepto los{" "}
                  <Link
                    to="#"
                    onClick={() => {
                      window.open(
                        "https://www.falabella.com.pe/falabella-pe/static/staticContent1.jsp?active=14&id=cat200462",
                        "_blank"
                      );
                    }}
                  >
                    Terminos y Condiciones
                  </Link>{" "}
                  y{" "}
                  <Link
                    to="#"
                    onClick={() => {
                      window.open(
                        "https://www.falabella.com.pe/falabella-pe/page/seguridad-y-privacidad",
                        "_blank"
                      );
                    }}
                  >
                    Política de privacidad
                  </Link>
                </label>
              </div>
            </div>
            <button type="submit" className="firstStep_contain-form-box-button">
              Siguiente
            </button>
          </div>
          <div className="firstStep_contain-form-brand">
            <img
              src={logo}
              className="firstStep_contain-form-brand-img"
              alt="logo brand falabella"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
