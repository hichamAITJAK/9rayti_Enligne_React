
import { createSlice } from "@reduxjs/toolkit"


export const SavedItemSlice = createSlice({
    name : "savedItems",
    initialState : [],
    reducers : {
        AddCourToSaved: (state ,action)=>{
          
            state.push(action.payload)
            fetch('http://localhost:3100/SavedCourses',{
                method : 'POST',
                headers : {
                   'Content-Type' : 'application/json'
                },
                body : JSON.stringify(action.payload)
            })
        },
        AddCourToCart : (state ,action)=>{ 
            state.push(action.payload)
            fetch('http://localhost:3100/CartCourses',{
                method : 'POST',
                headers : {
                   'Content-Type' : 'application/json'
                },
                body : JSON.stringify(action.payload)
            })
        },
        DeleteCourFromSaved : (state ,action)=>{
            console.log("course id : ",action.payload.id)            
            fetch(`http://localhost:3100/SavedCourses/${action.payload.id}`,{method : 'DELETE'})
        }  ,
        DeleteAllCourFromSaved : (state ,action)=>{              
            console.log("courses : ", action.payload)    
            action.payload.forEach(element => {
                fetch(`http://localhost:3100/SavedCourses/${element.id}`,{method : 'DELETE'})
            });   
             console.log("All data was dellete from saved" )
        }  ,
        DeleteCourFromCart : (state ,action)=>{
            console.log("course id : ",action.payload.id)
           fetch(`http://localhost:3100/CartCourses/${action.payload.id}`,{method : 'DELETE'})
        }  ,
        DeleteAllCourFromCart : (state ,action)=>{              
            console.log("courses : ", action.payload)    
            action.payload.forEach(element => {
                fetch(`http://localhost:3100/CartCourses/${element.id}`,{method : 'DELETE'})
            });   
             console.log("All data was dellete from Cart" )
        }
    }
})

 export const {AddCourToSaved, DeleteCourFromSaved,AddCourToCart,DeleteCourFromCart,DeleteAllCourFromSaved,DeleteAllCourFromCart} = SavedItemSlice.actions;
export default SavedItemSlice.reducer
