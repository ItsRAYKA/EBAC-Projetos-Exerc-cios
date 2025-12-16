import { useEffect, useState } from "react";
import Login from "./Login";
import TodoApp from "./TodoApp";

const Layout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("userName");
    if (saved) {
      setUserName(saved);
    }
  }, []);

  const handleLogin = (name) => {
    localStorage.setItem("userName", name);
    setUserName(name);
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    setUserName("");
  };

  if (!userName) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
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
    </>
  );
};

export default Layout;
