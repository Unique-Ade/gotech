import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw Error("Please reload page");
                    }
                    return res.json()
                })
                .then((data) => {
                    setData(data);
                    setError(null)
                })
                .catch((err) => {
                    setError(err.message)
                })
        }, 1000)

    }, [url]);
    return { data, error };
}

export default UseFetch;