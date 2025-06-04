import axios  from "axios";
import { setError, setLoadin, setProducts,setDetails,setCardioDetails, setGYMSYSTEM } from "../ActionType/actiontype";



export function HomeProductData() {
  return function(dispatch) {
    dispatch(setLoadin());
    axios.get("https://the-fitness-store-be.onrender.com/Banches")
      .then((response) => {
        dispatch(setProducts(response.data));
        console.log(response.data);
      })
      .catch((err) => {
        dispatch(setError(err.message));
      });
  };
}






// home product 2nd data
export function HomeProductData2() {
  return function(dispatch) {
    dispatch(setLoadin());
    axios.get("https://the-fitness-store-be.onrender.com/Product2")
      .then((response) => {
        dispatch(setDetails(response.data));
        console.log(response.data);
      })
      .catch((err) => {
        dispatch(setError(err.message));
      });
  };
}


// cardio Product

export function CardioProduct(){
  return function(dispatch){
     dispatch(setLoadin());
     axios.get("https://the-fitness-store-be.onrender.com/Cardio")
     .then((response)=>{
      dispatch(setCardioDetails(response.data))
      console.log(response.data)
     })
     .catch((error)=>{
      dispatch(setError(error.message))
     }) 
     }
}


export function GymSystemProduct(){
  return function(dispatch){
     dispatch(setLoadin());
     axios.get("https://the-fitness-store-be.onrender.com/GYMSYSTEM")
     .then((response)=>{
      dispatch(setGYMSYSTEM(response.data))
      console.log(response.data)
     })
     .catch((error)=>{
      dispatch(setError(error.message))
     }) 
     }
}

