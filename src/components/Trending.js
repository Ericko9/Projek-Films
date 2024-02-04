import Card from "react-bootstrap/Card";
import duneImage from "../assets/images/trending/dune.jpg";
import { Container, Row, Col } from "react-bootstrap";

const Trending = () => {
  return (
    <div> 
      <Container>
        <Row>
          <Col className="movieImage">
            <Card className="text-dark text-center">
              <Image src={duneImage} alt="Dune Images" />
              <Card.Title>DUNE</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
