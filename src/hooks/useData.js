import { useEffect, useState } from "react"

const useData=()=>{
    const [data,setData]=useState(null);
    const getData=()=>{
        return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response)=>response.json()).then((json)=> setData(json));
    }

    useEffect(()=>{

    },[]);
    return [data];
};
export default function useClickAway(ref,callback){
    useEffect(()=>{
        function handleClickAway(event){
            if(ref.current && !ref.current.contains(event.target)){
                
            }
        }
    })
}