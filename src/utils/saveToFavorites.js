
// guardar el objeto foto en el array favoritos. Crear y guardar o sólo guardar.

export default function saveToFavorites(foto) {
    const storedFavorites = localStorage.getItem('favorites');
    let favoritesArray = [];

    if (storedFavorites) {
        try {
            favoritesArray = storedFavorites ? JSON.parse(storedFavorites) : [];
            } catch {
            favoritesArray = [];
        }
    }

    if (!favoritesArray.some(item => item.id === foto.id)) {
        favoritesArray.push(foto);
    }

    localStorage.setItem('favorites', JSON.stringify(favoritesArray));

    console.log('Supuestamente, hemos guardado un favorito.');
    

}