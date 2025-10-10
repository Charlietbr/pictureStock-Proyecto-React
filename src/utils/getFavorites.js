
   // leer array de favoritos para sección de favoritos y para el renderizado de resultados. Guardar / guardado.

   export default function getFavorites() {
    const arrayGuardado = localStorage.getItem('favorites');

    if (arrayGuardado) {
        try {
            let arrayParseado = JSON.parse(arrayGuardado);
            return Array.isArray(arrayParseado) ? arrayParseado : [];
    
        } catch (error) {
            console.error('Error al parsear favoritos ', error);
            return [];
        }
    }

    return [];

   };