import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <Card className="MovieCard">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className="movieTitle">
          {props.movieTitle}
          <span className={props.ratingClass}>{props.rating}</span>
        </Card.Title>

        <Card.Text className="overview">
          <h5>Overview</h5>
          <p>{props.description}</p>
          <Button variant="primary" className="trailer-button">
            Watch trailer
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default MovieCard;
