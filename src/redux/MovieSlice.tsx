import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  data :[] ,
  loading: boolean,
  error: string | null
}

const initialState: CounterState = {
  data :[],
  loading:false,
  error:""
}
 export const getMovies = createAsyncThunk("movie/get",async () => {
    const data=await fetch("https://www.omdbapi.com/?s=avengers&apikey=9055c456")
      const result=await data.json();
      return result;
      console.log(result);
      
})

export const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers(builder){
     builder
     .addCase(getMovies.pending,(state)=>{
          state.loading = true;
     })
     .addCase(getMovies.fulfilled,(state,action)=>{
            state.loading=false;
            state.error=null;
            state.data= action.payload
     })
     .addCase(getMovies.rejected,(state,action:any)=>{
        state.loading=false;
        state.error = action.payload;
        state.data = []
     })
  }
})




export default MovieSlice.reducer