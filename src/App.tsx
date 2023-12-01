import { useAppDispatch,useAppSelector } from "./redux/hooks"
import { useEffect } from 'react'
import { getMovies } from "./redux/MovieSlice"
function App() {
  
  const dispatch = useAppDispatch()
  const {data: movie} = useAppSelector(state => state.movie)
  useEffect(()=>{
     dispatch(getMovies())
  }, [])
     
  
  
  return (
    <div>
      {movie?.map((movieData:any)=>(
        
        
        <h1>{movieData.Title}</h1>
           
        
      ))}
      hii
    </div>
    
    
  )
}

export default App
