import { useTodos } from "../context/TodoContext";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const {
    filteredTasks, // lista já filtradas
    addTask, // função para adicionar tarefa
    toggleTask, // função para marcar/desmarcar
    removeTask, // função para excluir tarefa
    filter, // estado atual do filtro
    changeFilter, // função que muda o filtro
  } = useTodos();

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold text-center mb-6 text-zinc-800">
        Suas Tarefas
      </h2>

      {/*Formulário para adicionar nova tarefa*/}
      <TodoForm onAddTask={addTask} />

      {/* Botões de filtro (todas, pendentes, concluídas)*/}
      <TodoFilters filter={filter} onChangeFilter={changeFilter} />

      {/* lista que mostra as tarefas filtradas*/}
      <TodoList
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onRemoveTask={removeTask}
      />
    </div>
  );
};

export default TodoApp;
