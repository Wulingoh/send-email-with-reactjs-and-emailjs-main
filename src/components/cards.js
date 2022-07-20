import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardWithHeader = (props) => {
  return (
    <div className='container'>
      <h2>{props.maintitle}</h2>
      <Card>
        <Card.Header>{props.sectiontitle}</Card.Header>
        <Card.Body>
          <Card.Text>{props.q1}</Card.Text>
          <Card.Text>
            <textarea
              type='text'
              className='form-control'
              id={props.q1name}
              name={props.q1name}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Text>{props.q2}</Card.Text>
          <Card.Text>
            <textarea
              type='text'
              className='form-control'
              id={props.q2name}
              name={props.q2name}
            />
          </Card.Text>
        </Card.Body>
      </Card>
      {props.q3 != null ? (
        <Card>
          <Card.Body>
            <Card.Text>{props.q3}</Card.Text>
            <Card.Text>
              <textarea
                type='text'
                className='form-control'
                id={props.q3name}
                name={props.q3name}
              />
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardWithHeader;
