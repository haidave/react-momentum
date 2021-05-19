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

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

const BackgroundImage = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.unsplash.com/photos/?client_id=${API_KEY}`;

      const { data } = await axios.get(url);

      const imageSrc = data[0].urls.full;

      setImage(imageSrc);
    };

    fetchData();
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
