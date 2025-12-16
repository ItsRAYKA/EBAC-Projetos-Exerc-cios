import { useState, useEffect } from "react";

// guardar valores no localStorage
export function useLocalStorage(key, initialValue) {
  // value = valor guardado;
  //setValue = função paa guardar esse valor
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);

    // Se existir algo salvo, converte e retorna
    if (saved) {
      return JSON.parse(saved); //se existir, transforma em objeto/array e usa
    }

    // Se não houver nada salvo, usa o valor inicial
    return initialValue;
  });

  // Sempre que o valor mudar, salva no localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // Retorna o valor atual e a função que atualiza esse valor
  return [value, setValue];
}
