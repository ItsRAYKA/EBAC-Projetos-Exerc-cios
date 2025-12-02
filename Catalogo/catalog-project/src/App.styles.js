import styled from "styled-components";

export const Container = styled.header`
  text-align: center;
  margin-bottom: 10px;
  width: 100%;
  max-width: 1200px;
  background-color: #61dafb;
  color: white;
  padding: 15px 0;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h1 {
    margin: 0;
    font-size: 30px;
    letter-spacing: 2px;
    padding-bottom: 1px;
  }
`;
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 20px;
  background-color: #f5f6fa;
  min-height: 100vh;
`;

export const Carregando = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
`;

export const ProdutosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  max-width: 1200px;
`;
