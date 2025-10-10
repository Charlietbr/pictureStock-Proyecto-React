
const API_KEY = import.meta.env.VITE_API_KEY;


export let pagesAmount = 1;
export let resultados = 20;
export let currentPage = 1;



export async function searchUserImg(pagesAmount, username, resultados) {
  if (!username) return [];

  try {
    console.log(`Check: Página ${currentPage} de fotos de un usuario ${username}`);
    const res = await fetch(`https://api.unsplash.com/users/${username}/photos?page=${currentPage}&per_page=${resultados}&client_id=${API_KEY}`);

    if (!res.ok) {

      const text = await res.text();
      throw new Error(`Error de la API ${res.status}: ${text}`);
    }


    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error('Error en searchUserImg:', err);
    return [];
  }
}
