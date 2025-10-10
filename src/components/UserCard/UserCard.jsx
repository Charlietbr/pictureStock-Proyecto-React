import React, { useContext, useEffect, useState } from 'react'
import './UserCard.css'
import { DataContext } from '../../utils/DataContext'
import saveToFavorites from '../../utils/saveToFavorites'
import getFavorites from '../../utils/getFavorites'


const Card = ({foto}) => {

  console.log(foto);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(foto.likes);
  const [downloaded, setDownloaded] = useState(false);
  const [favorite, setFavorite] = useState(false);
  
  const toggleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  }

  useEffect(() => {
    const oldFavoritos = getFavorites();

    const esFavorito = oldFavoritos.some(fav => fav.id === foto.id);

    if (esFavorito) {
      setFavorite(true);
    }

  }, [foto.id]);


  return (
    <article className='card'>

        <img className='thumbnail' src={foto.urls.regular} alt={foto.slug} title={foto.description}/>

        <section className='imgInfo'>

            <h4 id='expandir'>▼ Info</h4>

              <div id='infoText'>

                <h3>"{foto.alt_description ? foto.alt_description.charAt(0).toUpperCase() + foto.alt_description.slice(1) : ''}."</h3>
                <p>Dimensiones: {foto.width} x {foto.height}</p>

              </div>

              <section id='user'>
                {/* <img className='grow' src={foto.user.profile_image.medium} alt="" /> */}
                <h4>{foto.user.name} ({foto.user.username})</h4>
                <p className='grow'>{foto.user.portfolio_url ? <a href={foto.user.portfolio_url} target='blank' >Ver su portfolio</a> : ''}</p>

              </section>

              <footer id='imgOptions'>
                  <h3
                    className='grow'
                    onClick={() => {
                          saveToFavorites(foto);
                          setFavorite(true);
                    }}>   {favorite ? 'Guardado ☆' :'Guardar ★'}   </h3>

                  <a  href={foto.links.download} target='blank'><h3 className='grow'
                      >Descargar ▼</h3></a>
              </footer>

        </section>
      


    </article>
  )
}

export default Card
