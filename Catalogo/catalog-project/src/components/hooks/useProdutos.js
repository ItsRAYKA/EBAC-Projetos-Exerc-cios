import { useState, useEffect } from "react"; // Importa useState e useEffect do React

// Hook customizado para gerenciar a lista de produtos
export default function useProdutos() {

    const [produtos, setProdutos] = useState([]); // Estado que guarda a lista de produto
    const [carregando, setCarregando] = useState(true); // Estado que indica se os produtos estão carregando

    // useEffect que roda apenas uma vez ao montar o componente
    useEffect(() => {
        // Tenta buscar produtos salvos no localStorage
        const produtosSalvos = JSON.parse(localStorage.getItem("produtos"));

        if (produtosSalvos && produtosSalvos.length > 0) {
            // Se houver produtos salvos, usa eles
            setProdutos(produtosSalvos);
            setCarregando(false)
        } else {
            // Caso não haja produtos salvos, cria produtos fictícios
            const produtosFicticios = [
                {
                    id: 1,
                    nome: "Camiseta Preta",
                    preco: 59.90,
                    descricao: "Camiseta preta com estampa urbana GLACE BO$$ITA",
                    imagem:
                        "https://images.pexels.com/photos/11142589/pexels-photo-11142589.jpeg",
                },
                {
                    id: 2,
                    nome: "Camiseta Branca",
                    preco: 29.90,
                    descricao: "Camiseta branca minimalista com corte solto",
                    imagem:
                        "https://images.pexels.com/photos/8148576/pexels-photo-8148576.jpeg",
                },
            ];
            setProdutos(produtosFicticios); // Atualiza o estado com os produtos fictícios

            localStorage.setItem("produtos", JSON.stringify(produtosFicticios)); // Salva no localStorage

            setCarregando(false); // encerra o "Carregando..."
        } 2000; // 2 segundos de simulação
    }, [])

    // useEffect que roda sempre que a lista de produtos muda
    useEffect(() => {
        if (produtos.length > 0) {
            // Salva a lista atualizada no localStorage
            localStorage.setItem("produtos", JSON.stringify(produtos));
        }
    }, [produtos]);

    // Função para adicionar um novo produto
    function handleAddProduto(produto) {
        const novo = { id: Date.now(), ...produto };
        setProdutos([...produtos, novo]);
    }

    // Função para deletar um produto pelo id
    function handleDelete(id) {
        const novaLista = produtos.filter((p) => p.id !== id);
        setProdutos(novaLista); // Atualiza a lista
    }
    // Retorna o estado e funções para usar em componentes
    return { produtos, handleAddProduto, handleDelete, carregando };
}
