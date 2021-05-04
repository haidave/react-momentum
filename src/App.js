import { Normalize } from "styled-normalize";
import BackgroundImage from "./components/BackgroundImage";
import BackgroundOverlay from "./components/BackgroundOverlay";
import Content from "./components/Content";
import ContentCenter from "./components/ContentCenter";
import Message from "./components/Message";
import Time from "./components/Time";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="app">
      <Normalize />
      <Wrapper>
        <BackgroundImage />
        <BackgroundOverlay />
        <Content>
          <ContentCenter>
            <Time />
            <Message />
          </ContentCenter>
        </Content>
      </Wrapper>
    </div>
  );
}

export default App;
