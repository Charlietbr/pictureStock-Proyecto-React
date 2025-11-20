import React, { useEffect, useState } from 'react'
import getFavorites from '../../utils/getFavorites'
import './History.css'
import deleteFromFavorites from '../../utils/deleteFromFavorites'



const History = () => {

  const [favoritos, setFavoritos] = useState([]);
  const [borrar, setBorrar] = useState(null);

  useEffect(() => {
    const storedFavoritos = getFavorites();
    setFavoritos(storedFavoritos);
  }, []);
  getFavorites();
  console.log(favoritos);
  
  const borradorFavorito = (fav) => {
    deleteFromFavorites(fav);
    const acualizados = getFavorites();
    setFavoritos(acualizados);
  };

    const confirmarBorrado = (fav) => {
    if (borrar === fav.id) {
      borradorFavorito(fav);
      setBorrar(null);
    } else {
      setBorrar(fav.id);
      setTimeout(() => setBorrar(null), 2000);
    }
  };


  return (
    <div className='history'>
      <h2>Tus favoritos</h2>
      <section className='favContainer'>

                {favoritos.length > 0 ? (

                favoritos.map((fav) => (

                  <article className='favorito' key={fav.id}>
                    <a href={fav.links.download} target='blank'><img className='favImg grow' src={fav.urls.regular} alt="Una de tus imágenes favoritas" /></a>
                    <div className='favOptions'>
                      <a className='optionButton downloadButton' href={fav.links.download} target='blank'><p className='grow'>Descargar</p></a>

                    <p className={`optionButton deleteButton grow ${borrar === fav.id ? 'confirming' : ''}`} onClick={() => confirmarBorrado(fav)}>  {borrar === fav.id ? '¿Seguro?' : 'Eliminar'}   </p>          


                    </div>
                    <p className='description' >"{fav.alt_description ? fav.alt_description.charAt(0).toUpperCase() + fav.alt_description.slice(1) : 'Sin descripción'}."</p>
                    <a href={fav.user.links.html} target='blank' >
                    <p className='usr grow' alt='Perfil del autor' title='Perfil del autor en Unsplash' > {fav.user.name ? fav.user.name.charAt(0).toUpperCase() + fav.user.name.slice(1) : 'Sin descripción'}</p>
                    </a>
                  </article>

          ))
        ) : (
          <p>¡Aquí aparecerán tus favoritos a medida que vaya creciendo la lista!</p>
        )}
      </section>
    </div>
  )
}

export default History
