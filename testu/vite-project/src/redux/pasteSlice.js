import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
    pastes: localStorage.getItem('pastes') 
    ? JSON.parse(localStorage.getItem('pastes')) 
    : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
        const newPaste = action.payload;
        // check if paste already exists like title or content
        state.pastes.push(newPaste);
        localStorage.setItem('pastes', JSON.stringify(state.pastes))
        
        toast('Created SuccessFully ...');

    },
    updateToPastes: (state,action) => {
        const newPaste = action.payload;
        const index = state.pastes.findIndex(paste => paste.id === newPaste.id);
        if(index >= 0){
            state.pastes[index] = newPaste;
            localStorage.setItem('pastes', JSON.stringify(state.pastes))
            toast.success('Updated SuccessFully ...');}
    },
    resetAllPastes: (state, action) => {
      state.pastes=[]
      localStorage.removeItem('pastes')
    },
    removeFromPastes: (state, action) => {
        const pasteId = action.payload;
        console.log(pasteId);
        const index = state.pastes.findIndex(paste => paste.id === pasteId);
        if(index >= 0){
            state.pastes.splice(index, 1);
            localStorage.setItem('pastes', JSON.stringify(state.pastes))
            toast.success('Deleted SuccessFully ...');
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes,resetAllPastes,removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer