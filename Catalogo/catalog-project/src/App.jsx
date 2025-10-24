import Formulario from './components/Formulario'
import ProdutoCard from './components/ProdutoCard';
import useProdutos from './components/hooks/useProdutos';
import './App.css'

function App() {
  const { produtos, handleAddProduto, handleDelete, carregando } = useProdutos()

  // Mostra mensagem enquanto os produtos estão carregando
  if (carregando) {
    return <div className="carregando">Carregando produtos...</div>
  }

  return (
    <div className="App">
      <header className="cabecalho">
        <h1>Catálogo de Produtos</h1>
        <p>Adicione e visualize seus produtos abaixo</p>
      </header>

      <Formulario onAddProduto={handleAddProduto} />

      <div className='produtos-container'>
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            descricao={produto.descricao}
            imagem={produto.imagem}
            onDelete={() => handleDelete(produto.id)}
          />
        ))}
      </div>
    </div>
  )
}
export default App
