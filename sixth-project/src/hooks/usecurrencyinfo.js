import { useEffect, useState } from "react";

function useCurrencyinfo(currency="usd"){
    const [data, setdata] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((response) => {
            setdata(response[currency]);
        });
    }, [currency]);
    return data;
}

export default useCurrencyinfo;

