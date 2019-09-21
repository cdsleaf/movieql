import { 
  getTestMovies, 
  getTestMovieById, 
  addTestMovie,
  deleteTestMovie, 

  getMovie,
  getMovies,
  getSuggestions
} from './db';

const resolvers = {
  Query: {
    testMovies: () => getTestMovies(),
    testMovie: (_, { id }) => getTestMovieById(id),
    
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
  Mutation: {
    addTestMovie: (_, {name, score}) => addTestMovie(name, score),
    deleteTestMovie: (_, {id}) => deleteTestMovie(id),
  }
};

export default resolvers;