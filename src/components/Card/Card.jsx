import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import useCard from '../../hooks/useCard';

const Card = ({ foto }) => {
  const { favorite, addToFavorites } = useCard(foto);

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
          <Link to={`/users/${foto.user.username}`}>
            <img className='grow' src={foto.user.profile_image.medium} alt="Ver perfil del creador"/>
          </Link>
          <h4>{foto.user.name} ({foto.user.username})</h4>
          <p className='grow'>
            {foto.user.portfolio_url ? <a href={foto.user.portfolio_url}>Ver su portfolio</a> : ''}
          </p>
        </section>

        <footer id='imgOptions'>
          <h3 className='grow' onClick={addToFavorites}>
            {favorite ? 'Guardado ☆' :'Guardar ★'}
          </h3>
          <a href={foto.links.download} target='_blank' rel='noreferrer'>
            <h3 className='grow'>Descargar ▼</h3>
          </a>
        </footer>
      </section>
    </article>
  );
};

export default Card;
