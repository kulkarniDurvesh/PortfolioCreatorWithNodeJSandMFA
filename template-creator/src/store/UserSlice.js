
import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    UserName:''
}


const userSlice = createSlice({
    
    name:'user',
    initialState,
    reducers:{
        setLoginName(state,action){
            debugger;
            console.log(action.payload);
            state.UserName =action.payload;
        }
    }
    
});

export const {setLoginName} = userSlice.actions;

export default userSlice.reducer;

