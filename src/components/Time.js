import styled from "styled-components";
import { useDate } from "../hooks/useDate";

const TimeValue = styled.div`
  font-size: 1050%;
  font-weight: 500;
  letter-spacing: -5px;
  line-height: 1;
`;

const Time = () => {
  const { time } = useDate();

  return <TimeValue>{time}</TimeValue>;
};

export default Time;
