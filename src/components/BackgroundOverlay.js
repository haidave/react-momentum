import styled from "styled-components";

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("/images/background-overlay.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export default BackgroundOverlay;
