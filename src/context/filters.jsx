import { createContext, useState } from "react";

//Crear contexto! Y se debe consumir!
export const Filterscontext = createContext()

//Crear provider, para proveer el contexto y este provee acceso a los datos!
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return(
        <Filterscontext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </Filterscontext.Provider>
    )
}