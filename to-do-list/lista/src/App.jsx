import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState("");

  // Carregar usuário salvo no navegador
  useEffect(() => {
    const saved = localStorage.getItem("userName");
    if (saved) {
      setUserName(saved);
      setIsLogged(true);
    }
  }, []);

  return (
    <>
      {isLogged ? (
        <Layout
          userName={userName}
          onLogout={() => {
            setIsLogged(false);
            setUserName("");
          }}
        />
      ) : (
        <Login
          onLogin={(name) => {
            setUserName(name);
            setIsLogged(true);
          }}
        />
      )}
    </>
  );
}
export default App;
