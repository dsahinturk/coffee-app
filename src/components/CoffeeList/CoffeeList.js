import { Container } from "react-bootstrap";
import { useCoffee } from "../../contexts/CoffeeContext";
import CoffeeDetail from "../CoffeeDetail/CoffeeDetail";
import Layout from "../shared/Layout/Layout";

const CoffeeList = ({}) => {
    const {coffees} = useCoffee();
    console.log(coffees)
    return (
        <Container>
            {coffees?.map((coffee, i) => <CoffeeDetail key={`@coffeelist-${i}`} coffee={coffee}></CoffeeDetail>)}
        </Container>
    )
};

export default CoffeeList;
