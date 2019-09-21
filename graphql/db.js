import axios from "axios";

const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit, 
      minimum_rating: rating
    }
  });
  return movies;
};

export const getMovie = async id => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
}

export const getSuggestions = async id => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
}

///dummy movies

let testMovies = [
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

export const getTestMovies = () => testMovies;

export const getTestMovieById = id => {
  const filteredMovie = testMovies.filter(movie => id === movie.id);
  return filteredMovie[0];
}

export const deleteTestMovie = (id) => {
  const cleanedMovies = testMovies.filter(movie => id !== movie.id);
  if(testMovies.length > cleanedMovies.length){
    testMovies = cleanedMovies;
    return true;
  }else{
    return false;
  }
}

export const addTestMovie = (name, score) => {
  const newMovie = {
    id: `${testMovies.length+1}`,
    name,
    score
  };
  testMovies.push(newMovie);
  return newMovie;
}