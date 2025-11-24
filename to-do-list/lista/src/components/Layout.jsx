import { useEffect, useState } from "react";
import { TodoProvider } from "../context/TodoContext";
import Login from "./Login";
import TodoApp from "./TodoApp";

const Layout = () => {
  // Estado que guarda o nome do usuário logado
  const [userName, setUserName] = useState("");

  // Quando a aplicação inicia, tenta recuperar o nome do usuário salvo
  useEffect(() => {
    const saved = localStorage.getItem("userName");
    if (saved) {
      setUserName(saved); // se tiver nome salvo, faz login automático
    }
  }, []);

  // Função executada pelo Login.jsx quando o usuário clica em "Entrar"
  const handleLogin = (name) => {
    setUserName(name);
  };

  // Função de logout, apaga o nome da tela e vola para o login 
  const handleLogout = () => {
    setUserName(""); // volta para a tela de login
  };

  // Se o usuário não está logado, mostra a tela de login
  if (!userName) {
    return <Login onLogin={handleLogin} />;
  }

  // Se o usuário está logado, renderiza a TodoList com Context
  return (
    <TodoProvider userName={userName}>
      <header className="w-full flex justify-between items-center px-6 py-4 bg-zinc-900 text-white shadow">
        <h1 className="text-xl font-semibold tracking-wide">TO-DO LIST</h1>
        <button
          onClick={handleLogout}
          className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 rounded"
        >
          Sair
        </button>
      </header>

      <main className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <TodoApp />
      </main>
    </TodoProvider>
  );
};

export default Layout;
