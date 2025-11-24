import TodoItem from "./TodoItem";

//Componente responsável por mostrar a lista de tarefas
const TodoList = ({ tasks, onToggleTask, onRemoveTask }) => {

  // Se não existir nenhuma tarefa na lista (lista vazia)
  if (tasks.length === 0) {
    return (
      //mostrar uma mensagem no lugar
      <p className="text-center text-zinc-500 mt-6">Nenhuma tarefa ainda.</p>
    );
  }

  return (
    <ul className="flex flex-col gap-2 mt-4">
      {tasks.map((task) => (
        <TodoItem
          key={task.id} // chave única para o React identificar o item

          task={task} // envia a tarefa completa para o TodoItem

          //É chamado dentro do TodoItem quando o usuário marca/desmarca
          onToggle={() => onToggleTask(task.id)}

          // É chamado dentro do TodoItem quando o usuário clica para deletar
          onRemove={() => onRemoveTask(task.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
