import { useState, useEffect } from "react"; 

// Hook customizado para gerenciar a lista de produtos
export default function useProdutos() {
  const [produtos, setProdutos] = useState([]); // Estado que guarda a lista de produtos
  const [carregando, setCarregando] = useState(true); // Estado que indica se os produtos estão carregando

  // useEffect que roda apenas uma vez ao montar o componente
  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem("produtos"));

    if (produtosSalvos && produtosSalvos.length > 0) {
      setProdutos(produtosSalvos);
      setCarregando(false);
    } else {
      const produtosFicticios = [
        {
          id: 1,
          nome: "Camiseta Preta",
          preco: 59.9,
          descricao: "Camiseta preta com estampa urbana GLACE BO$$ITA",
          imagem:
            "https://images.pexels.com/photos/11142589/pexels-photo-11142589.jpeg",
          adicionado: false, // importante: começa como não adicionado
        },
        {
          id: 2,
          nome: "Camiseta Branca",
          preco: 29.9,
          descricao: "Camiseta branca minimalista com corte solto",
          imagem:
            "https://images.pexels.com/photos/8148576/pexels-photo-8148576.jpeg",
          adicionado: false,
        },
      ];
      setProdutos(produtosFicticios);
      localStorage.setItem("produtos", JSON.stringify(produtosFicticios));
      setCarregando(false);
    }
  }, []);

  // Salva no localStorage sempre que produtos mudam
  useEffect(() => {
    if (produtos.length > 0) {
      localStorage.setItem("produtos", JSON.stringify(produtos));
    }
  }, [produtos]);

  // Adicionar novo produto
  function handleAddProduto(produto) {
    const novo = { id: Date.now(), adicionado: false, ...produto };
    setProdutos([...produtos, novo]);
  }

  // Deletar produto
  function handleDelete(id) {
    const novaLista = produtos.filter((p) => p.id !== id);
    setProdutos(novaLista);
  }

  // Alternar estado de carrinho
  function handleToggleCarrinho(id) {
    setProdutos(
      produtos.map((p) =>
        p.id === id ? { ...p, adicionado: !p.adicionado } : p
      )
    );
  }

  // Retorna tudo que o App precisa
  return {
    produtos,
    handleAddProduto,
    handleDelete,
    handleToggleCarrinho,
    carregando,
  };
}
