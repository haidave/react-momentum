import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const BackgroundImageEl = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const BackgroundImage = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=fAvvaPEgZYU597qOzo9qt5DeATqISeFM_KSo5BJNlB4"
      )
      .then((res) => {
        setImage(res.data[0].urls.full);
        console.log(res.data[0].urls.full);
      })
      .catch((err) => {
        console.log("Error during fetching", err);
      });
  }, []);

  return (
    <BackgroundImageEl
      style={{
        backgroundColor: "black",
        backgroundImage: `url(${image})`,
      }}
    />
  );
};

export default BackgroundImage;
