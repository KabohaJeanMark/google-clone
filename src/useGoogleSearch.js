import { useState, useEffect } from "react";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(()=> {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_GOOGLE_API}&cx=${process.env.REACT_APP_CONTEXT}&q=${term}`
            ).then(response => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData()
    }, [term])

    return { data }
};

export default useGoogleSearch;
