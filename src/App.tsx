import { useEffect } from "react";
import { buscaDadosApi } from "./services/Api";

function App() {
  useEffect(() => {
    async function buscar() {
      const data = await buscaDadosApi();
      console.log("Dados recebidos:", data);
    }

    buscar();
  }, []);

  return <h1>Teste da API</h1>;
}

export default App;
