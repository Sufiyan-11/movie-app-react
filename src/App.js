import { Container,Form,Row,Button } from 'react-bootstrap';
import './App.css';
import { useEffect,useState } from 'react';
import Moviedata from './Moviedata';

const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query";

function App() {
  const[movie,setMovie]=useState([]);
  const[query,setQuery]=useState('');

  const imageurl= "https://image.tmdb.org/t/p/w500/";

  
  const fetchdata=()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093")
    .then(async(res)=>{
      let result = await res.json();
      // console.log(result);
      const data=result.results
      console.log(data);
      setMovie(data);
      // console.log(data);
    })
    .catch((error)=>{
      alert('Error fetching data');
    })
  }
  useEffect(()=>{
    fetchdata();
  },[])

  const searchMovie =async(e)=>{
    e.preventDefault();
    console.log('Searching');
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovie(data.results);
    }
    catch(e){
      console.log(e);
    }
  }
  const changeHandler =(e)=>{
    setQuery(e.target.value);
  }
  
  return (
    <div>
     <h1 className='text-center my-5 text-secondary'>MoviesApp</h1>
     <Form className="d-flex mb-5 formw" onSubmit={searchMovie}>
            <Form.Control
              type="search"
              placeholder="Search Movies......"
              className="me-2 bg-secondary"
              aria-label="Search"
              name='query'
              value={query} onChange={changeHandler}
            />
            <Button variant="secondary"type='submit'>Search</Button>
          </Form>
        <div>
          {movie.length > 0 ? (<Container>
            <Row className='myrow'>
              {movie.map((item)=><Moviedata
              title={item.title}
              image={imageurl+item.poster_path}
              overview={item.overview}
              date={item.release_date}
              vote={item.vote_average}
              />
              )}
            </Row>
          </Container>):(<h2 className='text-center text-light'>Sorry No Movies Found !!!</h2>)}
          
          </div>
        
    
    </div>
  );
}

export default App;
