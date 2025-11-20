import { useState, useEffect } from 'react';
import saveToFavorites from '../utils/saveToFavorites';
import getFavorites from '../utils/getFavorites';

const useCard = (foto) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(foto.likes);
  const [favorite, setFavorite] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  const addToFavorites = () => {
    saveToFavorites(foto);
    setFavorite(true);
  };

  useEffect(() => {
    const oldFavoritos = getFavorites();
    const esFavorito = oldFavoritos.some(fav => fav.id === foto.id);
    if (esFavorito) setFavorite(true);
  }, [foto.id]);

  return { liked, likes, favorite, toggleLike, addToFavorites };
};

export default useCard;
