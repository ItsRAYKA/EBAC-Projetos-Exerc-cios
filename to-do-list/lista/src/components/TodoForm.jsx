import { useState } from "react";

const TodoForm = ({ onAddTask }) => {

  //taskText = valor atual digitado no input
  //setTaskText = função que atualiza esse valor 
  const [taskText, setTaskText] = useState("");

  //Função chamada quando o formulário é enviado
  const handleSubmit = (e) => {
    e.preventDefault(); // evita o reload da página

    if (taskText.trim() === "") return; // impede enviar vazio

    onAddTask(taskText); // envia o texto para o TodoApp  
    setTaskText(""); // limpa o campo de input 
  };

  return (
    <form onSubmit={handleSubmit} className="flex gp-2 mb-4">
      <input
        className="flex-1 px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-zinc-800"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)} //atualiza o estado 
        placeholder="Digite uma nova tarefa"
      />
      
      <button
        type="submit"
        className="px-4 py-2 bg-zinc-900 text-white rounded hover:bg-black"
      >
        Adicionar
      </button>
    </form>
  );
};

export default TodoForm;
