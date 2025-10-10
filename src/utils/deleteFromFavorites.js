
// guardar el objeto foto en el array favoritos. Crear y guardar o sólo guardar.

export default function deleteFromFavorites(foto) {
    const storedFavorites = localStorage.getItem('favorites');
    let favoritesArray = [];

    if (storedFavorites) {
        try {
            favoritesArray = storedFavorites ? JSON.parse(storedFavorites) : [];
            } catch {
            favoritesArray = [];
        }
    }

    const updatedFavorites = favoritesArray.filter(item => item.id !== foto.id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));


    console.log('Supuestamente, hemos borrado un favorito.');
    

}