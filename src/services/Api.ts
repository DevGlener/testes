const API_URL = "https://newsapi.org/v2/top-headlines/sources?";

const API_KEY = import.meta.env.VITE_API_KEY;

export async function buscaDadosApi() {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY,
    },
  });
  const data = await res.json();

  console.log(data);

  return data;
}
