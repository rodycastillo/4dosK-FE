import React from "react";
import { CardGallery } from "../../components/CardGallery/CardGallery";
import { useGetData } from "../../hooks/useGetData";
import bg_1 from "../../assets/img/common/CARD_1.png";
import bg_2 from "../../assets/img/common/CARD_2.png";

export const Gallery = () => {
  const { posts } = useGetData();
  return (
    <div className="container-fluid">
      <div className="row p-0 m-0">
        {posts.map((e, index) => (
          <div className="col-4 p-0 m-0">
            <CardGallery
              props={e}
              key={index}
              bg={index % 2 === 0 ? bg_1 : bg_2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
