let movies = [
  {
    id: "0",
    name: "Star Wars - The new one",
    score: 100
  },
  {
    id: "1",
    name: "Avengers - The new One",
    score: 98
  },
  {
    id: "2",
    name: "The Godfather I",
    score: 85,
  },
  {
    id: "4",
    name: "testMovie",
    score: 10,
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovie = movies.filter(movie => id === movie.id);
  return filteredMovie[0];
}

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter(movie => id !== movie.id);
  if(Movies.length > cleanedMovies.length){
    movies = cleanedMovies;
    return true;
  }else{
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length+1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
}