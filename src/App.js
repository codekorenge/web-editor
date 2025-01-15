import {useEffect} from "react";
import './App.css';
import search from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=2433b8aa';
const movie1 = {
    "Title" : "Amazing Spiderman",
    "Year" : "2012",
    "imdbID":"tt25",
    "Type" : "movie",
    "Poster" : "N/A",
}

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL }&s=${title}`);
    const data = await response.json();

    console.log(data);
  }
  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
      <div className="App">
        <h1>MovieLand </h1>
            <div className="search">
              <input
                placeholder="Search..."
                value='Superman'
                onChange={() => {}}
              />

            <img
                src={search}
                alt="Search"
                onClick={() => {}}
            />
        </div>
          <div className="container">
              <div className="movie">
                  <div>
                      <p>{movie1.Year}</p>
                  </div>
              </div>
          </div>

      </div>

  );
}

export default App;
