import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { propTypes } from "react-bootstrap/esm/Image";
import "./MovieCard.css";
const MovieCard = (props) => {
  return (
    <Card className="MovieCard">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Movie Title</Card.Title>
        <Card.Text>
          <span className={props.ratingClass}>9.8</span>
        </Card.Text>
        <Card.Text className="overview">
          <h5>Overview</h5>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
export default MovieCard;
