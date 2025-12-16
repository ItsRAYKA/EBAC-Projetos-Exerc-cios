import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold text-center mb-6 text-zinc-800">
        Suas Tarefas
      </h2>

      {/* Formulário para adicionar nova tarefa */}
      <TodoForm />

      {/* Botões de filtro */}
      <TodoFilters />

      {/* Lista de tarefas */}
      <TodoList />
    </div>
  );
};

export default TodoApp;
