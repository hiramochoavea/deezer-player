import { createContext, useContext } from "react";


export const songsContext = createContext();

export const useSongsContext = () => {
    return useContext(songsContext);
};