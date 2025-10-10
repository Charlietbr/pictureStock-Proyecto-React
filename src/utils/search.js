const API_KEY = import.meta.env.VITE_API_KEY;

export let topic = "sunset";
export let pagesAmount = 1;
export let resultados = 20;
export let currentPage = 1;

export async function search(pagesAmount, topic, resultados, currentPage) {

  try {

    console.log(`Check: Página ${currentPage} de la búsqueda de ${topic}`);

    let URL = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${topic}&per_page=${resultados}&client_id=${API_KEY}`;
    let respuesta = await fetch(URL);
    let data = await respuesta.json();
    
    

    if (!data.results || data.results.length === 0) {
      console.warn(`No se encontraron resultados para "${topic}"`);
      return { results: [] };

      } else if (data.results && data.results.length > 0) {

          data.results.forEach((foto) => {

            const { slug, urls, likes, user, created_at } = foto;
            const urlRegular = urls.regular;
            const total_photos = user.total_photos;
            const userImg = user.profile_image.medium;
            const userName = user.name;

            //!createCard(slug, urlRegular, likes, total_photos, userName, userImg, created_at, currentPage);
            //console.log(foto)
          });

        } else {
          console.warn('No hemos podido encontrar las imágenes...');
          
        };

    

      console.log(`La llamada ha generado ${data.results.length} resultados`);
      
      return data;


  } catch (error) {
    console.error("Error en la solicitud:", error);
  }

};




//*--------------------------------Realizar una búsqueda desde searchInput

// const busqueda = (ev) => {
//   if (ev.key === 'Enter') {
//     const nuevoTopic = searchInput.value.trim();

//       if (!nuevoTopic) 
//         return;

//     topic = nuevoTopic; 
//     limpiarApp();
//     currentPage = 1;
//     bottomMessage.classList.remove('visibleFooterMessage');        
//     respuesta(pagesAmount, topic, resultados, currentPage);
//   }
// };


//*--------------------------------Ampliar resultados al hacer scroll. Max 5 páginas.


// const subir = () => (window.scrollTo({top: 0, behavior: "smooth"}));

// const app = document.querySelector('#app');
// const bottomMessage = document.createElement('footer');
// bottomMessage.classList.add('footerMessage');
// bottomMessage.textContent = 'Has alcanzado el límite de búsquedas permitidas. Pulsa para volver arriba.' ;
// app.appendChild(bottomMessage);

// bottomMessage.addEventListener('click', subir);




// const ampliaBusqueda = () => {  

//   if (currentPage < 5){
//     currentPage +=1; 
//      respuesta(pagesAmount, topic, resultados, currentPage);
//   } else {
//     bottomMessage.classList.add('visibleFooterMessage');
    
//     }
  
    
  
// };


// searchInput.addEventListener('keydown', busqueda);
// window.addEventListener('scrollend', ampliaBusqueda);

