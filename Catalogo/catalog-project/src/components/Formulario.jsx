import { useState } from "react"; 
import { Form, Input, Button } from "./Formulario.styles";

// Componente de formulário para adicionar novos produtos
function Formulario({ onAddProduto }) {
  // Estado que guarda os valores iniciais vazios do formulário
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: "",
  });
  // Função que atualiza o estado quando o usuário digita nos inputs
  function handleChange(e) {
    const { name, value } = e.target; // Pega o nome e valor do input que mudou
    setNovoProduto({ ...novoProduto, [name]: value }); // Atualiza apenas o campo alterado
  }
  // Função que é chamada ao enviar o formulário
  function handleSubmit(e) {
    e.preventDefault(); // Evita que a página recarregue
    onAddProduto(novoProduto); // Chama a função recebida por props para adicionar o produto
    setNovoProduto({ nome: "", preco: "", descricao: "", imagem: "" }); // Limpa o formulário
  }

  return (
    // Formulário HTML
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="nome"
        placeholder="Nome do produto"
        value={novoProduto.nome}
        onChange={handleChange}
      />
      <Input
        type="number"
        name="preco"
        placeholder="Preço"
        value={novoProduto.preco}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="descricao"
        placeholder="Descrição"
        value={novoProduto.descricao}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="imagem"
        placeholder="URL da imagem"
        value={novoProduto.imagem}
        onChange={handleChange}
      />

      <Button type="submit">Adicionar Produto</Button>
    </Form>
  );
}

export default Formulario;
