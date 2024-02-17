import { useState, useEffect } from "react"; 


export default function useLocalStorage<T>(key: string, initialState: T) {


 const [value, setValue] = useState<T>(initialState);


 useEffect(() => {
   const items = localStorage.getItem(key)
   if(items) {
     setValue(JSON.parse(items))
   } else {
     setValue(initialState)
   }
 }, [])


 useEffect(() => {
   if (value) {
     localStorage.setItem(key, JSON.stringify(value));
   }
 }, [key, value]);

 return [value, setValue];
}