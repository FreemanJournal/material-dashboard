import {createSlice} from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit"
interface ProductState{
    images:any []
}
const initialState:ProductState = {
    images:[]
}
export const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        setSliderImage:(state:ProductState,action:PayloadAction<[]>) =>{
            state.images = action.payload
        },
        deleteImage:(state:ProductState,action:PayloadAction<string>)=>{
            let fileIndex = +action.payload
            const fileList = Array.from(state.images)
            fileList.splice(fileIndex,1)
            state.images = fileList
        }
    },
   
    

})

export const {setSliderImage,deleteImage} = productSlice.actions
export default productSlice.reducer;