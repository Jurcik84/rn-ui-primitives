import { Dispatch} from 'react';
import {fetchLoading, fetchDate, fetchError} from './screen.actions';
import {Actions} from './screen.types';

// EXPERIMENTAL
// import { useQuery } from "react-query";

export const useGetFetch = (dispatch: Dispatch<Actions>):void => {

  // then((res)=>{   if(res.ok) { .....  }})
  // should be implemented
    dispatch(fetchLoading());
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchDate(data));
      })
      .catch((error) => {
        dispatch(fetchError(error));
      });
};



// EXPERIMENTAL 
// CACHING NEXT
// POOLING NEXT
// TO EXPORE

// const fetchUsers = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

// export const useReactQuery = () => {
//   const { data, status } = useQuery("users", fetchUsers);
//    console.log('data',data);
//    console.log('status',status)

//    return {
//     data, status
//    }

// };



// 
// // https://www.giacomocerquone.com/blog/aborting-fetch-react-native
// const makeCancelable = promise => {
//   let hasCanceled_ = false

//   const wrappedPromise = new Promise((resolve, reject) => {
//     promise.then(
//       val => (hasCanceled_ ? reject({ isCanceled: true }) : resolve(val)),
//       error => (hasCanceled_ ? reject({ isCanceled: true }) : reject(error))
//     )
//   })

//   return {
//     promise: wrappedPromise,
//     cancel() {
//       hasCanceled_ = true
//     },
//   }
// }

// const {promise, cancel} = makeCancelable((fetch("https://jsonplaceholder.typicode.com/users")))

// promise.then((data)=>data.json())
// .then(()=>cancel())
// .then((data)=>console.log("data",data))
// .catch((err)=>console.log('errr', err.message))
