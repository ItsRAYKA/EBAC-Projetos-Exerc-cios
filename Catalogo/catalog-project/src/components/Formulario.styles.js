import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  flex: 1 1 180px;
`;

export const Button = styled.button`
  background-color: #61dafb;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #21a1f1;
  }
`;
