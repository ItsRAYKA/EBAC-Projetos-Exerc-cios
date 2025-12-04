import styled from "styled-components";

const CarrinhoContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  margin-top: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 6px;
  }

  div {
    flex: 1;
  }

  strong {
    color: #198754;
  }
`;

function Carrinho({ produtos }) {
  const selecionados = produtos.filter((p) => p.adicionado);

  if (selecionados.length === 0) {
    return (
      <CarrinhoContainer>
        <h2>Carrinho</h2>
        <p>Nenhum produto adicionado ainda.</p>
      </CarrinhoContainer>
    );
  }

  return (
    <CarrinhoContainer>
      <h2>Carrinho</h2>
      {selecionados.map((produto) => (
        <Item key={produto.id}>
          <img src={produto.imagem} alt={produto.nome} />
          <div>
            <h4>{produto.nome}</h4>
            <strong>R$ {produto.preco}</strong>
          </div>
        </Item>
      ))}
    </CarrinhoContainer>
  );
}

export default Carrinho;
