import CoffeeService from "../services/CoffeeService";

const { createContext, useContext, useState, useEffect } = require("react");


const coffeeContext = createContext({})

const CoffeeContext = ({children}) => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        getCoffees()
    })

    const getCoffees = () => {
        CoffeeService.getCoffees().then(response => {
            setCoffees(response)
        })
    }

    return (
        <coffeeContext.Provider value={{
            coffees
        }}>
            {children}
        </coffeeContext.Provider>
    )
}

export const useCoffee = () => {
    return useContext(coffeeContext)
}

coffeeContext.displayName = "CoffeeContext";

export default CoffeeContext