import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ( { category } ) => {

    const { gifs, isLoading, error } = useFetchGifs(category);
    
    return (
        <>
            <h3 
                className="
                    text-3xl font-bold mt-4 w-full text-center text-blue-950 
                    mb-4 bg-green-300 py-2 px-4 rounded-xl">
                { category }
            </h3>
                {isLoading && <h1>Cargando...</h1>}
            {
                gifs.map( (gif) => (  
                    <GifItem key={gif.id} { ...gif } />
                ))
            }
        </>
    )
}
