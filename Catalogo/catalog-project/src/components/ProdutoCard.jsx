import { Card, BotaoCarrinho, BotaoApagar } from "./ProdutoCard.styles";

function ProdutoCard({
  nome,
  preco,
  descricao,
  imagem,
  adicionado,
  onToggleCarrinho,
  onDelete,
}) {
  return (
    <Card>
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <strong>R$ {preco}</strong>

      {/* Botão dinâmico */}
      <BotaoCarrinho adicionado={adicionado} onClick={onToggleCarrinho}>
        {adicionado ? "Adicionado" : "Adicionar ao carrinho"}
      </BotaoCarrinho>

      {/* Botão apagar */}
      <BotaoApagar onClick={onDelete}>Apagar</BotaoApagar>
    </Card>
  );
}

export default ProdutoCard;
