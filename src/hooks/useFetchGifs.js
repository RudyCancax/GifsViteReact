import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = ( category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // OPTION #1
    // useEffect( () => {
    //     getGifs(category).then( gifs => setGifs(gifs));
    // }, []);

    // OPTION #2 - useEffect with async/await external function
    const getGifsArray = async () => {
        const gifs = await getGifs(category);
        setGifs(gifs);
        setIsLoading(false);
    }

    useEffect( () => {
        getGifsArray();
    }, []);

  return {
    gifs,
    isLoading,
    error: null,
  }
}
