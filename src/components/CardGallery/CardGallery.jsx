import React from "react";
import logo from "../../assets/img/common/logo_falabella_high.png";
import "./CardGallery.styles.scss";

export const CardGallery = ({ props, bg }) => {
  const sectionStyle = {
    // width: "100%",
    // height: "400px",
    backgroundImage: `url(${bg})`,
  };
  return (
    <div className="CardGallery">
      <div className="CardGallery_flex">
        <div className="CardGallery_flex-boxImg">
          <img
            src={props.foto}
            className="img-fluid"
            alt={`Foto user 0${props.id}`}
          />
        </div>
        <div className="CardGallery_flex-content" style={sectionStyle}>
          <div className="CardGallery_flex-content-phrase">
            <p>{props.comentario}</p>
            <h5>
              {props.nombres}
              {props.apellidos}
            </h5>
          </div>
          <img
            src={logo}
            className="CardGallery_flex-content-logo"
            alt="Logo falabella"
          />
        </div>
      </div>
    </div>
  );
};
