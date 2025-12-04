import Formulario from "./components/Formulario";
import ProdutoCard from "./components/ProdutoCard";
import useProdutos from "./components/hooks/useProdutos";
import Carrinho from "./components/Carrinho";
import GlobalStyles from "./styles/GlobalStyles";

import {
  Container,
  AppContainer,
  Carregando,
  ProdutosContainer,
} from "./App.styles";

function App() {
  const {
    produtos,
    handleAddProduto,
    handleDelete,
    handleToggleCarrinho,
    carregando,
  } = useProdutos();

  // Mostra mensagem enquanto os produtos estão carregando
  if (carregando) {
    return <Carregando>Carregando produtos...</Carregando>;
  }

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Container>
          <h1>Catálogo de Produtos</h1>
          <p>Adicione e visualize seus produtos abaixo</p>
        </Container>

        <Formulario onAddProduto={handleAddProduto} />

        <ProdutosContainer>
          {produtos.map((produto) => (
            <ProdutoCard
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              descricao={produto.descricao}
              imagem={produto.imagem}
              adicionado={produto.adicionado}
              onToggleCarrinho={() => handleToggleCarrinho(produto.id)}
              onDelete={() => handleDelete(produto.id)}
            />
          ))}
        </ProdutosContainer>
        <Carrinho produtos={produtos} />
      </AppContainer>
    </>
  );
}
export default App;
