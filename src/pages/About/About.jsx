import './About.css'

import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <h2>Información del proyecto</h2>
      <p>Bienvenido a imageStock, un proyecto basado en el proyecto "Pinteresante" que recrea y amplía sus funciones pero basado en React y añadiendo algunas páginas para separar la búsqueda inicial de los detalles del autor o los favoritos del usuario.
      </p>
      <p>La página de bienvenida da acceso tanto a las nuevas búsquedas como a los favoritos que hayamos guardado anteriormente desde el cuadro de información de cada imagen, que se desplegará al situar el puntero sobre ella.</p>
      <p>Desde estas opciones podemos visitar otras imágenes del autor y acceder a su portfolio, guardar el favorito o acceder a su original para descargarlo.</p>
      <p>Por último, desde la página de favoritos podemos acceder a las imágenes que hemos guardado para descargarlas, acceder al perfil público del autor o eliminarlas.</p>
    </div>
  )
}

export default About
