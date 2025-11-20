# pictureStock --> imageStock

v01. 10 de octubre de 2025.

      Bienvenido a imageStock, un proyecto basado en el proyecto "Pinteresante" que recrea y amplía sus funciones pero basado en React y añadiendo algunas páginas para separar la búsqueda inicial de los detalles del autor o los favoritos del usuario. Se utiliza la api de Unsplash.
      
      La página de bienvenida da acceso tanto a las nuevas búsquedas como a los favoritos que hayamos guardado anteriormente desde el cuadro de información de cada imagen, que se desplegará al situar el puntero sobre ella.

      Desde estas opciones podemos visitar otras imágenes del autor y acceder a su portfolio, guardar el favorito o acceder a su original para descargarlo.

      La página de favoritos da acceso a las imágenes que hemos guardado para descargarlas, acceder al perfil público del autor o eliminarlas. La información de los favoritos queda guardada en el local storage.


## 

v02. XX de noviembre de 2025.


      Limpieza de título de la página y añadido de meta etiquetas.

      Componente UserCard renombrado como FavoritesCard.

      Se ha pasado la lógica de los propios componentes Card y FavoritesCard a un custom hook src/hooks/useCard.jsx
      
      Corregida la función de reducirResultados de la página Results. Reducía de uno en uno en lugar de diez en diez.

      