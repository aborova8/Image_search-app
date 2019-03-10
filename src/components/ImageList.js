import React from "react";

const ImageList = props => {
  console.log(props.images);
  const allimg = props.images.map(image => {
    return (
      <img key={image.id} src={image.urls.thumb} alt={image.description} />
    );
  });
  return <div>{allimg}</div>;
};

export default ImageList;
