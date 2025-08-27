import { useEffect, useState, useState } from "react";

function useCurrencyinfo(currency){
    const [data, setdata] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/${currency}`)
        .then((response) => response.json())
        .then((response) => {
            setdata(response[currency]);
            console.log(data);
        });
    }, [currency]);
    return data;
}

export default useCurrencyinfo;

