import { useState, useEffect } from "react";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    const REACT_APP_GOOGLE_API_KEY = "AIzaSyDyJU5peNQE4iSQastsy9tu0pD4_35jll8";
    const REACT_APP_CONTEXT_KEY = "a2428453afb33471d";

    useEffect(()=> {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${REACT_APP_GOOGLE_API_KEY}&cx=${REACT_APP_CONTEXT_KEY}&q=${term}`
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
