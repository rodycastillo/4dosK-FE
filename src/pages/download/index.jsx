import React from "react";
import JSZip from "jszip";
import JSZipUtils from "jszip-utils";
import { saveAs } from "file-saver";
import { useGetData } from "../../hooks/useGetData";

export const Download = () => {
  const [isDisabled, setIsDisabled] = React.useState(false);
  const { posts } = useGetData();
  const images = posts.map(({ id, foto }) => {
    // eslint-disable-next-line no-new-object
    return { id, foto };
  });

  const handleDownload = () => {
    setIsDisabled(true);
    console.log("Download");
    console.time();
    const zip = new JSZip();
    let count = 0;
    const time = parseInt(Date.now());
    images.forEach(async (qr) => {
      try {
        const file = await JSZipUtils.getBinaryContent(qr.foto);
        zip.file(`${qr.id}.png`, file);
        count++;
        if (count === images.length) {
          zip.generateAsync({ type: "blob" }).then(function (content) {
            saveAs(content, `${time}.zip`);
          });
        }
      } catch (err) {
        console.error(err);
      }
    });
    console.timeEnd();
    setIsDisabled(false);
  };

  return (
    <div className="container">
      <h3 className="text-center my-3 text-white">Fotos del usuario</h3>
      {posts.length > 0 && (
        <div className="d-flex justify-content-center align-items-center flex-column">
          <p className="text-center text-white">Descargar Imagenes</p>{" "}
          <button
            disabled={isDisabled}
            onClick={handleDownload}
            className="btn btn-outline-success mx-auto text-center"
          >
            Download
          </button>
        </div>
      )}
      <div className="row">
        {posts.map((post, i) => (
          <>
            <div className="col p-3" key={i}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={post.foto}
                  className="card-img-top"
                  alt="foto del user"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Nombres: {post.nombres} {post.apellidos}
                  </h5>
                  <p className="card-text">Email: {post.email}</p>
                  <p className="card-text">Comentario: {post.comentario}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
