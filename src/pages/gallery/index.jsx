import React from "react";
import { CardGallery } from "../../components/CardGallery/CardGallery";
import { useGetData } from "../../hooks/useGetData";
import bg_1 from "../../assets/img/common/CARD_1.png";
import bg_2 from "../../assets/img/common/CARD_2.png";

export const Gallery = () => {
  const { posts } = useGetData();
  // const data = [...posts, ...posts, ...posts];

  const newArr = posts.slice(1, posts.length);

  console.log(posts);
  console.log(newArr);
  return (
    <div className="container-fluid p-0 m-0">
      <div className="row p-0 m-0">
        {posts.map((e, index) => (
          <div
            className={index === 2 ? "col-12 p-0 m-0" : "col-6 p-0 m-0"}
            key={index}
          >
            <CardGallery
              scss={index}
              props={e}
              bg={index % 2 === 0 ? bg_1 : bg_2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
