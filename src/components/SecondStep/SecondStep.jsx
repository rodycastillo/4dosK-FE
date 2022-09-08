import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FormContext } from "../../context/FormContext";
import Webcam from "react-webcam";
import btn from "../../assets/img/app/02/btn.png";
import phrase from "../../assets/img/app/02/phrase.png";
import brand from "../../assets/img/common/logo_falabella.png";
import iconSwitch from "../../assets/img/common/camera_switch.svg";
import "./SecondStep.styles.scss";

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
  facingMode: FACING_MODE_USER,
};

export const SecondStep = () => {
  const { action } = useContext(AppContext);
  const { form, setForm } = useContext(FormContext);
  const [img, setImg] = React.useState("");
  const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);
  const webCamRef = React.useRef(null);
  const [isShow, setIsShow] = React.useState(true);

  const takePicture = () => {
    const imgSrc = webCamRef.current.getScreenshot({
      width: 2388,
      height: 1668,
    });
    setImg(imgSrc);
    setIsShow(false);
  };

  const handleClick = React.useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);

  const handleNextStep = () => {
    setForm({ ...form, foto: img });
    action({
      type: "STEP_THREE",
      payload: {
        step_one: false,
        step_two: false,
        step_three: true,
        step_four: false,
      },
    });
  };
  return (
    <div className="secondStep">
      <div className="secondStep_section">
        <div className="secondStep_section-head">
          <h1>2</h1>
          <h3>
            TÓMATE <br />
            UNA FOTO
          </h3>
        </div>
        <div className="secondStep_section-btns">
          <button onClick={() => setIsShow(!isShow)} disabled={isShow}>
            Reintentar
          </button>{" "}
          <br />
          <button onClick={handleNextStep} disabled={isShow}>
            Enviar
          </button>
        </div>
      </div>
      <div className="secondStep_camera">
        {isShow ? (
          <>
            <Webcam
              ref={webCamRef}
              audio={false}
              screenshotFormat="image/png"
              videoConstraints={{ ...videoConstraints, facingMode }}
              screenshotQuality={1}
              forceScreenshotSourceSize="true"
            ></Webcam>
            <button className="secondStep_camera-btnTake" onClick={takePicture}>
              <img src={btn} alt="btn take" />
            </button>
            <button
              className="secondStep_camera-btnSwitch"
              onClick={handleClick}
            >
              <img src={iconSwitch} alt="btn switch camera" />
            </button>
          </>
        ) : (
          <div className="secondStep_camera-preview">
            <img src={img} alt="TEST CAM" />
          </div>
        )}
      </div>
      <div className="secondStep_facts">
        <img
          src={phrase}
          className="secondStep_facts-firstImg"
          alt="phrase falabella"
          width={296}
          height={97}
        />
        <img
          src={brand}
          className="secondStep_facts-lastImg"
          alt="brand falabella"
          width={77}
          height={117}
        />
      </div>
    </div>
  );
};
