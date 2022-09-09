import React from "react";
import { CardGallery } from "../../components/CardGallery/CardGallery";
import { useGetData } from "../../hooks/useGetData";
import bg_1 from "../../assets/img/common/CARD_1.png";
import bg_2 from "../../assets/img/common/CARD_2.png";

export const Gallery = () => {
  const { posts = [] } = useGetData();
  const FirstArr = posts?.slice(0, 4);
  const LastArr = posts?.slice(4, posts.length - 1);
  const MiddleArr = posts?.slice(posts.length - 1, posts.length);
  const newArr = [...FirstArr, ...MiddleArr, ...LastArr];
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row p-0 m-0">
        {newArr.map((e, index) => (
          <div
            className={index === 4 ? "col-12 p-0 m-0" : "col-6 p-0 m-0"}
            key={index}
          >
            <CardGallery
              scss={index}
              props={e}
              bg={
                index === 4 || index === 1 || (index + 1) % 3 === 0
                  ? bg_2
                  : bg_1
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
