import { useContext } from "react"
import { Filterscontext } from "../context/filters"

export const useFilters = () => {

    //const [filters, setFilters] = useState({
      //category: 'all',
      //minPrice: 0
    //})
  
    const {filters, setFilters} = useContext(Filterscontext)
  
    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.price >= filters.minPrice && 
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
    }
  
    return { filters, filterProducts, setFilters }
  }