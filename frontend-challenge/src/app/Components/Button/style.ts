import styled from "styled-components";

export const Button = styled.button<{ $params?: any }>`
  &:hover {
    opacity: 1
  }
  transition: ease-in-out 0.2s;
  opacity: 0.8;
  width: ${(props) => {
    switch (props.$params?.width) {
      case "xl":
        return "100%";
      case "md":
        return "50%";
      case "sm":
        return "30%";
      default:
        return "100%";
    }
  }};
  height: 40px;
  color: ${(props) => props.$params?.color};
  border-radius: ${(props) => {
    switch (props.$params?.border) {
      case "xl":
        return "50px";
      case "md":
        return "50px";
      case "sm":
        return "10px";
      default:
        return "10px";
    }
  }};
  border: 1px solid gray;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.$params.backgroundColor};
  text-align: center;
`;

export default Button;
