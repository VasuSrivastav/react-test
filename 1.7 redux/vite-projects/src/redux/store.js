import {configureStore} from '@reduxjs/toolkit'
// step -5 part down 
import counterreducers from '../features/counter/counterSlice'


export default configureStore(
    {
        reducer :{
            counter:counterreducers  //step 5 add
        }
    }
)
