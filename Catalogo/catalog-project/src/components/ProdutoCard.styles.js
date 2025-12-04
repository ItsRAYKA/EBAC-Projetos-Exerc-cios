import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 250px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 8px;
  }

  h2 {
    font-size: 18px;
    margin: 10px 0;
    color: #333;
  }

  p {
    color: #555;
    font-size: 14px;
  }

  strong {
    display: block;
    margin: 10px 0;
    font-size: 16px;
    color: #222;
  }
`;

export const BotaoCarrinho = styled.button`
  background-color: ${({ adicionado }) => (adicionado ? "#198754" : "#6c757d")};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ adicionado }) =>
      adicionado ? "#157347" : "#5c636a"};
  }
`;

export const BotaoApagar = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d93636;
  }
`;
