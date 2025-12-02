import { Card } from "./ProdutoCard.styles";

// Componente funcional que representa um cartão de produto
function ProdutoCard({ nome, preco, descricao, imagem, onDelete }) {
  return (
    <Card>
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <strong>R$ {preco}</strong>
      <button onClick={onDelete}>Apagar</button>
    </Card>
  );
}

export default ProdutoCard;
