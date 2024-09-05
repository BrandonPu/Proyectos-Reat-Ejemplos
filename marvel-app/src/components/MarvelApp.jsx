import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from "./GridCharacters";

export const MarvelApp = () => {

    const { characters } = useCharacters()

    return (
        <>
            <GridCharacters characters={characters} />
            <Pagination count={100} size="large" onChange={(e, value) => console.log(value)}/>
        </>
    )
}
