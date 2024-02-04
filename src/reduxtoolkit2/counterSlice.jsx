import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const counterSlice = createSlice({
    name:"fetchdata",
    initialState:{
        value:[]
    },
    reducers:{
        setFetchdata:()=>{
             const fe = async(state)=>{
              let data =await axios.get('https://jsonplaceholder.typicode.com/posts');
              let response = await data.data;
              console.log(response)
            //  state.value = response;
            }
            fe()
          
        }
    }

})

export const {setFetchdata} = counterSlice.actions;

export default counterSlice.reducer;