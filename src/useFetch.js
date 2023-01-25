import { useState,useEffect } from "react";
const useFetch = (url) => {
    const [data,setdata]=useState(null);
    const [ispending,setispending]=useState(true);
    const [error,seterror]=useState(null);
    
    useEffect(()=>{
        const abortCont= new AbortController();
        setTimeout(()=>{
            fetch(url,{ signal:abortCont.signal})
        .then(res=>{
            if(!res.ok)
            {
                throw Error('could not be fetched');
            }
            return res.json();
        })
        .then(data=>{
            setdata(data);
            setispending(false);
            seterror(null);
        })
        .catch(err=>{
            if(err.name=='AbortError'){
                console.log('fetch aborted');
            }
            else{
                setispending(false);
                seterror(err.message);
            }
           
        })
        },1000)
        return ()=>abortCont.abort();
    },[url]);
    return {data,ispending,error};
}
 
export default useFetch;