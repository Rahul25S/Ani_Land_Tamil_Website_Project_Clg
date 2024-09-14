// MovieRow.jsx
import React, { useState, useEffect } from 'react';
import MovieBox from './MovieBox.jsx';
import { movieData } from '../components/MovieData.jsx';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

const MovieRow = () => {
  const { user } = useAuth();
  const [likedMovies, setLikedMovies] = useState({});
  const [bookmarkedMovies, setBookmarkedMovies] = useState({});

  useEffect(() => {
    const fetchLikedMovies = async () => {
      if (user) {
        try {
          const userDoc = doc(db, 'users', user.email);
          const docSnap = await getDoc(userDoc);
          const favShows = docSnap.data()?.favShows || [];

          const likedStatus = movieData.reduce((acc, movie, index) => {
            acc[index] = favShows.includes(movie.title);
            return acc;
          }, {});

          setLikedMovies(likedStatus);
        } catch (error) {
          console.error('Error fetching liked movies:', error);
        }
      }
    };

    fetchLikedMovies();
  }, [user]);

  const toggleLike = (index) => {
    setLikedMovies((prevLikes) => ({
      ...prevLikes,
      [index]: !prevLikes[index],
    }));
  };

  const toggleBookmark = (index) => {
    setBookmarkedMovies((prevBookmarks) => ({
      ...prevBookmarks,
      [index]: !prevBookmarks[index],
    }));
  };

  return (
    <div className="p-4">
      <h1 className="font-nsans-medium text-2xl md:text-4xl p-4 text-white">POPULAR</h1>
      {/* Updated grid setup for responsive behavior */}
      <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
        {movieData.map((movie, index) => (
          <MovieBox
            key={index}
            imageSrc={movie.imageSrc}
            label1={movie.label1}
            label2={movie.label2}
            title={movie.title}
            isLiked={likedMovies[index]}
            onLike={() => toggleLike(index)}
            isBookmarked={bookmarkedMovies[index]}
            onBookmark={() => toggleBookmark(index)}
            redirectLink={movie.redirectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;