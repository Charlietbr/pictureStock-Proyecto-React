import React, { useContext, useEffect } from 'react'
import Card from '../../components/Card/Card'
import './Results.css'
import { DataContext } from '../../utils/DataContext'
import { pagesAmount, search } from '../../utils/search'


const Results = () => {

  const { results, setResults, topic, paginaActual, setPaginaActual, porPagina, setPorPagina } = useContext(DataContext);
  //console.log(results);
  
  useEffect(() => {
    //sólo debería llamarse en caso de cambiar página o cantidad de resultados. Vigilar topic.
    const nuevoFetch = async () => {
      try {
        const data = await search(pagesAmount, topic, porPagina, paginaActual);
        setResults(data.results || []);
        
      } catch (error) {
        console.error('Ha habido un error al obtener los resultados: ', error);
      }
    };

    nuevoFetch();
  }, [paginaActual, porPagina]);

  const avanzarPagina = () => {setPaginaActual(prev => prev + 1);
                              window.scrollTo({top: 0, behavior: 'smooth'});
  };
  const retrocederPagina = () => {setPaginaActual(prev => Math.max(prev - 1, 1));
                              window.scrollTo({top: 0, behavior: 'smooth'});
  };
  const aumentarResultados = () => setPorPagina(prev => prev + 10);

  const reducirResultados = () => setPorPagina(prev => Math.max(prev - 10, 1));

  return (
    <div className='results'>
      
        {results.length === 0 ? ( <p>No hemos podido encontrar nada...</p> 
        ) : (
          <section>
            <div className='title'>
                <h2>{topic}...</h2>
                <div className='titleInfo'>

                  <div className='pagina'>
                    <p className='click' onClick={retrocederPagina}>◀︎</p>
                    <p>Página:</p>
                    <p>{paginaActual}</p>
                    <p className='click' onClick={avanzarPagina}>▶︎</p>
                  </div>

                  <div className='resultados'>
                    <p>Mostrando:</p>
                    <p className='click' onClick={reducirResultados}>▼</p>
                    <p>{porPagina}</p>
                    <p className='click' onClick={aumentarResultados}>▲</p>
                    <p>resultados</p>
                  </div>

                </div>

            </div>
          

          <div className='cardContainer'>
              {results.map((foto) => (
              <Card key={foto.id} foto={foto} />
            ))}
          </div>

            <div className='title'>
                <p className='subir click' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>↑ Subir</p>
                <div className='titleInfo'>

                  <div className='pagina'>
                    <p className='click' onClick={retrocederPagina}>◀︎</p>
                    <p>Página:</p>
                    <p>{paginaActual}</p>
                    <p className='click' onClick={avanzarPagina}>▶︎</p>
                  </div>

                  <div className='resultados'>
                    <p>Mostrando:</p>
                    <p className='click' onClick={reducirResultados}>▼</p>
                    <p>{porPagina}</p>
                    <p className='click' onClick={aumentarResultados}>▲</p>
                    <p>resultados</p>
                  </div>

                </div>

            </div>

          
          </section>
        )}


        
    </div>
  );
};

export default Results



