import React, { useContext, useEffect } from "react";
import Webcam from "react-webcam";
import { AppContext } from "../../context/AppContext";
import btn from "../../assets/img/app/02/btn.png";
import phrase from "../../assets/img/app/02/phrase.png";
import brand from "../../assets/img/common/logo_falabella.png";
import "./SecondStep.styles.scss";

export const SecondStep = () => {
  const { action } = useContext(AppContext);
  const [img, setImg] = React.useState("");
  const webCamRef = React.useRef(null);
  const [isShow, setIsShow] = React.useState(true);
  const [data, setData] = React.useState({});

  const takePicture = () => {
    const imgSrc = webCamRef.current.getScreenshot({
      width: 2388,
      height: 1668,
    });
    setImg(imgSrc);
    console.log(imgSrc);
    setIsShow(false);
  };

  const getLocalData = () => {
    const usr = localStorage.getItem("usr_42k");
    if (usr) {
      setData(JSON.parse(usr));
    }
  };

  useEffect(() => {
    getLocalData();
  }, []);

  const handleNextStep = () => {
    localStorage.setItem("usr_42k", JSON.stringify({ ...data, foto: img }));
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
              height={533}
              screenshotFormat="image/png"
              width={533}
              // videoConstraints={videoConstraints}
              screenshotQuality={1}
            ></Webcam>
            <button className="secondStep_camera-btn" onClick={takePicture}>
              <img src={btn} alt="btn img" />
            </button>
          </>
        ) : (
          <div className="secondStep_camera-preview">
            <img src={img} style={{ height: 390, width: 533 }} alt="TEST CAM" />
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
