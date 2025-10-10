import React, { useContext, useState, useEffect, useRef } from 'react'
import { data, Link, useNavigate } from 'react-router-dom'

import './Header.css'
import { search, pagesAmount, topic, resultados, currentPage } from '../../utils/search'
import { DataContext } from '../../utils/DataContext'



const Header = () => {

  const welcomeTopic = 'Atardecer';
  const {topic, setResults, setTopic} = useContext(DataContext);
  const navigate = useNavigate();
  const inputRef = useRef('Atardecer');


  // búsqueda al cargar

  useEffect(() => {
    const fetchInicio = async () => {
      try {
          const welcomeDataResults = await search(pagesAmount, welcomeTopic, resultados, currentPage);
          setResults(welcomeDataResults.results || []);
      } catch (error) {
          console.log('Error al cargar datos del bienvenida.')
      }
      
    };
 
    fetchInicio();
    
  }, []); 

  const keyDown = async (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        
        const currentTopic = inputRef.current.value.trim();
        if (!topic.trim()) return; // llamadas vacías
        
        setTopic(currentTopic);

        const dataResults = await search(pagesAmount, currentTopic, resultados, currentPage);
        setResults(dataResults.results || []);
        navigate('/results');

    }

    if (e.key === 'Escape') {
        setTopic('sunset');
        console.log(`Se ha vuelto a la búsqueda por defecto deshaciendo el topicSearch ${topic}`)
    }

  };


  return (

      <ul className='navbar'>
        <li className='logocontainer'>
          <Link to='/'>
            <img 
              onClick={()=>{inputRef.current.value = ''}}
              src="src/assets/img/main/logohori2x.png" 
              alt="image stock logo" 
              id='imagestocklogo'/>
          </Link>
        </li>
        
        <li className='searchcontainer'>
        <input 
            type='text'
            ref={inputRef}
            placeholder={'🔎 senderismo, puestas de sol, bicicletas...'}
            //value={topic}
            //onChange={(e) => setTopic(e.target.value)}
            
            onKeyDown={keyDown}
            
            className='search'
            id='mainSearchInput'


            autoComplete='off'
            spellCheck='false'
            />


        </li>
        
          <li className='linkscontainer'>
          <Link className='grow' to='/history'>Favoritos ★</Link>
          <Link className='grow' to='/about'>Acerca de iStock</Link>

          </li>
          <li className='linkscontainerSmall'>
          <Link className='grow' to='/history' alt='Acceso a tus favoritos' title='Tus favoritos'>★</Link>
          <Link className='grow' to='/about' alt='Acerca de imageStock' title='Acerca de imageStock' >?</Link>

          </li>

      </ul>



  )
}

export default Header
