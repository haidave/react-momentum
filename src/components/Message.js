import styled from "styled-components";
import { useDate } from "../hooks/useDate";

const MessageContent = styled.div`
  font-size: 337.5%;
  font-weight: 500;
  text-align: center;
`;

const Message = () => {
  const name = "Hai";

  const { wish } = useDate();

  return (
    <MessageContent>
      {wish}, {name}.
    </MessageContent>
  );
};

export default Message;
