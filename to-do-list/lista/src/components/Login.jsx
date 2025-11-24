import { useEffect, useState } from "react";

// Componente de login — recebe "onLogin" como função para avisar o App que o usuário entrou
const Login = ({ onLogin }) => {

  // Guarda o nome digitado no input
  const [userName, setName] = useState("");

  // Ao abrir a página, tenta carregar o nome salvo no localStorage
  useEffect(() => {
    const saved = localStorage.getItem("userName");
    if (saved) setName(saved); // se existir, coloca no input automaticamente
  }, []); // [] = só executa uma vez na montagem do componente

  // Atualiza o estado conforme o usuário digita
  const handleChange = (e) => setName(e.target.value);

  // Se o campo estiver vazio, não permite continuar
  const handleLogin = () => {
    if (userName.trim() === "") {
      alert("Digite um nome!");
      return;
    }

    // Salva o nome no localStorage
    localStorage.setItem("userName", userName);

    // Chama o onLogin passando o nome — isso avisa o componente pai (Layout) que o login foi feito
    onLogin(userName);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-50 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
        <h2 className="text-xl font-semibold text-center text-zinc-800 mb-6">
          Acesse seu To-do List
        </h2>

        <input
          type="text"
          value={userName}
          onChange={handleChange}
          placeholder="Digite seu nome"
          className="w-full mb-4 px-3 py-2 border border-zinc-300 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-zinc-400"
        />

        <button
          onClick={handleLogin}
          className="w-full py-2 bg-zinc-900 text-white rounded-lg 
          hover:bg-zinc-800 transition-all"
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;
