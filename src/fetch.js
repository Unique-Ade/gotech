import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
        useEffect(() => {
            fetch(url)
                .then((res) => {
                    if(!res.ok){
                        throw Error("Please reload page");
                    }
                    return res.json() })
                .then((data) => {
                    setData();
                    setError(false)
                })
                .catch((e)=>{
                    setError(true)
                })
        }, [url]);
    return {data, error};
}

export default UseFetch;