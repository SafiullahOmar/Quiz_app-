import React, { useEffect, useState } from 'react'
import axios from "axios"
axios.defaults.baseURL="https://opentdb.com"
function useAxios({url}) {
    const [response , setResponse] = React.useState(null)
    const [error , setError] = React.useState(null)
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        const fetchDate=(url)=>{
            axios.get(url)
            .then((res)=>setResponse(res.data))
            .catch(error=>setError(error))
            .finally(()=>setLoading(false));
        }
        fetchDate(url);
    },[url]);

    return { response, error, loading };
}
export default useAxios