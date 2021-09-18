import { Col } from "react-bootstrap";

const Ingredients = ({ingredients}) => {
    return (
        <Col>{ingredients ? <>Ingredients: {ingredients.join(", ")}</> : ""}</Col>
    )
};

export default Ingredients;
