import { useEffect, useState } from "react";

export const useFetchData = (country) => {
    const [result, setResult] = useState([]);
    const [filterCountries, setFilterCountries] = useState([])
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() =>{
        if(country) {
            fetchDataFromAPI();
        } else {
            fetchDataFromLocalstorge();
        }
    }, []);
    
    const fetchDataFromAPI = () =>{
        let url = 'https://restcountries.com/v3.1/all'
        setIsLoading(true)
        
        if(country) {
            url = `https://restcountries.com/v3.1/name/${country}`
        }

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if(country) {
                setResult(data[0])
            } else {
                localStorage.setItem('countries', JSON.stringify(data))
                setResult(data)
                setFilterCountries(data)
            }
        })
        .catch(() => setIsError(true))

        .finally(() => setIsLoading(false));
    }

    const fetchDataFromLocalstorge = () =>{
        const data = JSON.parse(localStorage.getItem('countries'));

        if(data) {
            setResult(data);
            setFilterCountries(data);
        } else {
            fetchDataFromAPI();
        }
    }

      return {
        result,
        filterCountries,
        setFilterCountries,
        isLoading,
        isError
      }
}