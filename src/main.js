import {React,  useState } from "react";
import MovieCard from "./pages/MovieCard";
import {TextField} from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import LiveTvIcon from '@mui/icons-material/LiveTv';
// import Button from '@mui/material/Button';



export default function Aj() {

  
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const onsubmitform = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <center>
        
        <form className="form" onSubmit={onsubmitform}>
         
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <LiveTvIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Search Movies
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    

          <TextField
            label = "Movie name"
            name="query"
            variant="outlined"
            color="primary"
            type="text"
            placeholder="Enter a Movie "
            value={query}
            onChange={handleChange}
            sx={{
                marginBottom:'2%', width: '30%', marginTop: '5%'
            }}
          />

        </form>
        
        <div className="cardList">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
        </center>
    

      
    </>
    
  );
}
