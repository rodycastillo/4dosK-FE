import React from "react";
import logo from "../../assets/img/common/logo_falabella_high.png";
import "./CardGallery.styles.scss";

export const CardGallery = ({ props, bg, scss }) => {
  const value = 4;
  const CardStyle = {
    width: scss === value ? `calc(1080px)` : `calc(1080px / 2)`,
    height: scss === value ? `500px` : `370px`,
  };
  const CardStyle_bx = {
    width: scss === value ? `calc(1080px/2)` : `calc(1080px / 4)`,
  };
  const CardStyle_bx_cm = {
    fontSize: scss === value ? `63px` : `47px`,
    lineHeight: scss === value ? `63px` : `47px`,
  };
  const CardStyle_bx_head = {
    fontSize: scss === value ? `32px` : `25px`,
  };
  const CardStyle_logo = {
    width: scss === value ? `80px` : `40px`,
    height: scss === value ? `120px` : `60px`,
  };
  const bgStyle = {
    backgroundImage: `url(${bg})`,
  };
  return (
    <div className="CardGallery" style={CardStyle}>
      <div className="CardGallery_flex">
        <div className="CardGallery_flex-boxImg" style={CardStyle_bx}>
          <img
            src={props.foto_resize}
            className="img-fluid"
            alt={`Foto user 0${props.id}`}
          />
        </div>
        <div
          className="CardGallery_flex-content"
          style={{ ...bgStyle, ...CardStyle_bx }}
        >
          <div className="CardGallery_flex-content-phrase">
            <p style={CardStyle_bx_cm}>{props.comentario}</p>
            <h5
              style={CardStyle_bx_head}
            >{`${props.nombres} ${props.apellidos}`}</h5>
          </div>
          <img
            src={logo}
            className="CardGallery_flex-content-logo"
            style={CardStyle_logo}
            alt="Logo falabella"
          />
        </div>
      </div>
    </div>
  );
};
