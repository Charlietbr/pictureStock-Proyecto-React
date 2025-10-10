import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Users.css'
import UserCard from '../../components/UserCard/UserCard'
import { searchUserImg } from '../../utils/searchUser'

const Users = () => {

  const { username } = useParams(); 
  const [userImgs, setUserImgs] = useState([]);

  // console.log(`Mostrando las fotos de ${username}`);
  
  
  useEffect(() => {
    const fetchDatosUser = async () => {
      try {
        const data = await searchUserImg(1, username, 20);
        setUserImgs(data);
      } catch (error) {
        console.error('Error cargando datos del usuario:', error);
      }
    };

    if (username) fetchDatosUser();

    
  }, [username]);

  console.log(userImgs);
  

  const user = userImgs.length > 0 ? userImgs[0].user : null;
  const portfolio = user?.portfolio_url || user?.links?.html || null;

    return (
      <div className='userResults'>

        <h2 className='userTitle'>
          {portfolio ? ( <a href={portfolio}>Fotos de {username}</a> ) : (<>Fotos de {username}</>)}
        </h2>
          {/* <img className='thumbnail' src={userImgs[0].user.profile_image.medium} alt={userImgs[0].user.bio} title={userImgs[0].user.bio}/> */}
        {userImgs.length > 0 && (
          <img
            className='userPhoto grow'
            src={userImgs[0].user.profile_image.large}
            alt={userImgs[0].user.bio || 'Foto del artista'}
            title={userImgs[0].user.bio || ''}
          />
)}

        {userImgs.length === 0 ? (
          <p>Usuario no encontrado...</p>
        ) : (
          <div className='userCardContainer'>

            {/* <p>{JSON.stringify(userInfo)}</p> */}
       

            
            {userImgs.map((foto) => (
              <UserCard key={foto.id} foto={foto} />
            ))}
          </div>
        )}
      </div>
    );
  };




export default Users;