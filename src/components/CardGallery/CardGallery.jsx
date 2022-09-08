import React from "react";
import logo from "../../assets/img/common/logo_falabella_high.png";
import "./CardGallery.styles.scss";

export const CardGallery = ({ props, bg, scss }) => {
  const CardStyle = {
    width: scss === 2 ? `calc(1080px)` : `calc(1080px / 2)`,
    height: scss === 2 ? `calc(1920px/4)` : `calc(1920px/6)`,
  };
  const CardStyle_bx = {
    width: scss === 2 ? `calc(1080px/2)` : `calc(1080px / 4)`,
  };
  const CardStyle_bx_cm = {
    fontSize: scss === 2 ? `70px` : `40px`,
    lineHeight: scss === 2 ? `70px` : `40px`,
  };
  const CardStyle_bx_head = {
    fontSize: scss === 2 ? `50px` : `30px`,
  };
  const CardStyle_logo = {
    width: scss === 2 ? `80px` : `40px`,
    height: scss === 2 ? `120px` : `60px`,
  };
  const bgStyle = {
    backgroundImage: `url(${bg})`,
  };
  console.log(scss);
  return (
    <div className="CardGallery" style={CardStyle}>
      <div className="CardGallery_flex">
        <div className="CardGallery_flex-boxImg" style={CardStyle_bx}>
          <img
            src={props.foto}
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
